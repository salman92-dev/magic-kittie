"use client";

import { useEffect, useRef, useState } from "react";

/*
  Magic Kitties — Core Product Section
  ──────────────────────────────────────
  Fonts (add to index.html):
  <link href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Nunito:wght@400;500;600;700&display=swap" rel="stylesheet">

  Replace emoji placeholders with your actual <img> tags.
*/

const STEPS = [
  {
    img : '/images/s-1.png',
    title: "The Entry Point",
    subtitle: "(Tap & Task)",
    body: "A place to play and learn. Earn points (future value) for free through engaging tap games and simple social tasks.",
    step: "Step 01",
    delay: 0.05,
    floatDelay: "0s",
  },
  {
    img : '/images/s-2.png',
    title: "Meet The Best",
    subtitle: "(Launchpad)",
    body: `Your hub for discovering top-tier Web3 projects. Complete tasks within Meowlet to earn tokens (Airdrops) risk-free.`,
    step: "Step 02",
    delay: 0.2,
    floatDelay: "0.7s",
    featured: true,
  },
  {
    img : '/images/s-3.png',
    title: "P2P & Perps",
    subtitle: "",
    body: "Fee-free P2P transfers via Telegram usernames and Aggregator Perps with external liquidity. Crypto starts and ends here.",
    step: "Step 03",
    delay: 0.35,
    floatDelay: "1.4s",
  },
];

/* ── Floating stars ── */
function Stars({ n = 38 }) {
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
            animation: `cpTwinkle ${s.dur} ease-in-out infinite`,
            animationDelay: s.del,
          }}
        />
      ))}
    </div>
  );
}

/* ── Step button pill ── */
function StepPill({ label }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "#2F1574",
        background: hov
          ? "linear-gradient(135deg,#fde68a,#fbbf24,#f59e0b)"
          : "#FFF39A",
        border: "2.5px solid #460FA4",
        borderRadius: 99,
        padding: "10px 32px",
        cursor: "pointer",
        boxShadow: hov
          ? "0 0 24px rgba(251,191,36,0.9), 0 4px 14px rgba(180,100,0,0.3)"
          : "0 0 12px rgba(251,191,36,0.5), 0 2px 8px rgba(180,100,0,0.2)",
        transform: hov ? "translateY(-3px) scale(1.06)" : "translateY(0) scale(1)",
        transition: "all 0.3s cubic-bezier(.34,1.56,.64,1)",
        position: "relative",
        overflow: "hidden",
      }}
      className="playtime text-2xl"
    >
      {/* shimmer */}
      <span
        style={{
          position: "absolute", inset: 0, borderRadius: 99, pointerEvents: "none",
          background: "linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.55) 50%,transparent 60%)",
          backgroundSize: "200% 100%",
          animation: "cpShimmer 2.2s linear infinite",
        }}
      />
      {label}
    </button>
  );
}

/* ── Product Card ── */
function ProductCard({ step, visible }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      
      style={{
        flex: "1 1 0",
        minWidth: 210,
        maxWidth: 340,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0) scale(1)"
          : "translateY(56px) scale(0.92)",
        transition: `opacity 0.75s ${step.delay}s ease, transform 0.75s ${step.delay}s cubic-bezier(.34,1.56,.64,1)`,
        className:"core-box"
      }}
    >
      {/* Kitty illustration bubble */}
      <div
        style={{
          position: "relative",
          width: "clamp(300px, 22vw, 200px)",
          height: "clamp(300px, 22vw, 200px)",
          marginBottom: -32,
          zIndex: 2,
          animation: `cpFloat 4s ease-in-out infinite`,
          animationDelay: step.floatDelay,
        }}
      >
        {/* Glow halo */}
        <div style={{
          position: "absolute", inset: "-12%",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(216,180,254,0.7) 0%,transparent 70%)",
          filter: "blur(14px)",
          animation: "cpPulse 2.8s ease-in-out infinite",
          animationDelay: step.floatDelay,
        }} />

        {/* Glassy ellipse pod behind kitty */}
        <div style={{
          position: "absolute",
          bottom: "-8%", left: "10%", right: "10%",
          height: "55%",
        }} />

        {/* Emoji / image */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
            <img src={step.img} alt={step.title} style={{ width: "100%", height: "100%" }} />
        </div>

        {/* Sparkle dots */}
        {[
          { top: "8%",  left: "5%",  delay: "0s" },
          { top: "6%",  right: "8%", delay: "0.6s" },
          { bottom:"12%",left:"2%",  delay: "1.1s" },
        ].map((sp, i) => (
          <span key={i} style={{
            position: "absolute", color: "#fde68a", fontSize: 11,
            opacity: 0, animation: "cpTwinkle 2.2s ease-in-out infinite",
            animationDelay: sp.delay, ...sp,
          }}>✦</span>
        ))}
      </div>

      {/* Card body */}
      <div
        style={{
          width: "100%",
          display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
          transition: "box-shadow 0.3s, background 0.3s",
          transform: hov ? "translateY(-4px)" : "translateY(0)",
        }}
        className="step-box"
      >
        {/* Title */}
        <h3 style={{
          color: "#50287B",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          textShadow: "0 2px 8px rgba(100,20,160,0.2)",
        }}
        className="surab text-center leading-[90%] text-3xl md:text-3xl mb-4">
          {step.title}
          {step.subtitle && (
            <><br /><span style={{ fontSize: "0.88em" }}>{step.subtitle}</span></>
          )}
        </h3>

        {/* Body text */}
        <p style={{
          color: "#2F1574",
          fontWeight: 500,
          marginBottom: 20,
        }}
        className="playtime text-xl leading-[90%]">
          {step.body}
        </p>

        {/* Step pill */}
        <StepPill label={step.step} />
      </div>
    </div>
  );
}

