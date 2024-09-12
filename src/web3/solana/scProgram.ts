import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  TransactionMessage,
  VersionedTransaction,
  clusterApiUrl,
} from '@solana/web3.js';
import {
  DEV_FEE_WALLET,
  MINT_AUTHORITY_PUBKEY,
  OWNER_FEE_WALLET,
  SC_CONTRACT_ADDRESS,
  TOKEN_ACCOUNT_ADDRESS,
} from '../constants';
import {
  TOKEN_2022_PROGRAM_ID,
  createTransferCheckedInstruction,
  getOrCreateAssociatedTokenAccount,
} from '@solana/spl-token';

import { Wallet } from '@solana/wallet-adapter-react';

// Sc contract address
// export const SC_CONTRACT_ADDRESS = new PublicKey('SCj5sx3nHSUnPgiUTWtBTF1dp5iUEYL6u96gm5iDf3C');

// Connect to cluster (Let the page component establish the connection. Then pass it to the functions that needs it)
const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

export async function claimEarnedTokens(
  conn: Connection,
  mintAuthority: Keypair,
  ownerFee: number,
  devFee: number,
  userId: String,
  wallet: Keypair,
  amt: number,
) {
  /*
Prepare user wallet
*/
  const userWalletAddress = new PublicKey(wallet);
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

  /*
Preflight checks
- If the user has insufficient sol balance, return early
*/

  const solBalance = await connection.getBalance(userWalletAddress);
  if (solBalance <= TOTAL_FEE_IN_LAMPORTS) {
    const message = 'Not enough SOL to complete the transaction';
    return message;
  }

  /*
  prepare Transfer Instructions For $SC Tokens
  sender (fromWallet) - Contract Token Account
  Receiver (toWallet) - userWallet (we'll auto create a token account for it)
  */

  // Get or create Sender on-chain $SC Token account

  const senderAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    wallet,
    SC_CONTRACT_ADDRESS,
    mintAuthority.publicKey,
  );

  //Get or create Receiver on-chain $SC Token account

  const userTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    wallet,
    SC_CONTRACT_ADDRESS,
    wallet.publicKey,
  );

  // prepare Transfer Instruction message For $SC Tokens

  const transferTokensIX = createTransferCheckedInstruction(
    TOKEN_ACCOUNT_ADDRESS,
    SC_CONTRACT_ADDRESS,
    wallet.publicKey,
    mintAuthority.publicKey,
    amt,
    6,
    [],
    TOKEN_2022_PROGRAM_ID,
  );

  /*
  prepare Transfer Instructions For SOL
  Transfer 1
  sender (fromWallet) - userWallet
  Receiver (toWallet) - ownerWallet

  Transfer 2
  sender (fromWallet) - userWallet
  Receiver (toWallet) - devWallet
  */

  // TRANSFER 1

  // Get or create Sender on-chain SOL account

  // Get or create Receiver on-chain account

  // Prepare transfer instruction message for Transaction 1

  const transferOwnerFeeIX = SystemProgram.transfer({
    fromPubkey: userWalletAddress,
    toPubkey: OWNER_FEE_WALLET,
    lamports: OWNER_FEE_IN_LAMPORTS,
    programId: SystemProgram.programId,
  });

  // TRANSFER 2

  // Get or create Sender on-chain SOL account

  // Get or create Receiver on-chain SOL account

  // Prepare transfer instruction message for Transaction 2

  const transferDevFeeIX = SystemProgram.transfer({
    fromPubkey: userWalletAddress,
    toPubkey: DEV_FEE_WALLET,
    lamports: DEV_FEE_IN_LAMPORTS,
    programId: SystemProgram.programId,
  });

  /*
  Prepare transaction
  - instantiate transaction object and pass all the above instructions in an array
  */

  // get the latest recent blockhash
  let recentBlockhash = await connection.getLatestBlockhash().then((res) => res.blockhash);

  // Instantiate transaction
  const message = new TransactionMessage({
    payerKey: userWalletAddress,
    recentBlockhash,
    instructions: [transferOwnerFeeIX, transferDevFeeIX, transferTokensIX],
  }).compileToV0Message();

  /*
  Send and confirm transaction
  */

  // Initiate send and confirm
  const transaction = new VersionedTransaction(message);
  // console.log("tx before signing:", tx);
  // Error means you need a keypair with a valid pubKey and privateKey in order to qualify to sign a transaction.
  transaction.sign([wallet]);

  // actually send the transaction
  const sig = await connection.sendTransaction(transaction);

  /**
   * display some helper text
   */
  // printConsoleSeparator();

  console.log('Transaction completed.');
  // console.log(explorerURL({ txSignature: sig }));
}

// export function claimEarnedBonus(conn, userId, devFee, userWallet, amt) {}
