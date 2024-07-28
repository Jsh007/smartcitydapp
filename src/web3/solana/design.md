# High-level functional design of the app's blockchain feature

## Keys and Wallets For the SC SPL

- **Development keypair:**
  jdevXPkVGFfPnVHRFzJ1MsvNtZDwKb11M5EnkyRb5o4: jdev... or jsh...(Not recommended - use normal keypair instead) keypair - this is the senior dev's authorized offical keypairs. Only he has access to the mnemonics and secrete keys of those keypairs.
- **Token mint Account (owner keypair):** (Development keypair - create a new vanity account starting with "SC" Instead): The keypair that should create the token mint and assume ownership of the token mint. This keypair will also server as the mintAuthority, freezeAuthority (will be revoked later). It's the only keypair that can mint more tokens. The only wallet from which the mint ATA account was derived.
- Mint Account keypair: starts with StartsWith "SC".

# Required ATAs

- **Development ATA:** Derive this from the development keypair.
- **Mint ATA:** Derive this from the Development keypair public key and Mint address public key.

## Wallets For Operations

- **Community Airdrop Wallet (90bn or 100bn):** The wallet that'll hold the airdrop allocation of the tokens (in addition to the allocation for bonus earnings), (In addition to the allocation for referral earnings; strictly for non-affilate users) . Dev should mint 90bn tokens to this address.
- Bonueses Wallet (10bn) - x(No need - since all token earnings {type: bonus & type: token} plus {type; referral} for non-affiliate's user will be drawn from the same wallet (airdrop wallet)): The wallet that'll hold the airdrop allocation of the tokens for bonuses. Dev should mint 110bn tokens to this address.
- **Liquidity:** The wallet that'll hold the liquidity allocation of the tokens. Dev should mint 5bn tokens to this address.
- **Team:** The wallet that'll hold the Team's allocation of the tokens. Dev should mint 5bn tokens to this address.
- **RD**: The wallet that'll hold the project's Advertisement & other operations expenses allocation of the tokens. Dev should mint 10bn tokens to this address.

# Special Ops wallets (Receiving accounts for taxes)

- **Owner Wallet:** The wallet (public key) where the owner fees (0.0012sol) will be sent.
- **Dev Wallet:** The wallet where the dev fees will be sent (0.0012sol).
- **Fees Wallet:** The wallet where charged transaction fees (0.0062sol)will be sent.

# TOKEN DESIGN

Address: SCj5sx3nHSUnPgiUTWtBTF1dp5iUEYL6u96gm5iDf3C
Decimals: 6

Signature: mCWquvKh5VXuDnDJwLxGYFJjDrGhHeHMwBqtup5fgUaWQnpzFfHDjebYBF3ENqDg1PQ4kxq4pkPxTDkjQdHjrQc

## Token Assets

Mint Wallet/Keypair: SCj5sx3nHSUnPgiUTWtBTF1dp5iUEYL6u96gm5iDf3C.json
Mint Wallet Address -> keypair.privateKey = SCj5sx3nHSUnPgiUTWtBTF1dp5iUEYL6u96gm5iDf3C

## Minting rules:

- The total supply shall be minted to the Mint (wallet) Address and thereby held in the Mint wallet/keypair.
- All operations wallets (airdrop wallet, team wallet, etc ) shall be manually funded from the Mint Wallet. I.e Tokens will be manually transferred from the Mint wallet (mint.address) to the respective operations wallets.
- Tokens held in the respective operations wallets must be spent and/or distributed inline with set procedure and spending rules.

## Spending Rules

**Airdrop wallet**

- Tokens held on the Airdrop wallet must not be manually transferred to any wallet.
- Tokens held must only be transferred/distributed by SC backend App on the following events:
  > A user have accumulated points by performing social tasks and referrals and has clicked the claim btn and followed through with the claiming process successfully.
  > A user have accumulated points by redeeming daily bonuses and has clicked the claim btn and followed through with the claiming process successfully.

**Team wallet:** The team shall decide how to spend the tokens in their wallet.

**Liquidity:** Tokens in the liquidity wallet shall be sold to generate funds for liquidity.

**RD:** Tokens in the RD wallet shall be gradually sold - in small units - to fund research, development and advertisement activities.

# Alternative Spending plan

- Manually transfer tokens from the mint wallet address to operations wallets except the airdrop wallet. This way, airdrop recipients will their tokens directly from the Token mint address when they claim. The dapp will do this automatically when they claim.
