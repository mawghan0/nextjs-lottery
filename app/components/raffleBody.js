'use client'

import RecentWinner from "@/app/components/recentWinner";
import EnterLottery from "@/app/components/enterLottery";
import PlayerCount from "@/app/components/playerCount";

import { useConnections } from 'wagmi'



export default function RaffleBody() {

  const connections = useConnections()

  if (connections[0]) {
    if (connections[0].chainid !== 11155111) {
      return <><div className="text-xl text-red-500 font-bold">Change the network to the sepolia</div></>; // If the network doesn't match, return nothing
    }
  }
  return (<>
    <EnterLottery />
    <PlayerCount />
    <RecentWinner /></>)
}