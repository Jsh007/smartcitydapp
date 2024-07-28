import {
  AIRDROP_PUBKEY,
  DEV_FEE_WALLET,
  MINT_AUTHORITY_KEYPAIR,
  MINT_AUTHORITY_PUBKEY,
  OWNER_FEE_WALLET,
  SC_CONTRACT_ADDRESS,
  TOKEN_ACCOUNT_ADDRESS,
} from 'src/web3/constants';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_2022_PROGRAM_ID,
  createAssociatedTokenAccountIdempotent,
  createAssociatedTokenAccountInstruction,
  createTransferCheckedInstruction,
  createTransferInstruction,
  getAccount,
  getAssociatedTokenAddress,
  getOrCreateAssociatedTokenAccount,
} from '@solana/spl-token';
import { Box, Button, Card, Typography } from '@mui/material';
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  TransactionInstruction,
  TransactionMessage,
  VersionedTransaction,
  clusterApiUrl,
} from '@solana/web3.js';
import { Keypair, SystemProgram, Transaction } from '@solana/web3.js';
// import Button from '@components/buttons/Button';
import React, { FC, useCallback } from 'react';
import { SignerWalletAdapterProps, WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { Wallet, useConnection, useWallet } from '@solana/wallet-adapter-react';

import AmountText from '@components/texts/AmountText';
import { DragHandle } from '@mui/icons-material';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { getTokenDecimals } from 'src/web3/helpers';

function UserTokenAffiliateClaimingPage() {
  // This page should get the user's Total Earned points:
  // const totalPoints = useGetAffiliateUserEarnings - get all of the user's earnings docs (where type: token/task | bonus | referral/signup)
  // This value that'll be passed to the AmountText component.
  // Actual token earning would be;  totalPoints / basepoint (1000) - this should be passed to the amt argument of the token
  // transfer instruction and the second AmountText component.
  const totalScEarnings = 50;

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
    const DEV_FEE_IN_LAMPORTS = 0.012 * LAMPORTS_PER_SOL;
    const OWNER_FEE_IN_LAMPORTS = 0.012 * LAMPORTS_PER_SOL;
    const TOTAL_FEE_IN_LAMPORTS = OWNER_FEE_IN_LAMPORTS + DEV_FEE_IN_LAMPORTS + RENT_FEE;

    // SC TRANFER AMOUNT
    const scDecimals = await getTokenDecimals(connection, SC_CONTRACT_ADDRESS);
    const amt = totalScEarnings * Math.pow(10, scDecimals);

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

    // SENDING DIIRECTLY FROM TOKEN CONTRACT ACCOUNT (ATA ACCOUNT)

    const userTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      MINT_AUTHORITY_KEYPAIR,
      SC_CONTRACT_ADDRESS,
      publicKey,
      true,
      'finalized',
      // { commitment: 'confirmed', preflightCommitment: 'confirmed' },
      {},
      TOKEN_2022_PROGRAM_ID,
    );

    console.log('User Token Account', userTokenAccount.address.toString());

    // METHOD 3
    // Get or create Sender ATA (on-chain) $SC Token account

    const senderTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      MINT_AUTHORITY_KEYPAIR,
      SC_CONTRACT_ADDRESS,
      MINT_AUTHORITY_KEYPAIR.publicKey,
      true,
      'finalized',
      // { commitment: 'confirmed', preflightCommitment: 'confirmed' },
      {},
      TOKEN_2022_PROGRAM_ID,
    );
    console.log('Sender Token Account', senderTokenAccount.address.toString());
    // DEFINE TRANSACTION
    const TxInstructions: TransactionInstruction[] = [];

    // TRANSFER 1

    // Prepare transfer instruction message for Transaction 1

    const transferOwnerFeeIX = SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: OWNER_FEE_WALLET,
      lamports: OWNER_FEE_IN_LAMPORTS,
      programId: SystemProgram.programId,
    });
    TxInstructions.push(transferOwnerFeeIX);

    // TRANSFER 2

    // Prepare transfer instruction message for Transaction 2

    const transferDevFeeIX = SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: DEV_FEE_WALLET,
      lamports: DEV_FEE_IN_LAMPORTS,
      programId: SystemProgram.programId,
    });
    TxInstructions.push(transferDevFeeIX);

    // TRANSFER 3 - Prepare transfer instruction for $Scity
    // USING getorcreateTokenAccount
    const transferTokensIX = createTransferInstruction(
      senderTokenAccount.address,
      userTokenAccount.address,
      MINT_AUTHORITY_KEYPAIR.publicKey,
      amt,
      [],
      TOKEN_2022_PROGRAM_ID,
    );

    // TRANSFER FROM AIRDROP WALLET
    // const transferTokensIX = createTransferInstruction(
    //   getAirdropWalletAssociatedTokenAccountPubkey,
    //   // AIRDROP_PUBKEY,
    //   // senderAccountInfo,
    //   getUserAssociatedTokenAccount, // you may have to use publicKey (User's wallet address)
    //   AIRDROP_PUBKEY,
    //   amt,
    //   // [MINT_AUTHORITY_PUBKEY],
    //   // TOKEN_2022_PROGRAM_ID,
    // );
    TxInstructions.push(transferTokensIX);

    /*
PREPARE TRANSACTION
  - instantiate transaction object and pass all the above instructions in an array
  */
    // let recentBlockhash = await connection.getLatestBlockhash().then((res) => res.blockhash);
    // const blockHash = await connection.getLatestBlockhash();

    // WALLET ADAPTER APPROACH
    // get the latest recent blockhash
    const {
      context: { slot: minContextSlot },
      value: { blockhash, lastValidBlockHeight },
    } = await connection.getLatestBlockhashAndContext('finalized');

    // Instantiate transaction - complex approach
    // const message = new TransactionMessage({
    //   payerKey: wallet,
    //   blockhash,
    //   instructions: [transferOwnerFeeIX, transferDevFeeIX, transferTokensIX],
    // }).compileToV0Message();

    /*
  CREATE THE TRANSACTION USING THE ABOVE TRANSFER INSTRUCTIONS
  */

    // Initiate send and sign/confirm
    // const transaction = new VersionedTransaction(message);

    // Try Using simple transaction rather than versioned transaction
    // Burrowed from https://docs.magiceden.io/docs/signing-and-sending-a-transaction
    // ...[createUserTokenAccountIX, transferOwnerFeeIX, transferDevFeeIX, transferTokensIX],

    const transaction = new Transaction().add(...TxInstructions);
    console.log('tx before signing:', transaction);

    // TRANSACTION SETTINGS
    // Set transaction fee payer
    transaction.feePayer = publicKey;
    transaction.recentBlockhash = blockhash;

    // OPTION  2 ONLY
    // transaction.recentBlockhash = blockHash.blockhash;

    // SIGN TRANSACTION
    // To transfer from the  Token mint, you must provide the mintAuthoriy's keypair as a signer
    // To have the user pay the transaction fees, set the user's publicKey as feePayer.
    // transaction.sign(...[MINT_AUTHORITY_KEYPAIR]);

    /*
  ACTUALLY SEND AND CONFIRM THE TRANSACTION
  */

    // ACTUALLY SEND THE TRANSACTION - You may extract this part into a function but ensure to pass the required arguments to it
    try {
      // console.log(signature);
      // const signed = await signTransaction(transaction);
      // const signature = await connection.sendRawTransaction(signed.serialize());
      // const confirmation = await connection.confirmTransaction({
      //   blockhash: blockHash.blockhash,
      //   lastValidBlockHeight: blockHash.lastValidBlockHeight,
      //   signature,
      // });
      // console.log(confirmation, signature);

      // WALLET ADAPTER APPROACH
      const signature = await sendTransaction(transaction, connection, {
        // preflightCommitment: 'finalized',
        minContextSlot,
        signers: [MINT_AUTHORITY_KEYPAIR],
        // skipPreflight: true,
      });
      console.log(signature);
      // const TXstrategy = n

      // Confirm transaction
      const confirmation = await connection.confirmTransaction(
        { blockhash, lastValidBlockHeight, signature },
        'confirmed',
      );
      console.log(confirmation, signature);
      // This is where you ACT:
      // This is where you dispacth useAddClaimMutation to create a new claim doc/record in the claims collection
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
      }}
    >
      <Typography component={'p'} variant="body1" fontWeight={600}>
        Claim your earned tokens into your wallet.
      </Typography>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} columnGap={3}>
        <AmountText amt="150k" unit="pts" />
        <DragHandleIcon fontSize="large" />
        <AmountText amt="150" unit="$sc" />
      </Box>
      <Button
        variant="contained"
        size="large"
        color="primary"
        disableElevation
        disableFocusRipple
        sx={{ borderRadius: 30, paddingY: 2, fontWeight: 'bold', fontSize: '1rem', height: 48, paddingX: '24px' }}
        onClick={handleClick}
        disabled={!PublicKey}
      >
        Claim Tokens
      </Button>
    </Card>
  );
}

export default UserTokenAffiliateClaimingPage;
