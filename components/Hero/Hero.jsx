"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowDown, HiArrowUpRight } from "react-icons/hi2";
import { FaRegFilePdf } from "react-icons/fa6";
import Avatar from "../visuals/Avatar";
import { Asterisk, SpinAsterisk, Marquee } from "../visuals/Decor";

const rotating = ["that ship.", "that think.", "that scale.", "people love."];

const techMarquee = [
  "Next.js", "React", "TypeScript", "Node.js", "JavaScript", "Tailwind",
  "PostgreSQL", "Supabase", "REST APIs", "Git",
  "LangChain", "LangGraph", "RAG", "Claude", "Gemini", "Python",
];

const stats = [
  ["8+", "Products shipped"],
  ["7+", "Team projects"],
  ["1", "Live SaaS"],
];

const Hero = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % rotating.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-spectrum-radial pt-28 md:pt-32">
      {/* ===== Headline block ===== */}
      <div className="section-pad relative">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.28em] text-ink-mute">
          <span>Ariha Noor</span>
          <SpinAsterisk size={20} color="#0C0C0D" />
          <span>Portfolio — 2026</span>
        </div>

        <div className="mt-8 border-t-2 border-ink pt-9 md:pt-10">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="label"
          >
            <Asterisk size={13} color="#6B53A8" /> Full-Stack Engineer × AI Integrations
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="display mt-5 text-[15.5vw] leading-[0.92] sm:text-[13vw] lg:text-[10.5rem]"
          >
            I build
            <br />
            products{" "}
            <span className="relative inline-block align-baseline">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotating[i]}
                  initial={{ y: 22, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -22, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block text-spectrum"
                >
                  {rotating[i]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>
        </div>
      </div>

      {/* ===== Spectrum intro band ===== */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.12 }}
        className="relative mt-10 border-y-2 border-ink bg-spectrum"
      >
        <div className="section-pad grid items-center gap-8 py-10 md:grid-cols-[0.85fr_1.15fr] md:py-12">
          {/* Avatar */}
          <div className="relative mx-auto w-full max-w-[300px]">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Avatar className="h-auto w-full drop-shadow-[6px_6px_0_rgba(12,12,13,0.9)]" />
            </motion.div>
          </div>

          {/* Intro copy */}
          <div className="text-ink">
            <h2 className="display flex items-center gap-3 text-4xl md:text-5xl">
              Hey there <span className="animate-float text-3xl">👋</span>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] font-medium leading-relaxed text-ink-soft md:text-base">
              I&apos;m <strong className="font-bold text-ink">Ariha Noor</strong> — a full-stack
              engineer who builds and ships products end to end. Based in{" "}
              <span className="line-through decoration-2 opacity-60">the metaverse</span>{" "}
              Faisalabad, building for everywhere.
            </p>
            <p className="mt-3 max-w-xl text-[15px] font-medium leading-relaxed text-ink-soft md:text-base">
              I&apos;ve shipped everything from responsive{" "}
              <strong className="font-bold text-ink">Next.js</strong> front ends and Node APIs to{" "}
              <strong className="font-bold text-ink">DocChase</strong>, a document-automation platform
              live in production for a real accounting firm. I love the full span — clean UIs, solid
              APIs and data, with <strong className="font-bold text-ink">AI integrations</strong> woven
              in where they earn their place.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="#projects" className="btn-primary !bg-ink hover:!bg-paper-warm hover:!text-ink">
                View my work <HiArrowDown />
              </Link>
              <a
                href="/Ariha-Noor-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-paper-warm px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-hard-sm md:text-sm"
              >
                <FaRegFilePdf /> Résumé
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 border-t-2 border-ink/30 pt-6">
              {stats.map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl leading-none text-ink md:text-4xl">{n}</div>
                  <div className="mt-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-soft">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ===== Tech marquee ===== */}
      <Marquee items={techMarquee} variant="ink" speed="marquee" />
    </section>
  );
};

export default Hero;