/* ── Main Section ── */
export default function CoreProduct() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{keyframes}</style>

      <section
        ref={ref}
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(48px,8vw,96px) clamp(16px,4vw,48px) clamp(56px,9vw,100px)",
          className:"relative"
        }}
      >
        <img src="/images/core-product-bg.png" alt="Core Product Background" className="hidden md:block absolute -top-14 md:-top-64"/>
        <img src="/images/core-product-bg-mobile.png" alt="Core Product Background" className="md:hidden absolute -top-30"/>
        <img src="/images/books.png" alt="books" className="absolute w-24 top-36 right-2 md:w-54 md:right-18 md:top-60"/>.
        {/* Ambient orbs */}
        <div style={{
          position:"absolute",width:240,height:240,borderRadius:"50%",
          left:"4%",top:"8%",background:"#f3e8ff",opacity:.2,filter:"blur(60px)",
          animation:"cpFloat 8s ease-in-out infinite",pointerEvents:"none",
        }}/>
        <div style={{
          position:"absolute",width:300,height:300,borderRadius:"50%",
          right:"3%",bottom:"6%",background:"#e9d5ff",opacity:.18,filter:"blur(70px)",
          animation:"cpFloat 11s ease-in-out infinite",animationDelay:"3s",pointerEvents:"none",
        }}/>

        <Stars n={40} />

        {/* Heading */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-28px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
          textAlign: "center",
          marginBottom: "clamp(48px,8vw,80px)",
          position: "relative",
          zIndex: 1,
        }}>
          <h2 style={{
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "0.07em",
            textShadow: "0 0 30px rgba(255,255,255,0.45), 0 4px 16px rgba(80,0,160,0.45)",
            lineHeight: 1.1,
            textShadow: "0px 1px 42px #BC40FF",
          }}
          className="surab text-7xl md:text-8xl max-md:mt-[20vw]">
            Core Product
          </h2>
          <img src="/images/logo-2.png" alt="logo" className="w-full md:w-[60%] mx-auto mb-4"/>
        </div>

        {/* Cards */}
        <div style={{
          display:"flex",flexWrap:"wrap",justifyContent:"center",
          gap:"clamp(20px,3.5vw,44px)",width:"100%",maxWidth:1000,
          position:"relative",zIndex:1,alignItems:"flex-end",
          
        }}>
          {STEPS.map((step) => (
            <ProductCard key={step.step} step={step} visible={visible} />
          ))}
        </div>
      </section>
    </>
  );
}

/* ── Keyframes ── */
const keyframes = `
@keyframes cpFloat    { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-16px)} }
@keyframes cpTwinkle  { 0%,100%{opacity:.05;transform:scale(.7)} 50%{opacity:1;transform:scale(1.4)} }
@keyframes cpPulse    { 0%,100%{opacity:.5} 50%{opacity:1} }
@keyframes cpSpin     { to{transform:rotate(360deg)} }
@keyframes cpSpinRev  { to{transform:rotate(-360deg)} }
@keyframes cpShimmer  { 0%{background-position:-200% center} 100%{background-position:200% center} }
`;