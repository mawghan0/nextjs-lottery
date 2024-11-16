"use client";

import { abi, contractAddress } from "@/app/lib/abi";
import { useReadContract } from 'wagmi'

export default function PlayerCount() {

  const { data: count, isPending } = useReadContract({
    abi,
    address: contractAddress,
    functionName: "getNumberOfPlayers",
  });

  return (
    <div className="text-sm xl:text-lg text-center overflow-hidden rounded-xl px-3 py-1 bg-blue-400 mb-2 text-white lg:fixed lg:bottom-20 ">
      {isPending ? (
        <p>Player Joined: Loading...</p>
      ) : (
        <p className="">Player Joined: {count.toString()}</p>
      )}
    </div>
  );
}
