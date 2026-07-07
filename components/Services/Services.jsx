"use client";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { Asterisk, Marquee } from "../visuals/Decor";

const services = [
  {
    no: "01",
    title: "Full-Stack Product",
    desc: "Fast, polished Next.js front ends and Node APIs — auth, dashboards, payments and clean data flows. From Figma to production, end to end.",
    tags: ["Next.js", "React", "Node.js", "TypeScript", "Postgres"],
  },
  {
    no: "02",
    title: "Front-End & Web",
    desc: "Responsive, accessible interfaces with modern motion — pixel-tight layouts in React & Tailwind that stay fast and feel sharp on every screen.",
    tags: ["React", "Tailwind", "Framer Motion", "Responsive", "UX"],
  },
  {
    no: "03",
    title: "APIs, Data & Automation",
    desc: "Solid REST APIs, Postgres & Supabase data layers, and n8n workflow automations — the plumbing that keeps a product reliable behind the scenes.",
    tags: ["REST", "Supabase", "pgvector", "n8n", "Webhooks"],
  },
  {
    no: "04",
    title: "AI Integrations",
    desc: "A touch of intelligence where it earns its place — RAG and knowledge systems, chat assistants and document classification on Claude & Gemini, wired cleanly into your product.",
    tags: ["RAG", "LangGraph", "LangChain", "Prompt Eng", "Claude"],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden bg-ink py-20 text-paper md:py-28">
      <div className="section-pad">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="label !text-paper/55">
              <Asterisk size={13} color="#D3C2EE" /> (02) What I do
            </span>
            <h2 className="display mt-4 text-5xl text-paper md:text-7xl">
              What I
              <br />
              can do
              <br />
              <span className="text-lavender-soft">for you</span>
              <span className="ml-1 inline-block animate-spin-slow align-top">
                <Asterisk size={28} color="#D3C2EE" />
              </span>
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-paper/65">
              Full-stack, end to end. I build the whole product — front end, back end and data — and
              weave in AI integrations where they make it genuinely better. One builder, the whole span.
            </p>
          </div>

          {/* Right: list */}
          <div>
            {services.map((s, idx) => (
              <motion.div
                key={s.no}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group border-t-2 border-paper/20 py-7 transition-colors first:border-t-0 hover:border-lavender"
              >
                <div className="flex items-start gap-5">
                  <span className="font-display text-2xl text-paper/40 transition-colors group-hover:text-lavender-soft md:text-3xl">
                    {s.no}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-2xl uppercase tracking-tight text-paper md:text-3xl">
                        {s.title}
                      </h3>
                      <HiArrowUpRight className="shrink-0 text-xl text-paper/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lavender-soft" />
                    </div>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-paper/65 md:text-[15px]">
                      {s.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-paper/25 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-paper/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Marquee
          items={["Let's build something", "Full-Stack × AI", "From idea to production", "Let's talk"]}
          variant="spectrum"
          speed="marquee-fast"
        />
      </div>
    </section>
  );
};

export default Services;
