import React from 'react';
import { motion, type Variants } from 'framer-motion';
import imageHere from '../assets/dr_shardul.jpg';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export const SpeakerSection = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden border-b border-white/10 bg-black px-6 py-28 md:px-12">
      {/* Resplandor ambiental */}
      <div
        aria-hidden
        className="absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-secondary opacity-10 blur-[140px]"
      />

      <div className="relative grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
        {/* Imagen */}
        <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 md:col-span-5">
          <motion.img
            src={imageHere}
            alt="Dr. Shardul Phadnis"
            className="absolute inset-0 h-full w-full object-cover transition-[filter] duration-700"
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.8, ease }}
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Información */}
        <motion.div
          className="md:col-span-7"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-secondary font-black tracking-widest uppercase mb-4 text-sm md:text-base">
            Strategic Lead
          </p>
          <h3 className="text-5xl md:text-6xl font-black text-white uppercase leading-none tracking-tighter mb-6">
            Dr. Shardul <br /> Phadnis
          </h3>

          <motion.div variants={item} className="mb-8 border-l-2 border-tertiary pl-6">
            <p className="text-xl font-light leading-snug text-white md:text-2xl">
              Professor of Operations & Supply Chain Management at Asia School of Business
            </p>
          </motion.div>

          <motion.p variants={item} className="max-w-2xl text-lg font-light leading-relaxed text-white/70">
            His research explores the intersection between supply chains and strategic management:
            (a) how organizations create value by orchestrating supply chain operations and
            (b) how strategy processes, such as scenario planning, influence the adaptability of
            supply chain infrastructures and processes.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};