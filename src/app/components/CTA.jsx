"use client";
import { useEffect, useRef, useState } from "react";

/*
  Magic Kitties CTA Section
  ─────────────────────────
  Fonts required — add to index.html / layout:
  <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Nunito:wght@400;500;600;700&display=swap" rel="stylesheet">

  Tailwind config — extend with these custom animations (tailwind.config.js):
  theme: {
    extend: {
      animation: {
        'float':        'float 4s ease-in-out infinite',
        'float-slow':   'float 6s ease-in-out infinite',
        'twinkle':      'twinkle 2.5s ease-in-out infinite',
        'pulse-glow':   'pulseGlow 2s ease-in-out infinite',
        'slide-up':     'slideUp 0.8s cubic-bezier(.34,1.56,.64,1) both',
        'fade-in':      'fadeIn 0.7s ease both',
        'spin-slow':    'spin 8s linear infinite',
        'shimmer':      'shimmer 2s linear infinite',
      },
      keyframes: {
        float:      { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-14px)' } },
        twinkle:    { '0%,100%': { opacity: '0.1', transform: 'scale(0.8)' }, '50%': { opacity: '1', transform: 'scale(1.3)' } },
        pulseGlow:  { '0%,100%': { boxShadow: '0 0 20px rgba(200,150,240,0.4)' }, '50%': { boxShadow: '0 0 50px rgba(200,150,240,0.9), 0 0 80px rgba(180,120,220,0.4)' } },
        slideUp:    { from: { opacity: '0', transform: 'translateY(40px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:     { from: { opacity: '0' }, to: { opacity: '1' } },
        shimmer:    { '0%': { backgroundPosition: '-200% center' }, '100%': { backgroundPosition: '200% center' } },
      },
    },
  },
*/

// ── Floating star particles ──────────────────────────────────────────────────
function Stars({ count = 30 }) {
  const stars = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      dur: `${1.5 + Math.random() * 3}s`,
      delay: `${Math.random() * 4}s`,
    }))
  ).current;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            opacity: 0,
            animation: `twinkle ${s.dur} ease-in-out infinite`,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}

// ── Buy Now button ───────────────────────────────────────────────────────────
function BuyButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group cursor-pointer relative -mb-[6vw] inline-flex items-center justify-center overflow-hidden rounded-full text-base font-bold tracking-widest uppercase transition-transform duration-200 active:scale-95 focus:outline-none"
    >
      {/* Shimmer overlay */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full"
      />

      <img src="/images/buy-btn.png" alt="btn" className="w-50 md:w-70"/>

      {/* Sparkles on hover */}
      {hovered && (
        <>
          <span className="absolute -top-2 left-6 animate-bounce text-yellow-300 text-xs">✦</span>
          <span className="absolute -top-2 right-6 animate-bounce text-yellow-300 text-xs" style={{ animationDelay: "0.15s" }}>✦</span>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 animate-bounce text-yellow-300 text-xs" style={{ animationDelay: "0.3s" }}>✦</span>
        </>
      )}
    </button>
  );
}

