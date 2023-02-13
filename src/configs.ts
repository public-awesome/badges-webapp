export enum Network {
  Mainnet = "mainnet",
  Testnet = "testnet",
  Localhost = "localhost",
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
  // a function that takes a txhash and returns a block explorer URL showing this tx
  getExplorerUrl(txhash: string): string;
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
    hub: "stars13unm9tgtwq683wplupjlgw39nghm7xva7tmu7m29tmpxxnkhpkcq4gf3p4",
    nft: "stars1z5qcmx9frn2y92cjy3k62gzylkezkphdwrx3675mvug3fd9l26fshdd85t",
    getExplorerUrl: (txhash: string) => `https://www.mintscan.io/stargaze/txs/${txhash}`,
  },
  [Network.Testnet]: {
    name: "testnet",
    chainId: "elgafar-1",
    prefix: "stars",
    rpcUrl: "https://rpc.elgafar-1.stargaze-apis.com:443",
    gas: undefined,
    gasAdjustment: 1.4,
    gasPrices: "0ustars",
    hub: "stars1mqvzv4wr6j46grrdhfqjmrvt0t6hkmxmwxn2esfdeynzgv9mdanseh99j9",
    nft: "stars1sz5xunz3zanlpl2ldq8w74tfa37cx06hfv6tq47y9a36zzz053ss7wwhzk",
    getExplorerUrl: (txhash: string) =>
      `https://stargaze-testnet-explorer.pages.dev/stargaze/tx/${txhash}`,
  },
  [Network.Localhost]: {
    name: "local",
    chainId: "stars-dev-1",
    prefix: "stars",
    rpcUrl: "http://localhost:26657",
    gas: undefined,
    gasAdjustment: 1.4,
    gasPrices: "0ustars",
    hub: "stars14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9srsl6sm",
    nft: "stars1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrq096cja",
    getExplorerUrl: (_txhash: string) => "", // there's no explorer for localhost
  },
};

/**
 * Since Stargaze has zero gas price, instead of having users connect their own wallets, we can
 * simply embed a few "public" wallets in the webapp, and submit txs from them.
 *
 * We use multiple accounts, and randomly choose one for submitting the tx. This is because if
 * multiple people are submitting txs in the same block, they may have account sequence mismatch
 * errors if using the same account. Having multiple account availble minimizes the likelihood of
 * this error.
 */
export const PUBLIC_ACCOUNTS = [
  "daughter equip install sugar spray radio dance shift hundred potato diagram crumble elbow jealous once muscle grass fatal avoid obey tray record ill photo",
  "soft electric bulb cube sniff goddess fringe smoke rate note cigar luggage gap cat speed step clinic valve know wreck hobby surge deer farm",
  "defense fog school raccoon drive own choose truth quality harsh unique fluid person tape transfer spice supply dice van alter food define wing dirt",
  "canyon runway apart voyage mutual rhythm prison tiny sing please fault betray shadow swear toward beauty transfer sure leopard prosper assist humor stage pyramid",
  "follow remind believe repair domain fade sheriff old clerk rule member settle frost skin require squirrel rifle fee lonely scrub famous misery move outdoor",
  "forward slide culture few lawn spawn portion under already student night beauty inject hat foster stumble exit area vault fade one want brush live",
  "prepare soup swing tonight volcano lens glimpse inform unaware tomorrow expire hurt appear improve purchase poet update monitor female defense sun donor frequent embody",
  "dismiss verify together spike agree human keen cinnamon wreck indoor arrow swap unfold imitate reject silk food junk orphan amount enhance such bean rug",
  "left physical cliff pumpkin chimney sock claim asset refuse rug neutral shrug wall obey fruit punch lunar battle harvest note merit bottom later garlic",
  "coast keen penalty old tape winner pepper squeeze replace behave abandon master stay sample practice excite bright school pioneer cheese scale law census miracle",
  "impulse embrace subject subway update unfair wool uniform reject weapon diesel north duty loan mother alarm shock agree lady piece spring toilet uniform disorder",
  "bulk oil three faint hood return apart stock attract nice unfair sphere emerge obey music tray anchor vague universe bag produce limit annual father",
  "doll bus impact chair fabric shallow impose cruise scorpion episode gallery forget ask main coyote when badge volume denial material group patient waste school",
  "dance brush sentence can apology decade sing venue meat outdoor credit achieve hobby word crawl render kind expose resemble person gas gym evil slab",
  "ride umbrella easy wink bamboo room unknown coconut flash effort chest scorpion pact shaft exile picnic employ ginger state road huge city reveal teach",
  "nest inner evil tell relief base burger coral gentle wood fix shoe poem board inch list unfair more roof cry candy auto wage nerve",
  "please enemy bleak burst recall rookie quick reduce approve ethics butter shield main expand garlic crumble parrot boy wheat key arena horn ordinary insect",
  "conduct garden certain wash timber neglect wash useless flame pitch hint seek sound ability fever ribbon add actor people fame unlock audit core wall",
];
