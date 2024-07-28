import { Keypair, PublicKey } from '@solana/web3.js';
// DEMO TOKEN 1 - 9 decimals

// ENDPOINTS
export const QUICKNODE_DEVNET_ENDPOINT =
  'https://side-dawn-frog.solana-devnet.quiknode.pro/2ecc46cb14136ac620d6e1bf45f9b57e3b0b89a9/';

// AKA MINT
export const SC_CONTRACT_ADDRESS = new PublicKey('SCeRcmenMmgTAcDizVQV79ybHGjpnmGyDwMDWEGkNj6');

// AKA OWNER
// It needs a proper Keypair

// Try: In production; You should load your dev wallet's secrete key array from env variabless
// Keypair.fromSecretKey([])
// prettier-ignore
export const MINT_AUTHORITY_SECRET = [248,72,193,192,144,210,56,164,209,32,245,9,185,93,170,110,27,80,242,246,91,128,231,28,77,125,242,99,228,252,130,60,10,235,214,175,75,33,0,175,229,215,73,97,102,6,167,20,204,33,74,107,244,21,203,7,23,188,247,146,122,39,119,15]
export const MINT_AUTHORITY_PUBKEY = new PublicKey('jdevXPkVGFfPnVHRFzJ1MsvNtZDwKb11M5EnkyRb5o4');
export const MINT_AUTHORITY_KEYPAIR = Keypair.fromSecretKey(new Uint8Array(MINT_AUTHORITY_SECRET));

// AKA OWNER'S TOKEN ACCOUNT
export const TOKEN_ACCOUNT_ADDRESS = new PublicKey('GxfCFyo2gXKXX1JLWdBS3VRpukotrid8hY8hX5q2satz');

// FEE WALLETS
export const OWNER_FEE_WALLET = new PublicKey('WNztAZyZ92FybFfgmCPP9FBL1hkNtBJP2cpRt8y89xW');
export const DEV_FEE_WALLET = new PublicKey('DVbGPqz5oLvvjeywZfPt6Axrd3KmXphRg8FEtQ5Bfpco');
export const TRX_FEE_WALLET = new PublicKey('FEyu9otMg4hWVgbx5Zc4ThYhSxmYB88XL1TL6AQiigDL');

// OPERATIONS WALLETS

const TEAM_PUBKEY = new PublicKey('TMGvPnpMgmgQVNw8Jy18M1xqQucrdsNuWYf2UucbXRZ');

const MGR_PUBKEY = new PublicKey('MGw67GrJfeePenye8ajfdfDoSRhPsq7YHiK39RE9UBG');

export const AIRDROP_PUBKEY = new PublicKey('ADmLdwJiuqavWHZjSHVkcv1ESbhtcjSC44EPbTmwQJDS');

// SOME USER WALLETS
const USER_A = '';
const USER_B = '';
const USER_C = '';

// DEMO TOKEN 2 - 6 DECIMALS

// FILE SYSTEM WALLETS
const dev1Secrete = [
  58, 155, 36, 81, 146, 87, 167, 134, 16, 241, 17, 251, 25, 122, 92, 114, 223, 65, 39, 110, 197, 131, 32, 72, 90, 230,
  209, 11, 137, 222, 69, 195, 30, 132, 68, 201, 92, 128, 117, 84, 176, 202, 30, 46, 221, 130, 105, 2, 244, 236, 88, 24,
  246, 122, 104, 79, 165, 175, 72, 237, 159, 239, 209, 198,
];

// export const dev1Keypair = Keypair.fromSecretKey()
