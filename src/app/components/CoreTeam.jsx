"use client"
import { useEffect, useRef, useState } from "react";

/*
  Magic Kitties — Concept & Mission Section
  ──────────────────────────────────────────
  Fonts (add to index.html):
  <link href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Nunito:wght@400;500;600;700&display=swap" rel="stylesheet">

  Drop-in: replace the emoji inside KittyBadge with your <img> tag.
*/

const CARDS = [
  {
    img : '/images/t-1.png',
    title: ["sean"],
    body: `Founder & Project Lead`,
    delay: 0,
  },
  {
    img : '/images/t-2.png',
    title: ["Liz"],
    body: `Treasury Strategist`,
    delay: 0.15,
  },
  {
    img : '/images/t-3.png',
    title: ["Kazuak"],
    body: `Marketing Goat`,
    delay: 0.3,
  },
  {
    img : '/images/t-4.png',
    title: ["Tarzan"],
    body: `Community Manager`,
    delay: 0.3,
  },
  {
    img : '/images/t-5.png',
    title: ["Nguyen"],
    body: `Lead Web3 Developer`,
    delay: 0.3,
  },
];

/* ── Star particle ── */
function Stars({ n = 35 }) {
  const list = useRef(
    Array.from({ length: n }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: 2 + Math.random() * 3.5,
      dur: `${1.8 + Math.random() * 2.8}s`,
      del: `${Math.random() * 4}s`,
    }))
  ).current;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {list.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`, top: `${s.y}%`,
            width: s.s, height: s.s, opacity: 0,
            animation: `mkTwinkle ${s.dur} ease-in-out infinite`,
            animationDelay: s.del,
          }}
        />
      ))}
    </div>
  );
}

/* ── Ornate badge ring ── */
function KittyBadge({ img}) {

  return (
    <div
      className="relative flex items-center justify-center"
    >
      {/* Outer glow */}
      <img src={img} alt="concept" className="w-full h-full object-contain p-2 drop-shadow-[50px,50px,5px,#C41CFF]" />
    </div>
  );
}

/* ── Single card ── */
function MissionCard({ card, visible }) {
  return (
    <div
      className="flex flex-col items-center text-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(50px) scale(0.92)",
        transition: `opacity 0.75s ${card.delay + 0.1}s ease, transform 0.75s ${card.delay + 0.1}s cubic-bezier(.34,1.56,.64,1)`,
        flex: "1 1 0",
        minWidth: 220,
        maxWidth: 320,
      }}
    >
      <KittyBadge {...card} />

      <h3
        className="surab text-4xl mt-8 mb-3"
        style={{
          color: "#ffffff",
          textShadow: "0 2px 10px rgba(100,20,160,0.5)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          lineHeight: 1.25,
        }}
      >
        {card.title.map((line, i) => (
          <span key={i} style={{ display: "block" }}>{line}</span>
        ))}
      </h3>

      <p
      className="playtime text-xl md:text-2xl leading-[90%]"
        style={{
          color: "#2F1574",
          fontWeight: 500,
          maxWidth: 280,
        }}
      >
        {card.body}
      </p>
    </div>
  );
}

/* ── Main section ── */
export default function CoreTeam() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <section ref={ref} className="relative core px-6 md:px-16 py-12 pb-40 md:pb-60">
      <div
        
        className="core-team relative overflow-hidden px-6 py-10 sm:py-8"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Ambient orbs */}
        <div className="pointer-events-none absolute left-[5%] top-[8%] h-56 w-56 rounded-full opacity-25 blur-3xl"
          style={{ background: "#f3e8ff", animation: "mkFloat 8s ease-in-out infinite" }} />
        <div className="pointer-events-none absolute bottom-[5%] right-[5%] h-72 w-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "#e9d5ff", animation: "mkFloat 10s ease-in-out infinite", animationDelay: "3s" }} />

        <Stars n={40} />

        {/* Section title */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(-30px)",
            transition: "opacity .7s ease, transform .7s ease",
            textAlign: "center",
            marginBottom: "2vw",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h2
            style={{
              color: "#ffffff",
              textShadow:
                "0px 1px 42px #BC40FF",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              lineHeight: 1.1,

            }}
            className="surab text-5xl xl:text-8xl"
          >
            Core Team
          </h2>
        </div>

        {/* Cards row */}
        <div
          className="relative z-10 flex w-full flex-wrap items-start justify-center max-sm:gap-4"
          style={{ maxWidth: 1100 }}
        >
          {CARDS.map((card) => (
            <MissionCard key={card.title[0]} card={card} visible={visible} />
          ))}
        </div>
      </div>
      </section>
    </>
  );
}

/* ── Keyframes ── */
const keyframes = `
@keyframes mkFloat    { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-14px)} }
@keyframes mkTwinkle  { 0%,100%{opacity:.05;transform:scale(.7)} 50%{opacity:1;transform:scale(1.4)} }
@keyframes mkPulse    { 0%,100%{opacity:.55} 50%{opacity:1} }
@keyframes mkSpin     { to{transform:rotate(360deg)} }
@keyframes mkSpinRev  { to{transform:rotate(-360deg)} }
`;