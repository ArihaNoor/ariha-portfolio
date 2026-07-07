"use client";
import Reveal, { Stagger, StaggerItem } from "../ui/Reveal";
import { Asterisk } from "../visuals/Decor";

const categories = [
  {
    no: "01",
    label: "Full-Stack Development",
    accent: "bg-lavender-soft",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "JavaScript", "Python", "Tailwind CSS"],
  },
  {
    no: "02",
    label: "Backend, APIs & Data",
    accent: "bg-lavender",
    skills: ["Node.js", "REST APIs", "PostgreSQL", "Supabase", "Auth", "Payments", "pgvector"],
  },
  {
    no: "03",
    label: "AI Integrations",
    accent: "bg-lavender-deep",
    skills: ["LangChain", "LangGraph", "RAG", "Claude", "Gemini", "Prompt Engineering", "Embeddings"],
  },
  {
    no: "04",
    label: "Tools & Practices",
    accent: "bg-lavender-dark",
    skills: ["Git", "Linux", "n8n", "Agile / Scrum", "Code Review", "Sprint Planning"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden py-20 md:py-28">
      <div className="section-pad">
        <Reveal className="max-w-3xl">
          <span className="label">
            <Asterisk size={13} color="#6B53A8" /> (03) My toolkit
          </span>
          <h2 className="display mt-4 text-5xl md:text-7xl">
            The stack I reach
            <br />
            for to make{" "}
            <span className="text-spectrum">ideas real.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {categories.map((cat, ci) => (
            <Reveal key={cat.label} delay={ci * 0.08} dir="up">
              <div className="card card-hover h-full p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl text-ink/30">{cat.no}</span>
                  <span className={`h-3.5 w-3.5 rounded-full ${cat.accent} ring-2 ring-ink`} />
                </div>
                <h3 className="mt-3 font-display text-2xl uppercase tracking-tight text-ink md:text-3xl">
                  {cat.label}
                </h3>
                <Stagger className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <StaggerItem key={s}>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/60 bg-paper px-3 py-1.5 font-mono text-xs font-medium text-ink-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:text-paper">
                        {s}
                      </span>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
