"use client";

import { useState, useEffect } from "react";
import { readContract } from "@wagmi/core";
import { config } from "@/app/lib/config";
import { abi, contractAddress } from "@/app/lib/abi";
import { useReadContract } from 'wagmi'

export default function RecentWinner() {

  function shortenAddress(address, chars = 4) {
    return `${address.slice(0, chars + 2)}…${address.slice(-chars)}`;
  }

  const { data: winner, isPending } = useReadContract({
    abi,
    address: contractAddress,
    functionName: "getRecentWinner",
  });


  return (
    <div className="text-white text-sm xl:text-lg text-center overflow-hidden rounded-2xl py-2 px-3 bg-green-400 lg:fixed lg:bottom-10 xl:bottom-8">
      {isPending ? (
        <p>Recent Winner: Loading...</p>
      ) : (
        <p className="">Recent Winner: {shortenAddress(winner)}</p>
      )}
    </div>
  );
}
