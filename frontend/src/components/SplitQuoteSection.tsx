import React from 'react';
import { motion, type Variants } from 'framer-motion';
import imageHere from '../assets/image.jpg';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export const SplitQuoteSection = () => {
  return (
    <section className="grid min-h-screen w-full grid-cols-1 border-b border-white/10 bg-black lg:grid-cols-2">
      {/* Left: High Impact Statement */}
      <div className="flex flex-col justify-center px-6 pb-16 pt-28 md:px-12 lg:px-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 'some' }}
        >
          <motion.p variants={item} className="mb-8 text-base tracking-wide text-tertiary md:text-lg">
            01 • Autonomy and control
          </motion.p>

          <motion.h2
            variants={item}
            className="text-5xl font-light leading-[1.05] tracking-tight text-white md:text-6xl xl:text-7xl"
          >
            What if we lose control of AI?
          </motion.h2>

          {/* Divisor de línea que se dibuja */}
          <motion.div
            variants={{
              hidden: { scaleX: 0 },
              show: { scaleX: 1, transition: { duration: 1.2, ease } },
            }}
            className="mt-12 h-px max-w-lg origin-left bg-gradient-to-r from-tertiary via-white/30 to-transparent"
          />

          <motion.p
            variants={item}
            className="mt-8 max-w-lg text-xl font-light leading-relaxed text-white/80 xl:text-2xl"
          >
            As planning, purchasing and production move to AI agents, who holds the off switch in your plants and across your supply network?
          </motion.p>
        </motion.div>
      </div>

      {/* Right: Image */}
      <div className="relative flex min-h-[70vh] flex-col justify-end overflow-hidden p-6 md:p-12 lg:min-h-0">
        <motion.div
          aria-hidden
          className="absolute inset-0"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 2, ease }}
        >
          <img
            src={imageHere}
            alt=""
            className="h-full w-full object-cover object-top"
          />
        </motion.div>
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative z-10 rounded-3xl border border-white/20 bg-black/60 p-8 backdrop-blur-xl md:p-10"
        >
          <h3 className="mb-8 text-2xl font-light leading-snug text-white xl:text-3xl">
            "Visibility without predictive action is just watching your margins bleed in real-time."
          </h3>
          <div className="flex items-center gap-4">
            <span aria-hidden className="h-px w-10 bg-secondary" />
            <p className="text-lg text-secondary">Industry Truth</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};