"use client";
import { motion } from "framer-motion";

const roadmap = [
  {
    id: "1",
    title: "Genesis",
    points: [
      "Launch Meowlet Telegram Mini App",
      "Tap mining + basic tasks",
      "Viral referrals",
      "Official MKC channels live",
    ],
  },
  {
    id: "2",
    title: "Expansion",
    points: [
      "Deploy Treasury strategies",
      "Boost contributor rewards",
      "On-chain credit scores",
      "Global ambassador growth",
    ],
  },
  {
    id: "3",
    title: "Foundation",
    points: [
      "Web3 partnerships",
      "Meowlet Utility NFTs",
      "Wallet integration",
      "Community Treasury activation",
    ],
  },
  {
    id: "4",
    title: "Evolution",
    points: [
      "Social P2P Wallet",
      "Aggregator Perp trading",
      "Fees refuel Treasury",
      "Global Web3 hub",
    ],
  },
];

export default function Roadmap() {
  return (
    <div className="relative w-full min-h-screen py-20 text-white overflow-hidden md:pt-120 pt-40 md:-mt-[10vw]">
        <img src="/images/road-bg.png" alt="Road Background" className="hidden absolute top-0 left-0 md:block"/>
        <img src="/images/flywheel-bg-mobile.png" alt="Road Background" className="absolute left-0 top-0 md:hidden"/>
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-[99] text-center text-7xl md:text-8xl font-bold mb-16 surab"
        style={{textShadow: "0px 1px 42px #BC40FF"}}
      >
        Roadmap
      </motion.h1>

      {/* Timeline line */}
      <div className="absolute top-[15%] md:top-[68%] left-6 md:left-0 w-2 h-full md:w-full md:h-6 bg-[#C83EFB]" />

      {/* Roadmap items */}
      <div className="relative max-md:flex max-md:gap-12 max-md:flex-col h-auto md:h-[740px] mt-12">

        <div className="relative md:absolute md:bottom-0 md:left-[10%] road-box">
          <div className="absolute -top-6 left-10 bg-[#FFF39A] border-4 border-[#460FA4] rounded-full w-20 h-20 flex items-center justify-center text-white surab text-5xl"
          style={{WebkitTextStroke:"2px #460FA4"}}
          >
            <span>1</span>
          </div>
          <h3 className="surab text-3xl text-[#50287B] font-semibold mb-3 mt-2"
          style={{textShadow: "0px 1px 42px #BC40FF"}}
          >Genesis</h3>
          <ul className="text-[#2F1574] playtime text-lg leading-[110%] list-disc list-inside">
            <li>Launch Meowlet Telegram Mini App</li>
            <li>Tap mini-games + basic tasks</li>
            <li>Viral referrals</li>
            <li>Official MKC channels live</li>
          </ul>
        </div>
        <div className="md:absolute md:top-0 md:left-[28%] relative road-box">
          <div className="absolute -top-6 left-10 bg-[#FFF39A] border-4 border-[#460FA4] rounded-full w-20 h-20 flex items-center justify-center text-white surab text-5xl"
          style={{WebkitTextStroke:"2px #460FA4"}}
          >
            <span>2</span>
          </div>
          <h3 className="surab text-3xl text-[#50287B] font-semibold mb-3 mt-2"
          style={{textShadow: "0px 1px 42px #BC40FF"}}
          >Expansion</h3>
          <ul className="text-[#2F1574] playtime text-lg leading-[110%] list-disc list-inside">
            <li>Deploy Treasury strategies</li>
            <li>Boost contributor rewards</li>
            <li>On-chain credit scores</li>
            <li>Global ambassador growth</li>
          </ul>
        </div>
        <div className="relative md:absolute md:bottom-0 md:left-[45%] road-box">
          <div className="absolute -top-6 left-10 bg-[#FFF39A] border-4 border-[#460FA4] rounded-full w-20 h-20 flex items-center justify-center text-white surab text-5xl"
          style={{WebkitTextStroke:"2px #460FA4"}}
          >
            <span>3</span>
          </div>
          <h3 className="surab text-3xl text-[#50287B] font-semibold mb-3 mt-2"
          style={{textShadow: "0px 1px 42px #BC40FF"}}
          >Foundation</h3>
          <ul className="text-[#2F1574] playtime text-lg leading-[110%] list-disc list-inside">
            <li>Web3 partnerships</li>
            <li>Meowlet Utility NFTs</li>
            <li>Wallet integration</li>
            <li>Community Treasury activation</li>
          </ul>
        </div>
        <div className="relative md:absolute md:-top-10 md:left-[65%] road-box">
          <div className="absolute -top-6 left-10 bg-[#FFF39A] border-4 border-[#460FA4] rounded-full w-20 h-20 flex items-center justify-center text-white surab text-5xl"
          style={{WebkitTextStroke:"2px #460FA4"}}
          >
            <span>4</span>
          </div>
          <h3 className="surab text-3xl text-[#50287B] font-semibold mb-3 mt-2"
          style={{textShadow: "0px 1px 42px #BC40FF"}}
          >Evolution</h3>
          <ul className="text-[#2F1574] playtime text-lg leading-[110%] list-disc list-inside">
            <li>Social P2P Wallet (@username transfers)</li>
            <li>Aggregator Perp trading</li>
            <li>Fees refuel Treasury</li>
            <li>MKC becomes global Web3 hub</li>
          </ul>
        </div>
      </div>

      {/* Optional floating mascot (center) */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute left-0 max-md:w-22 md:left-[35%] top-[45%] md:top-[65%] md:-translate-x-1/2 md:-translate-y-1/2"
      >
        <img src="/images/kittie-2.png" alt="Kittie" className="w-60" />
      </motion.div>
    </div>
  );
}