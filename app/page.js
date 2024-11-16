import Connect from "@/app/components/connect";
import Header from "@/app/components/header";
import Body from "@/app/components/body";
import RaffleBody from "@/app/components/raffleBody";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-sky-950 to-slate-400 flex flex-col px-1 py-5 items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
        <div className="flex items-center w-full justify-between mb-10 pr-2 lg:mb-20">
          <Header />
          <Connect />
        </div>
        <Body />
        <RaffleBody />
      </div>
    </>
  );
}
