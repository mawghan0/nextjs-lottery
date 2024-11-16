"use client";

import { useWriteContract } from 'wagmi'
import { abi, contractAddress } from "@/app/lib/abi";
import { parseEther } from "viem";
import { useAccount } from 'wagmi'

export default function EnterLottery() {
  const { isConnected } = useAccount();

  const { writeContract, isPending } = useWriteContract()
  const value = parseEther("0.01")
  const enterRaffle = async () => {
    writeContract({
      abi,
      address: contractAddress,
      functionName: "enterRaffle",
      value: value
    });
  };

  return (<>
    <button onClick={enterRaffle} disabled={isPending} className="text-xl font-bold text-center text-blue-400 rounded-lg px-7 py-2 border border-blue-400">
      {isConnected ? (isPending ? "Entering..." : "Enter Raffle") : "Connect Wallet First"}
    </button>
    <p>It needs 0.001 Eth(Sepolia Testnet) to entry the lottery</p>
  </>);
}
