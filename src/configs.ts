export enum Network {
  Mainnet = 1,
  Testnet,
  Local,
}

export type NetworkConfig = {
  // chain info
  name: string;
  chainId: string;
  prefix: string;
  rpcUrl: string;
  // gas settings
  gas?: number;
  gasAdjustment: number;
  gasPrices: string;
  // contract addresses
  hub: string;
  nft: string;
  batcher?: string;
};

export const NETWORK_CONFIGS: { [key in Network]: NetworkConfig } = {
  [Network.Mainnet]: {
    name: "mainnet",
    chainId: "stargaze-1",
    prefix: "stars",
    rpcUrl: "https://rpc.stargaze-apis.com:443",
    gas: undefined,
    gasAdjustment: 1.4,
    gasPrices: "0ustars",
    hub: "",
    nft: "",
    batcher: undefined,
  },
  [Network.Testnet]: {
    name: "testnet",
    chainId: "elgafar-1",
    prefix: "stars",
    rpcUrl: "https://rpc.elgafar-1.stargaze-apis.com:443",
    gas: undefined,
    gasAdjustment: 1.4,
    gasPrices: "0ustars",
    hub: "",
    nft: "",
    batcher: undefined,
  },
  [Network.Local]: {
    name: "local",
    chainId: "stars-dev-1",
    prefix: "stars",
    rpcUrl: "http://localhost:26657",
    gas: undefined,
    gasAdjustment: 1.4,
    gasPrices: "0ustars",
    hub: "stars14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9srsl6sm",
    nft: "stars1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrq096cja",
    batcher: undefined,
  },
};
