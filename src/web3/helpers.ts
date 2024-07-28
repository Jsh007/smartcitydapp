import { Connection, ParsedAccountData, PublicKey } from '@solana/web3.js';

export const getTokenDecimals = async (conn: Connection, MINT_ADDRESS: PublicKey) => {
  const info = await conn.getParsedAccountInfo(new PublicKey(MINT_ADDRESS));
  const result = (info.value?.data as ParsedAccountData).parsed.info.decimals as number;
  return result;
};
