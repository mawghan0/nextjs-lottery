import Connect from "@/app/components/connect";
import Header from "@/app/components/header";
import Body from "@/app/components/body";
import RecentWinner from "./components/recentWinner";
import EnterLottery from "./components/enterLottery";
import PlayerCount from "./components/playerCount";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex items-center w-full justify-between">
          <Header />
          <Connect />
        </div>
        <Body />
        <EnterLottery />
        <PlayerCount />
        <RecentWinner />
      </div>
    </>
  );
}
