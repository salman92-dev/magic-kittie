"use client";

import { motion } from "framer-motion";
import Image from "next/image";
export default function Utility() {
  return (
    <section className="relative w-full min-h-screen flex  justify-center px-8 sm:px-6 md:px-10 overflow-hidden max-md:pb-30">
      <Image
        src="/images/magic-cap.png"
        alt="Utility Background"
        className="absolute top-26 md:top-0 -right-2 md:right-40 w-20 md:w-50 z-10"
        width={654}
        height={654}
      />
      <Image
        src="/images/cloud-2.png"
        alt="Utility Background"
        className="absolute md:top-0 -top-40 left-0 md:right-0 w-10 md:w-30 z-10"
        width={654}
        height={654}
      />
      {/* Background Image (Arch Scene) */}
      <div className="absolute inset-0">
        <img
          src="/images/utility-bg.png" // replace with your image
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-center text-5xl sm:text-5xl md:text-7xl surab mb-10 tracking-widest"
          style={{textShadow: "0px 1px 42px #BC40FF"}}
        >
          Meowlet Utility NFT
        </motion.h2>
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            className="flex justify-center"
          >
            <img
              src="/images/book.png" // NFT image
              className="w-[80%] mt-16 drop-shadow-2xl md:hidden"
            />
          </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 max-md:gap-4">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-3"
          >
            <h3 className="surab text-4xl sm:text-4xl tracking-wide" style={{textShadow: "0px 1px 42px #BC40FF"}}>
              Reward Boost
            </h3>
            <p className="text-xl sm:text-2xl leading-[95%] text-[#2F1574] playtime">
              Maximize your yield. Significantly increase your efficiency
              when mining points from games and tasks.
            </p>
          </motion.div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            className="flex justify-center"
          >
            <img
              src="/images/book.png" // NFT image
              className="w-40 sm:w-52 md:w-100 drop-shadow-2xl hidden md:block"
            />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-3"
          >
            <h3 className="surab text-4xl sm:text-4xl tracking-wide" style={{textShadow: "0px 1px 42px #BC40FF"}}>
              Infrastructure Perks
            </h3>
            <p className="text-xl sm:text-2xl leading-[95%] text-[#2F1574] playtime">
              Future-proof your wallet. Holders will receive discounts
              on future P2P trading fees and subsidized gas fees.
            </p>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 text-white max-w-md mx-auto"
        >
          <h3 className="surab text-4xl sm:text-4xl tracking-wide mb-4" style={{textShadow: "0px 1px 42px #BC40FF"}}>
            Priority Access
          </h3>
          <p className="text-xl sm:text-2xl leading-[95%] text-[#2F1574] playtime">
            Get the VIP treatment. Enjoy priority allocation and
            exclusive airdrops for upcoming project launches.
          </p>
        </motion.div>

      </div>
    </section>
  );
}