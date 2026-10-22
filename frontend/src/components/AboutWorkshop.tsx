import React from 'react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease },
});

const ScenariosIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="17" height="17" rx="4" strokeWidth="2" className="stroke-secondary" />
    <rect x="24" y="3" width="17" height="17" rx="4" strokeWidth="2" className="stroke-secondary" />
    <rect x="3" y="24" width="17" height="17" rx="4" strokeWidth="2" className="stroke-secondary" />
    <rect x="24" y="24" width="17" height="17" rx="4" strokeWidth="2" className="fill-tertiary stroke-tertiary" />
  </svg>
);

const DecisionsIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true" className="stroke-secondary">
    <path d="M4 22h12c6 0 8-12 16-12h6" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 22c6 0 8 12 16 12h6" strokeWidth="2" strokeLinecap="round" />
    <path d="M33 5l5 5-5 5M33 29l5 5-5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="22" r="4" className="fill-tertiary stroke-tertiary" />
  </svg>
);

const parts = [
  {
    label: "Part 1",
    title: "Understanding the scenarios",
    text: "Map the forces reshaping AI in manufacturing and supply chains, from technology and talent to trade and regulation, and co-create plausible scenarios for the next decade.",
    Icon: ScenariosIcon,
  },
  {
    label: "Part 2",
    title: "Identifying the key decisions and projects",
    text: "Stress-test strategies and projects against every scenario to find the decisions that hold up in any future, and the initiatives worth launching together.",
    Icon: DecisionsIcon,
  },
];

export default function AboutWorkshop() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden border-b border-white/10 bg-black px-6 py-28 md:px-12">
      <div className="absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-secondary opacity-10 blur-[140px]" />

      <div className="relative z-10 w-full max-w-6xl">
        <p className="mb-4 text-sm font-black uppercase tracking-widest text-secondary md:text-base">
          About the workshop
        </p>
        <h3 className="mb-6 text-5xl font-black uppercase leading-none tracking-tighter text-white md:text-6xl">
          From uncertainty
          <br />
          <span className="text-tertiary">to decisions</span>
        </h3>

        <div className="mb-14 max-w-3xl border-l-2 border-tertiary pl-6">
          <p className="text-xl font-light leading-snug text-white md:text-2xl">
            Join us and a select group of organizations in a hands-on exercise to understand the
            challenges ahead, co-create the scenarios and identify the decisions that will shape the
            future of your organization. Together, we can build more resilient and flexible
            organizations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {parts.map(({ label, title, text, Icon }) => (
            <div
              key={title}
              className="flex flex-col gap-5 rounded-3xl border border-white/20 bg-black/60 p-8 backdrop-blur-xl md:p-10"
            >
              <div className="flex items-center justify-between">
                <Icon />
                <span className="text-base tracking-wide text-tertiary md:text-lg">{label}</span>
              </div>
              <h4 className="text-2xl font-light leading-tight tracking-tight text-white md:text-3xl">
                {title}
              </h4>
              <p className="text-lg font-light leading-relaxed text-white/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}