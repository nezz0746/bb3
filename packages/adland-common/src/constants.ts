import { optimismSepolia } from "viem/chains";
import { Constants } from "./types";

export const constants: Constants = {
  ponderUrl: "https://adland-op-sepolia.up.railway.app",
  subgraphUrl:
    "https://api.studio.thegraph.com/query/958/adland-optsepolia/version/latest",
  superfluidSubgraphUrl: "https://optimism-sepolia.subgraph.x.superfluid.dev/",
  pinataPublicGateway: "amethyst-representative-mandrill-369.mypinata.cloud",
  chain: optimismSepolia,
  landingPageAdGroup: "0",
  appUrl: "https://testnet.adland.space",
};
