export enum TOKEN {
  RBTC,
  SOV,
  XUSD,
  RUSDT,
  DOC,
  BNBS,
  ETHS,
  BPRO,
  FISH,
}

export type TokenType = {
  id: TOKEN;
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  native: boolean;
};
