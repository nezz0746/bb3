import { createConfig } from "@ponder/core";
import { http } from "viem";

import { CommonAdSpacesAbi } from "./abis/CommonAdSpacesAbi";
import { DirectListingAbi } from "./abis/DirectListingAbi";

let config;

if (process.env.STAGE === "mainnet") {
  config = createConfig({
    networks: {
      base: { chainId: 8453, transport: http(process.env.PONDER_RPC_URL_8453) },
    },
    contracts: {
      CommonAdSpaces: {
        network: "base",
        address: "0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57",
        abi: CommonAdSpacesAbi,
        startBlock: 15741119,
      },
      DirectListing: {
        network: "base",
        address: "0x9825f700754534108BFE2239C9e66a12FDEBB33e",
        abi: DirectListingAbi,
        startBlock: 15741119,
      },
    },
  });
} else {
  config = createConfig({
    networks: {
      "optimism-sepolia": {
        chainId: 11155420,
        transport: http(process.env.PONDER_RPC_URL_11155420),
      },
    },
    contracts: {
      CommonAdSpaces: {
        network: "optimism-sepolia",
        address: "0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1",
        abi: CommonAdSpacesAbi,
        startBlock: 13331750,
      },
      DirectListing: {
        network: "optimism-sepolia",
        address: "0x44f808B028cD582b21C04f6de3580029d3E31Cb6",
        abi: DirectListingAbi,
        startBlock: 13331750,
      },
    },
  });
}

export default config;
