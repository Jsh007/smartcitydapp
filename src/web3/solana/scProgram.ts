import { PublicKey } from '@solana/web3.js';

// Change this key to the correct one
export const SC_PROGRAM_PUBKEY = new PublicKey('FHi9b593PHHVjcrvRBXjAmRd6JsHkWCoLmC8CHdkDUy3');

/*
Define your solana functions here and import into the features files where they are needed;
- Wallet Connection using solanaWalletAdaper
- Wallet address compare

Pages:
- SignUpPage: Connect user to their wallet, grab the walletAddress and prefill on the wallet field 
of the signUp form.

Other Places
- Claim btn: Connect user to their wallet, compare if detected walletAddress matches authUser.wallet
if true
    dispatch rtk addTokenClaim
    else
    throw error ('You can only claim tokens with your signup wallet')

*/
