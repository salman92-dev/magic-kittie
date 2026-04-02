"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative hero w-full overflow-hidden flex">
        <motion.img
        src="/images/flying-kittie.png"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-10 md:right-80 top-80 md:top-0 w-50"
        />

      {/* Content */}
      <div className="relative z-10  px-6 mt-36 md:mt-80 ml-0 md:ml-30">
        <img src="/images/logo.png" alt="logo" className="md:hidden mb-40 w-[80%] mx-auto" />
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{textShadow:"0px 1px 35px #BC40FF"}}
          className="playtime text-white text-lg md:text-xl tracking-widest uppercase mb-4 max-w-2xl"
        >
          From those who know to those who do · Web3 for everyone, everyday
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{textShadow: "0px 1px 42px #BC40FF"}}
          className="surab text-white text-5xl md:text-7xl mb-4"
        >
          Magic Kitties Club
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{textShadow: "0px 1px 35px #BC40FF"}}
          className="playtime text-white text-2xl md:text-3xl leading-[110%] max-w-2xl"
        >
          Is the community that transforms the {`"complex and shady"`}
          world of Web3 into a safe, fun, and rewarding playground for everyone.
        </motion.p>
      </div>

      {/* Sparkle */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-14 w-3 h-3 bg-white rounded-full shadow-lg"
      />
    </section>
  );
}