// ── Main CTA Section ─────────────────────────────────────────────────────────
export default function MagicKittiesCTA() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll-triggered reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{inlineKeyframes}</style>

      {/* Page wrapper */}
      <section
        ref={sectionRef}
        className="relative flex w-full items-center justify-center px-4 py-16 sm:py-24 -mt-40 md:-mt-80"
      >
        <img src="/images/cloud-1.png" alt="Cloud 1" className="absolute z-1 -top-10 left-0 md:left-0 md:top-0 w-30 md:w-40"/>
        <img src="/images/magic-globe.png" alt="Magic Globe" className="absolute z-1 bottom-12 left-20 md:bottom-40 md:left-50 w-20 md:w-50"/>
        <img src="/images/bottle.png" alt="Magic Globe" className="absolute z-1 -bottom-8 right-2 md:bottom-10 md:right-10 w-16 md:w-30"/>
        <Stars count={58} />
       

        {/* Card */}
        <div
          className="relative w-full max-w-xl sm:max-w-4xl"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0) scale(1)" : "translateY(50px) scale(0.95)",
            transition: "opacity 0.8s cubic-bezier(.34,1.56,.64,1), transform 0.8s cubic-bezier(.34,1.56,.64,1)",
          }}
        >

          {/* Inner card */}
          <div
            className="cta-bg relative overflow-visible rounded-[2.4rem] px-10 md:px-6 pb-0 md:pb-10 pt-6 sm:px-10 sm:pb-12 sm:pt-8"
          >

            {/* Kitty — floats above card */}
            <div className="relative flex justify-center" style={{ marginTop: "-48px", marginBottom: "8px" }}>
              <div
                className="relative inline-block"
                style={{ animation: "float 4s ease-in-out infinite" }}
              >
                {/* Glow halo behind kitty */}
                <div
                  className="absolute inset-0 -z-10 mx-auto rounded-full blur-2xl"
                  style={{
                    width: "70%",
                    left: "15%",
                    background: "radial-gradient(circle, rgba(255,230,255,0.9) 0%, transparent 70%)",
                    animation: "pulseGlow 2.4s ease-in-out infinite",
                  }}
                />

                {/* Kitty SVG placeholder — swap with <img src="kitty.png"> */}
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: "clamp(260px, 26vw, 320px)",
                    height: "clamp(260px, 26vw, 320px)",
                  }}
                >
                  <img src="/images/kittie-1.png" alt="kittie" />
                </div>

                {/* Floating mini stars around kitty */}
                {[
                  { top: "5%",  left: "-5%",  delay: "0s",    size: 14 },
                  { top: "10%", right: "-8%", delay: "0.8s",  size: 12 },
                  { top: "55%", left: "-10%", delay: "1.4s",  size: 10 },
                  { top: "60%", right: "-6%", delay: "0.4s",  size: 11 },
                ].map((s, i) => (
                  <span
                    key={i}
                    className="pointer-events-none absolute text-yellow-300"
                    style={{
                      ...s,
                      fontSize: s.size,
                      opacity: 0,
                      animation: `twinkle 2.5s ease-in-out infinite`,
                      animationDelay: s.delay,
                    }}
                  >
                    ✦
                  </span>
                ))}
              </div>
            </div>

            {/* Text content */}
            <div
              className="relative z-10 pb-10 playtime text-lg md:text-2xl text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s 0.3s ease, transform 0.7s 0.3s ease",
              }}
            >
              <p
                className="mx-auto max-w-md leading-[90%]"
                style={{
                  color: "#4a2060",
                  textAlign: "center",
                  marginBottom: "1rem",
                  fontWeight: 500,
                }}
              >
                From <em>{`"Those Who Know"`}</em> to <em>{`"Those Who Do."`}</em> Web3 for Everyone, Everyday.{" "}
                {`MKC (Magic Kitties Club)`} is the community that transforms the{" "}
                <em>{`"complex and shady"`}</em> world of Web3 into a safe, fun, and rewarding playground for everyone.
              </p>

              <p
                className="mx-auto max-w-md leading-[90%]"
                style={{
                  color: "#4a2060",
                  textAlign: "center",
                  fontWeight: 500,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 0.7s 0.5s ease, transform 0.7s 0.5s ease",
                }}
              >
                Driven by our Telegram-native Super App, {`Meowlet`} and a robust Community Treasury,
                we are building a new ecosystem where learning, acting, and contributing are rightfully rewarded.{" "}
                {`Let's build the future together.`}
              </p>
            </div>

            {/* Divider sparkle line */}
  

            {/* CTA Button */}
            <div
              className="flex justify-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
                transition: "opacity 0.6s 0.7s ease, transform 0.6s 0.7s cubic-bezier(.34,1.56,.64,1)",
              }}
            >
              <BuyButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Injected keyframes (no tailwind config needed) ─────────────────────── */
const inlineKeyframes = `
@keyframes float {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-14px); }
}
@keyframes twinkle {
  0%,100% { opacity: 0.1; transform: scale(0.8); }
  50%      { opacity: 1;   transform: scale(1.3); }
}
@keyframes pulseGlow {
  0%,100% { opacity: 0.6; }
  50%      { opacity: 1; }
}
@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}
`;