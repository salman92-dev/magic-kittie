"use client";

import { motion } from "framer-motion";

const Item = ({ title, text, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className={`text-center max-sm:px-8 ${className}`}
  >
    <h3
      className="surab text-4xl sm:text-4xl md:text-4xl mb-3"
      style={{ textShadow: "0px 1px 42px #BC40FF" }}
    >
      {title}
    </h3>
    <p className="text-[#2F1574] playtime text-2xl sm:text-base md:text-lg leading-tight px-4">
      {text}
    </p>
  </motion.div>
);

const Flywheel = () => {
  return (
    <section className="relative flywheel py-16 px-4 sm:px-6 md:px-10">
      <img src="/images/flywheel-bg.png" alt="Flywheel Background" className="absolute left-0 -top-74 z-0 hidden md:block" />
      <img src="/images/flywheel-bg-mobile.png" alt="Flywheel Background" className="absolute left-0 -top-14 md:hidden" />
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative z-[99] surab text-7xl sm:text-5xl md:text-7xl text-center"
        style={{ textShadow: "0px 1px 42px #BC40FF" }}
      >
        The Flywheel
      </motion.h1>

      <p className="relative z-[99] text-center text-5xl sm:text-2xl md:text-5xl text-[#2F1574] surab my-4"
      style={{textShadow:"0px 1px 42px #BC40FF"}}>
        A Cycle of Shared Growth.
      </p>

      <p className="relative z-[99] playtime text-center text-3xl sm:text-3xl mt-3 max-w-4xl mx-auto text-[#2F1574]">
        MKC is designed as a self-reinforcing flywheel where users, the community,
        and projects grow in unison.
      </p>

      {/* Layout */}
      <div className="relative mt-16 max-w-5xl mx-auto">

        {/* Image */}
        <motion.img
          src="/images/flywheel.png"
          alt="flywheel"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full mx-auto drop-shadow-2xl"
        />

        {/* Desktop Positioned Items */}
        <div className="hidden md:block">

          <Item
            title="User Activation"
            text="Playing and completing tasks on Meowlet expands the community."
            className="absolute top-[20%] -left-10 w-[22%] max-sm:px-8"
          />

          <Item
            title="Redistribution"
            text="The wealth flows back. Active users and NFT holders receive rewards."
            className="absolute top-[20%] -right-10 w-[22%]"
          />

          <Item
            title="Strategic Partnerships"
            text='A vibrant community attracts projects, bringing "Airdrops" and rewards.'
            className="absolute bottom-[10%] left-0 w-[22%]"
          />

          <Item
            title="Treasury Growth"
            text="Revenue is accumulated in the treasury, increasing overall value."
            className="absolute bottom-[10%] right-0 w-[22%]"
          />
        </div>

        {/* Mobile Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 md:hidden">
          <Item
            title="User Activation"
            text="Playing and completing tasks expands the community."
          />
          <Item
            title="Redistribution"
            text="Rewards flow back to active users and NFT holders."
          />
          <Item
            title="Strategic Partnerships"
            text="Community attracts projects and airdrops."
          />
          <Item
            title="Treasury Growth"
            text="Treasury grows and increases value."
          />
        </div>
      </div>
    </section>
  );
};

export default Flywheel;