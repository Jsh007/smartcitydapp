import { Box, Button, Card, Typography } from '@mui/material';
import { LAMPORTS_PER_SOL, SystemProgram, Transaction, TransactionInstruction } from '@solana/web3.js';
import { SC_CONTRACT_ADDRESS, TRX_FEE_WALLET } from 'src/web3/constants';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

import AmountText from '@components/texts/AmountText';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { getTokenDecimals } from 'src/web3/helpers';
import { useCallback } from 'react';

function BonusClaimingPage() {
  // This page should get the user's recent Bonus:
  // const activeBonus = useGetUserBonus - get all the user's single recent doc from the bonusOffers collection (where isClaimed: false)
  // The above value will be passed to the AmountText component.
  // The bonus value rendered on the frontend will come from the bonusPoints or points field ( a virtual field) of the Bonus Model.
  // Actual bonus earned will be; const bonuesEarned = bonusPoints / basepoint (1000) - this value should be passed to the amt argument of the token
  // transfer instruction and the second AmountText component.
  const bonuesEarned = 50;

  // WEB3 Coding
  const { connection } = useConnection();
  const { wallet, publicKey, sendTransaction, signTransaction } = useWallet();
  // Connect to cluster (Let the page component establish the connection. Then pass it to the functions that needs it)
  // const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

  const handleClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();
    if (!wallet) throw new WalletNotConnectedError();
    if (!signTransaction) throw new Error('Wallet does not support transaction signing!');

    /*
Define and caculate fees
*/

    // NETWORK FEE
    const space = 0;
    const RENT_FEE = await connection.getMinimumBalanceForRentExemption(space);

    // OPS FEES
    const BONUS_FEE_IN_LAMPORTS = 0.006 * LAMPORTS_PER_SOL;
    // const OWNER_FEE_IN_LAMPORTS = 0.012 * LAMPORTS_PER_SOL;
    const TOTAL_FEE_IN_LAMPORTS = BONUS_FEE_IN_LAMPORTS + RENT_FEE;

    /*
Preflight checks
- If the user has insufficient sol balance, return early
*/

    const solBalance = await connection.getBalance(publicKey);
    if (solBalance <= TOTAL_FEE_IN_LAMPORTS) {
      throw new Error('Not enough SOL to complete the transaction');
      // const message = 'Not enough SOL to complete the transaction';
      // return message;
    }

    /*
  prepare Transfer Instructions For $SC Tokens
  sender (fromWallet) - Contract Token Account
  Receiver (toWallet) - userWallet (we'll auto create a token account for it)
  */

    // DEFINE TRANSACTION
    const TxInstructions: TransactionInstruction[] = [];

    // TRANSFER 2

    // Prepare transfer instruction message for Transaction 2

    const transferBonusFeeIX = SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: TRX_FEE_WALLET,
      lamports: BONUS_FEE_IN_LAMPORTS,
      programId: SystemProgram.programId,
    });
    TxInstructions.push(transferBonusFeeIX);

    /*
  Prepare transaction
  - instantiate transaction object and pass all the above instructions in an array
  */

    const {
      context: { slot: minContextSlot },
      value: { blockhash, lastValidBlockHeight },
    } = await connection.getLatestBlockhashAndContext('finalized');

    /*
  CREATE THE TRANSACTION USING THE ABOVE TRANSFER INSTRUCTIONS
  */

    const transaction = new Transaction().add(...TxInstructions);
    console.log('tx before signing:', transaction);

    // TRANSACTION SETTINGS
    // Set transaction fee payer
    transaction.feePayer = publicKey;
    transaction.recentBlockhash = blockhash;

    /*
  ACTUALLY SEND AND CONFIRM THE TRANSACTION
  */

    // ACTUALLY SEND THE TRANSACTION - You may extract this part into a function but ensure to pass the required arguments to it
    try {
      // WALLET ADAPTER APPROACH
      const signature = await sendTransaction(transaction, connection, {
        // preflightCommitment: 'finalized',
        minContextSlot,
        // signers: [MINT_AUTHORITY_KEYPAIR],
        // skipPreflight: true,
      });
      console.log(signature);

      // Confirm transaction
      const confirmation = await connection.confirmTransaction(
        { blockhash, lastValidBlockHeight, signature },
        'confirmed',
      );
      console.log(confirmation, signature);
      // This is where you ACT:
      /*
      - dispatch useUpdateBonusesMutation - to get and update all (we expect 1 doc though) of the user's bonueses' doc(s) isClaimed to true
      - dispacth useAddEarningMutation - to create a new earining doc/record with {type: bonus} in the Earnings collection
      */
      // Do const {value} = confirmation
      // Call the function if (value.err === null)
      // Required params: userId, walletAddress (publicKey), amt, signature
    } catch (error) {
      console.error(error);
    }
  }, [connection, publicKey, sendTransaction]);

  return (
    // removed height: 80vh
    <Card
      component={'div'}
      elevation={0}
      sx={{
        height: { xs: 380, md: 700 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        padding: { xs: 2, md: 0 },
      }}
    >
      <Typography component={'p'} variant="body1" fontWeight={600} textAlign={'center'} fontSize={'1.2rem'}>
        Claim your allotted bonuses before the day’s allocation runs out to earn more.
      </Typography>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} columnGap={3}>
        <AmountText amt="50k" unit="pts" />
        <DragHandleIcon fontSize="large" />
        <AmountText amt={bonuesEarned.toString()} unit="$sc" />
      </Box>
      <Button
        variant="contained"
        size="large"
        color="primary"
        disableElevation
        disableFocusRipple
        sx={{ borderRadius: 30, paddingY: 2, fontWeight: 'bold', fontSize: '1rem', height: 48, paddingX: '24px' }}
        onClick={handleClick}
        disabled={!publicKey}
      >
        Claim Bonus
      </Button>
    </Card>
  );
}

export default BonusClaimingPage;
