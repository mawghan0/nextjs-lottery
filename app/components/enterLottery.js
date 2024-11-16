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
    <button onClick={enterRaffle} disabled={isPending} className="text-xl font-bold text-center text-white rounded-full px-1 py-3 mb-3 border border-green-400 bg-green-400 ">
      {isConnected ? (isPending ? "Entering..." : "Enter Raffle") : "Connect Wallet First"}
    </button>
    <p className='text-center text-base mb-14 lg:mb-36'>It need <span className='text-red-500'>0.01 Eth(Sepolia Testnet)</span> to entry the lottery</p>
  </>);
}
