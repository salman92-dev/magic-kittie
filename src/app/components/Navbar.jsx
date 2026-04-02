"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
const LANGS = ["EN", "FR", "DE", "JP", "ES"];

const MENU_ITEMS = [
  { label: "Home" },
  { label: "Magic Shop" },
  { label: "My Kitties" },
  { label: "Adventures" },
  { label: "About" },
];

/* ⭐ Stars */
function Stars() {
  const stars = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: `${2 + Math.random() * 3}px`,
    dur: `${1.5 + Math.random() * 2.5}s`,
    delay: `${Math.random() * 3}s`,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white animate-[twinkle_2s_ease-in-out_infinite]"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDuration: s.dur,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}

/* 🌍 Language Toggle */
function LangToggle() {
  const [langIdx, setLangIdx] = useState(0);

  return (
    <button
      onClick={() => setLangIdx((i) => (i + 1) % LANGS.length)}
      className="flex items-center gap-2 bg-[linear-gradient(270deg,#CA9EF1_0%,#FBA5DD_100%)] border-2 border-white/50 rounded-2xl px-3 py-2 backdrop-blur-md hover:scale-105 transition
                 text-xs sm:text-sm"
    >
      <div className="w-9 h-9 rounded-lg bg-white shadow" />
      <span className="block text-white font-semibold text-xl tracking-widest playtime">
        {LANGS[langIdx]}
      </span>
    </button>
  );
}

/* 🪄 Logo */
function Logo() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 text-center z-10">
      <div className="relative">
        {/* Sparkles */}
        <span className="absolute -top-2 left-1 text-white text-xs animate-pulse">✦</span>
        <span className="absolute -top-1 right-1 text-white text-xs animate-pulse delay-300">✦</span>
        <span className="absolute -bottom-1 left-1/2 text-white text-xs animate-pulse delay-700">✦</span>

        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Magic Kitties Club Logo"
          width={657}
          height={437}
          className="hidden md:block w-[120px] sm:w-[160px] md:w-[200px]"
        />
      </div>
    </div>
  );
}

/* 🍔 Menu Button */
function MenuButton({ open, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
    >
      <span className="surab text-white text-xl tracking-widest">
        MENU
      </span>

      <div className="md:w-14 md:h-14 w-14 h-14 rounded-full bg-white/30 border-[1.5px] border-white flex flex-col items-center justify-center gap-[6px] backdrop-blur-md">
        <div
          className={`md:w-6 w-6 h-[2px] bg-white transition ${
            open ? "translate-y-[8px] rotate-45" : ""
          }`}
        />
        <div
          className={`md:w-6 w-6 h-[2px] bg-white transition ${
            open ? "opacity-0 scale-x-0" : ""
          }`}
        />
        <div
          className={`md:w-6 w-6 h-[2px] bg-white transition ${
            open ? "-translate-y-[8px] -rotate-45" : ""
          }`}
        />
      </div>
    </button>
  );
}

/* 📂 Dropdown */
function Dropdown({ open }) {
  return (
    <div
      className={`absolute right-0 mt-3 w-44 sm:w-56 rounded-2xl backdrop-blur-xl border border-white/50 shadow-xl
      bg-white/10
      transition-all duration-300 origin-top-right
      ${open ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}
    >
      {MENU_ITEMS.map((item, i) => (
        <div
          key={item.label}
          className="playtime flex items-center gap-3 px-4 py-3 text-white text-lg sm:text-base font-medium
                     border-b border-white/20  last:border-none
                     hover:bg-white/20 transition"
          style={{
            transform: open ? "translateX(0)" : "translateX(20px)",
            opacity: open ? 1 : 0,
            transitionDelay: `${i * 0.05}s`,
          }}
        >
          <span>{item.icon}</span>
          {item.label}
        </div>
      ))}
    </div>
  );
}

/* 🚀 Navbar */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <style>{cssAnimations}</style>

      <nav
        ref={ref}
        className="absolute top-0 w-full flex items-center justify-between 
                   px-4 sm:px-6 md:px-10 py-8 sm:py-14 z-50 animate-[navbarFadeIn_0.8s_ease]"
      >
        <Stars />

        {/* Left */}
        <LangToggle />

        {/* Center */}
        <Logo />

        {/* Right */}
        <div className="relative">
          <MenuButton open={open} onToggle={() => setOpen(!open)} />
          <Dropdown open={open} />
        </div>
      </nav>
    </>
  );
}

/* Animations */
const cssAnimations = `
@keyframes twinkle {
  0%,100%{opacity:0;transform:scale(0.5)}
  50%{opacity:1;transform:scale(1.4)}
}
@keyframes navbarFadeIn {
  from{opacity:0;transform:translateY(-20px)}
  to{opacity:1;transform:translateY(0)}
}
`;