"use client";

import { useState, useEffect } from "react";
import { readContract } from "@wagmi/core";
import { config } from "@/app/lib/config";
import { abi, contractAddress } from "@/app/lib/abi";

export default function PlayerCount() {
  const [count, setCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountPlayer = async () => {
      try {
        const result = await readContract(config, {
          abi,
          address: contractAddress,
          functionName: "getNumberOfPlayers",
        });
        setCount(result.toString());
      } catch (error) {
        console.error("Error fetching recent count:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountPlayer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-base text-center overflow-hidden rounded-lg px-3 py-2 bg-blue-400">
      {isLoading ? (
        <p>Player Joined: Loading...</p>
      ) : count ? (
        <p className="">Player Joined: {count}</p>
      ) : (
        <p>Player Joined: Not available</p>
      )}
    </div>
  );
}
