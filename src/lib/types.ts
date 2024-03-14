import { adCommonOwnershipAbi, directListingsLogicAbi } from "@/generated";
import { ContractFunctionReturnType } from "viem";

export type Listing = ContractFunctionReturnType<
  typeof directListingsLogicAbi,
  "view",
  "getAllListings"
>[0];

export type AdGroup = ContractFunctionReturnType<
  typeof adCommonOwnershipAbi,
  "view",
  "getAdGroup"
>;

export type Ad = ContractFunctionReturnType<
  typeof adCommonOwnershipAbi,
  "view",
  "getAd"
>;

type Metadata = {
  name: string;
  image: string;
  description: string;
};

export type GetAdReturnType = Ad & {
  gatewayUri: string | null;
  metadata: Metadata | null;
};
