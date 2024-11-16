"use client";

import { useState, useEffect } from "react";
import { readContract } from "@wagmi/core";
import { config } from "@/app/lib/config";
import { abi, contractAddress } from "@/app/lib/abi";

export default function RecentWinner() {
  const [winner, setWinner] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function shortenAddress(address, chars = 4) {
    return `${address.slice(0, chars + 2)}…${address.slice(-chars)}`;
  }

  useEffect(() => {

    const fetchWinner = async () => {
      try {
        const result = await readContract(config, {
          abi,
          address: contractAddress,
          functionName: "getRecentWinner",
        });
        setWinner(shortenAddress(result));
      } catch (error) {
        console.error("Error fetching recent winner:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWinner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-white text-sm xl:text-lg text-center overflow-hidden rounded-2xl py-2 px-3 bg-green-400 lg:fixed lg:bottom-10 xl:bottom-8">
      {isLoading ? (
        <p>Recent Winner: Loading...</p>
      ) : winner ? (
        <p className="">Recent Winner: {winner}</p>
      ) : (
        <p>Recent Winner: Not available</p>
      )}
    </div>
  );
}
