"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUpRight, HiXMark } from "react-icons/hi2";
import Reveal from "../ui/Reveal";
import ProjectArt from "../visuals/ProjectArt";
import { Asterisk } from "../visuals/Decor";

const projects = [
  {
    title: "DocChase",
    tagline: "LLM document automation",
    badge: "AI",
    featured: true,
    status: "Live in production",
    description:
      "An AI-powered document-chasing platform for accounting & bookkeeping firms — shipped and live for a real client. An LLM classification pipeline (Claude) auto-identifies and routes client documents (W-2, 1099, K-1, bank statements…), with 80%+ of uploads handled with no human touch. An escalating, rate-limited reminder engine (n8n) with quiet hours and a full audit trail automates client follow-ups, all running through the firm's own Gmail & Drive. A magic-link upload flow and live missing-documents dashboard let staff track status and review exceptions.",
    tags: ["Next.js", "n8n", "Claude", "Gmail API", "Drive API"],
    kind: "doc",
    from: "#C9B6E8",
    to: "#463275",
    live: "https://doc-chase-phi.vercel.app",
  },
  {
    title: "RAG Knowledge-Base Chatbot",
    tagline: "Retrieval-augmented assistant",
    badge: "AI",
    description:
      "A Retrieval-Augmented Generation chatbot that grounds LLM answers in a knowledge base. LangGraph orchestrates the conversation/agent flow in Python, while Supabase (pgvector) powers vector-based document retrieval — so responses stay accurate and context-aware instead of relying on the model alone.",
    tags: ["Python", "LangGraph", "Supabase", "pgvector", "LLM APIs"],
    kind: "chat",
    from: "#B49FE0",
    to: "#5B4396",
    live: null,
  },
  {
    title: "Momentum Games",
    tagline: "AI game platform",
    badge: "AI",
    status: "Live",
    description:
      "A full-stack game application built with React & Firebase, featuring multi-stage game flows with AI-generated responses via the Gemini API. Manages multiple game products, each with distinct gameplay logic and user flows.",
    tags: ["React", "Firebase", "Gemini AI"],
    kind: "game",
    from: "#D3C2EE",
    to: "#6B53A8",
    live: "https://shop.crime-cases.de",
  },
  {
    title: "Proctorial Prism",
    tagline: "AI proctoring portal",
    badge: "AI",
    status: "Final-year project",
    description:
      "An AI-enabled online test portal that safeguards assessment integrity with camera, microphone and window-monitoring to detect and prevent malpractice — built on the MERN stack with intelligent flagging for secure remote screening.",
    tags: ["MERN", "AI", "Monitoring"],
    kind: "ai",
    from: "#A98ED9",
    to: "#463275",
    live: null,
  },
  {
    title: "Thadda",
    tagline: "E-commerce platform",
    badge: "Web",
    status: "Live",
    description:
      "Enhanced the frontend architecture of an e-commerce platform — integrating Google Authentication and the Moyasar payment gateway, with a fully responsive UI styled in Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Redux", "Payments"],
    kind: "web",
    from: "#C9B6E8",
    to: "#5B4396",
    live: "https://thadda.com",
  },
  {
    title: "Acenrix",
    tagline: "Marketing website",
    badge: "Web",
    status: "Live",
    description:
      "A fully responsive marketing website built with Next.js and modern UI motion — smooth transitions and interactions powered by Framer Motion.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    kind: "web",
    from: "#D3C2EE",
    to: "#6B53A8",
    live: "https://ascenrix.vercel.app",
  },
  {
    title: "Budggy",
    tagline: "Analytics dashboard",
    badge: "Web",
    status: "Live",
    description:
      "An admin dashboard that visualizes business analytics and surfaces data-driven insights through clean, readable charts and views.",
    tags: ["React", "Dashboard", "Analytics"],
    kind: "data",
    from: "#B49FE0",
    to: "#463275",
    live: "https://budggy.com",
  },
  {
    title: "Shahid Green Hill Meat",
    tagline: "Business website",
    badge: "Web",
    status: "Live",
    description:
      "A responsive, mobile-first business website built and deployed with cross-browser compatibility — clean, fast and dependable.",
    tags: ["React", "JavaScript", "Responsive"],
    kind: "web",
    from: "#C9B6E8",
    to: "#6B53A8",
    live: "https://shahidgreenhill.com",
  },
];

const filters = ["All", "AI", "Web"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const visible = filter === "All" ? projects : projects.filter((p) => p.badge === filter);

  return (
    <section id="projects" className="relative overflow-hidden py-20 md:py-28">
      <div className="section-pad">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <span className="label">
              <Asterisk size={13} color="#6B53A8" /> (04) Selected work
            </span>
            <h2 className="display mt-4 text-5xl md:text-7xl">
              Built &amp; <span className="text-spectrum">shipped.</span>
            </h2>
          </Reveal>

          {/* filters */}
          <div className="inline-flex rounded-full border-2 border-ink bg-paper-warm p-1">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative rounded-full px-5 py-2 font-mono text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${
                  filter === f ? "text-paper" : "text-ink-soft hover:text-ink"
                }`}
              >
                {filter === f && (
                  <motion.span
                    layoutId="projectFilter"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f}</span>
              </button>
            ))}
          </div>
        </div>

        {/* grid */}
        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.button
                layout
                key={p.title}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelected(p)}
                className={`card card-hover group overflow-hidden text-left ${
                  p.featured ? "sm:col-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden border-b-2 border-ink ${p.featured ? "h-56 md:h-64" : "h-44"}`}>
                  <ProjectArt
                    kind={p.kind}
                    from={p.from}
                    to={p.to}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full border-2 border-ink bg-paper-warm px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-ink">
                    {p.badge}
                  </span>
                  {p.status && (
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-ink px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-paper">
                      <span className="h-1.5 w-1.5 rounded-full bg-lavender-light" /> {p.status}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-lavender-deep">
                    {p.tagline}
                  </p>
                  <h3 className="mt-1.5 flex items-center justify-between gap-2 font-display text-2xl uppercase tracking-tight text-ink">
                    {p.title}
                    <HiArrowUpRight className="shrink-0 text-lg text-ink/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lavender-deep" />
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.slice(0, p.featured ? 5 : 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-ink/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.06em] text-ink-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto border-2 border-ink bg-paper-warm shadow-hard-lg"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-paper-warm text-ink transition-colors hover:bg-lavender-deep hover:text-paper"
              >
                <HiXMark size={20} />
              </button>
              <ProjectArt kind={selected.kind} from={selected.from} to={selected.to} className="h-52 w-full border-b-2 border-ink" />
              <div className="p-7 md:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="tag">{selected.badge}</span>
                  {selected.status && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-ink px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-paper">
                      <span className="h-1.5 w-1.5 rounded-full bg-lavender-light" /> {selected.status}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-3xl uppercase tracking-tight text-ink md:text-4xl">
                  {selected.title}
                </h3>
                <p className="font-mono text-xs font-bold uppercase tracking-wide text-lavender-deep">
                  {selected.tagline}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{selected.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {selected.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  {selected.live ? (
                    <a href={selected.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      Visit live <HiArrowUpRight />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink/30 px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ink-mute">
                      Private project
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
