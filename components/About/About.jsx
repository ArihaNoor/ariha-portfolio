"use client";
import Reveal, { Stagger, StaggerItem } from "../ui/Reveal";
import { Asterisk, DotGrid, Squiggle } from "../visuals/Decor";

const timeline = [
  {
    date: "Sep 2025 — Present",
    role: "M.S. Software Engineering",
    org: "National Textile University",
    text: "Pursuing a master's while shipping full-stack products in production.",
    tag: "Education",
  },
  {
    date: "Jun 2024 — Present",
    role: "Software Engineer",
    org: "Invitrex",
    text: "Built & shipped DocChase, an AI document-automation platform live for a real client. Delivered across 7+ projects in an Agile team — sprint planning, standups, iterative releases.",
    tag: "Current",
  },
  {
    date: "Aug 2023 — Oct 2023",
    role: "Junior Web App Developer",
    org: "V3 Solutions",
    text: "Shipped 2 real-world projects including an AI-based Dental Disease Recognition system. Worked on database design and React.js + Material UI front ends.",
    tag: "Experience",
  },
  {
    date: "Oct 2020 — Jul 2024",
    role: "B.S. Software Engineering",
    org: "National Textile University",
    text: "Graduated in Software Engineering. Assistant Programming Head of the Software Engineering Society.",
    tag: "Education",
  },
];

const values = ["Full-stack range", "End-to-end ownership", "Ships to production", "AI where it counts"];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28">
      <DotGrid className="absolute right-6 top-16 hidden opacity-50 md:block" />

      <div className="section-pad grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left: intro */}
        <div>
          <Reveal>
            <span className="label">
              <Asterisk size={13} color="#6B53A8" /> (01) Who I am
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-4 text-4xl md:text-6xl">
              I ship products
              <br />
              from prototype to{" "}
              <span className="relative inline-block">
                <span className="text-spectrum">production.</span>
                <Squiggle className="absolute -bottom-2 left-0 h-3 w-full" />
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-md text-[15px] leading-relaxed text-ink-soft md:text-base">
              I&apos;m Ariha — a full-stack engineer who&apos;s most at home across the whole stack:
              React and Next.js front ends, Node APIs, databases, and the AI integrations that make
              products smarter. I care about the quiet craft — clean code, honest interfaces, and
              features that genuinely help instead of showing off.
            </p>
          </Reveal>

          <Stagger className="mt-7 flex flex-wrap gap-2.5" delay={0.1}>
            {values.map((v) => (
              <StaggerItem key={v}>
                <span className="tag">
                  <Asterisk size={10} color="#6B53A8" /> {v}
                </span>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <div className="card card-hover mt-8 flex items-center gap-4 p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-spectrum text-lg">
                <Asterisk size={20} color="#0C0C0D" />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
                  Currently
                </p>
                <p className="font-semibold text-ink">
                  Software Engineer @ Invitrex · M.S. @ NTU
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: timeline */}
        <div className="relative">
          <div className="absolute bottom-3 left-[15px] top-3 w-0.5 bg-ink/20 md:left-[19px]" />
          <Stagger className="flex flex-col gap-5">
            {timeline.map((t, idx) => (
              <StaggerItem key={t.role} dir="right">
                <div className="group relative flex gap-5">
                  <div className="relative z-10 mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-ink bg-paper-warm font-display text-sm text-ink transition-colors group-hover:bg-lavender-deep group-hover:text-paper md:h-10 md:w-10">
                    {idx + 1}
                  </div>
                  <div className="card card-hover flex-1 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">
                        {t.date}
                      </span>
                      <span className="tag !py-0.5 !text-[10px]">{t.tag}</span>
                    </div>
                    <h3 className="mt-2 font-display text-xl uppercase tracking-tight text-ink">
                      {t.role}
                    </h3>
                    <p className="font-mono text-xs font-bold uppercase tracking-wide text-lavender-deep">
                      {t.org}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
};

export default About;
