"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  directListingsLogicAbi,
  useReadDirectListingsLogicGetListing,
  useReadErc721OwnerOf,
  useReadSuperTokenBalanceOf,
  useSimulateDirectListingsLogicBuyFromListing,
  useWatchDirectListingsLogicNewSaleEvent,
  useWriteIsethUpgradeByEth,
} from "@/generated";
import useAppContracts from "@/hooks/useAppContracts";
import { NATIVE_CURRENCY } from "@/lib/constants";
import { allDefined, getSimulationArgs, getWeeklyTaxDue } from "@/lib/utils";
import { useState } from "react";
import { ContractFunctionArgs, formatEther } from "viem";
import { useAccount, useBalance, useWriteContract } from "wagmi";
import { format, addWeeks } from "date-fns";

type BuyFromListinArgs = ContractFunctionArgs<
  typeof directListingsLogicAbi,
  "payable",
  "buyFromListing"
>;

const AcquireLeaseActions = ({ listingId }: { listingId: bigint }) => {
  const { address } = useAccount();
  const { ethx } = useAppContracts();
  const [numberOfWeeks, setNumberOfWeeks] = useState<number>(1);

  const { data: ethXBalane } = useReadSuperTokenBalanceOf({
    address: ethx,
    args: address && [address],
  });

  const { data: ethBalance } = useBalance({
    address: address,
  });

  console.log(ethBalance);

  const { data: listing, refetch } = useReadDirectListingsLogicGetListing({
    args: [listingId],
    query: {
      enabled: listingId !== undefined,
      select: (data) => {
        return {
          ...data,
          listingId: Number(data.listingId),
          listingIdBigInt: data.listingId,
          taxRateBigInt: data.taxRate,
          taxRate: Number(data.taxRate) / 100,
          price: formatEther(data.pricePerToken),
          owner: data.listingCreator,
        };
      },
    },
  });

  const { data: owner, refetch: refetchOwner } = useReadErc721OwnerOf({
    address: listing?.assetContract,
    args: [listing?.tokenId ?? BigInt(0)],
    query: {
      enabled: Boolean(listing?.assetContract),
    },
  });

  const { writeContract: callUpgradeByEth } = useWriteIsethUpgradeByEth();

  const depositRent = (weeks: number) => {
    const price = listing?.pricePerToken;
    const taxRate = listing?.taxRateBigInt;

    if (!taxRate || price === undefined) return;

    callUpgradeByEth({
      address: ethx,
      args: undefined,
      value: getWeeklyTaxDue(price, taxRate) * BigInt(weeks),
    });
  };

  useWatchDirectListingsLogicNewSaleEvent({
    args: {
      listingId: listing?.listingIdBigInt,
    },
    onLogs: () => {
      refetch();
      refetchOwner();
    },
  });

  const { data: buyRequest } = useSimulateDirectListingsLogicBuyFromListing({
    args: getSimulationArgs<BuyFromListinArgs>([
      listing?.listingIdBigInt,
      address,
      BigInt(1),
      NATIVE_CURRENCY,
      listing?.pricePerToken,
    ]),
    value: listing?.pricePerToken,
    query: {
      enabled:
        allDefined(owner, address, listing?.listingIdBigInt) &&
        address?.toLowerCase() !== owner?.toLowerCase(),
    },
  });

  const { writeContract } = useWriteContract();

  const numberOfWeeksAvailable = Number(
    (listing?.pricePerToken &&
      (ethXBalane ?? BigInt(0)) /
        getWeeklyTaxDue(listing?.pricePerToken, listing?.taxRateBigInt)) ??
      0
  );

  return (
    <div className="flex flex-col gap-4 w-full">
      <p>Balance: {formatEther(ethXBalane ?? BigInt(0))} ETHx</p>
      <p>
        Weekly Tax Due:{" "}
        {formatEther(
          getWeeklyTaxDue(
            listing?.pricePerToken ?? BigInt(0),
            listing?.taxRateBigInt ?? BigInt(0)
          )
        )}{" "}
        ETHx
      </p>
      <p>
        Current balance covers tax until{" "}
        {format(addWeeks(Date.now(), numberOfWeeksAvailable), "MMM d, yyyy")} (
        {numberOfWeeksAvailable} weeks)
      </p>
      <div className="flex flex-row gap-4">
        <Slider
          defaultValue={[0]}
          max={10}
          step={1}
          onValueChange={(value) => {
            setNumberOfWeeks(value[0]);
          }}
        />
        <Button
          onClick={() => {
            depositRent(numberOfWeeks);
          }}
        >
          Deposit Rent: {numberOfWeeks} weeks
        </Button>
      </div>
      <p>Balance {Number(formatEther(ethBalance?.value ?? BigInt(0)))} ETH</p>
      <Button
        disabled={!Boolean(buyRequest?.request)}
        onClick={() => {
          writeContract(buyRequest!.request);
        }}
      >
        Take over lease ({listing?.price} ETH)
      </Button>
    </div>
  );
};

export default AcquireLeaseActions;
