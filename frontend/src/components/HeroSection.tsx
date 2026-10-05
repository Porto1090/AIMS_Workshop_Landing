import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import imageHere from '../assets/Picture1.jpg';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Entrada orquestrada: cada bloque aparece con un pequeño desfase
const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease },
});

export const HeroSection = () => {
  const timeLeft = useCountdown('2027-04-21T08:00:00');

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-black text-white">
      {/* Fondo: imagen con zoom lento (equivalente al video del hero de referencia) */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: [1.08, 1.2] }}
        transition={{ duration: 26, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
      >
        <img
          src={imageHere}
          alt=""
          className="h-full w-full object-cover object-top opacity-75"
        />
      </motion.div>

      {/* Escrim para legibilidad */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* Resplandor de acento que "respira" */}
      <motion.div
        aria-hidden
        className="absolute -right-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-secondary blur-[140px]"
        animate={{ opacity: [0.1, 0.24, 0.1] }}
        transition={{ duration: 9, ease: 'easeInOut', repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-6 pb-12 pt-28 md:px-12 md:pb-16">
        <motion.div
          {...reveal(0.1)}
          className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm tracking-wide text-white/80 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
          AIMS Scenario Planning Workshop - April 2027
        </motion.div>

        <motion.h1
          {...reveal(0.25)}
          className="mb-8 text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl md:text-8xl"
        >
          Which <span className="text-tertiary">future</span> are<br /> you building for?
        </motion.h1>

        <motion.h3
          {...reveal(0.4)}
          className="mb-12 max-w-2xl text-xl font-light leading-snug text-white/70 md:text-2xl"
        >
          Scenarios for AI in manufacturing and supply chains
        </motion.h3>

        <motion.div
          {...reveal(0.55)}
          className="flex flex-wrap gap-x-10 gap-y-3 border-t border-white/15 pt-6 text-base font-light text-white/80 md:text-lg"
        >
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-secondary" /> APR 21, 2027
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-secondary" /> 8:00 AM (CST)
          </div>
        </motion.div>

        <motion.div {...reveal(0.7)} className="mt-10 flex divide-x divide-white/15">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col px-4 first:pl-0 md:px-10">
              <motion.span
                key={value}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease }}
                className="block text-4xl font-extrabold leading-none sm:text-5xl md:text-7xl"
              >
                {value.toString().padStart(2, '0')}
              </motion.span>
              <span className="mt-3 text-sm capitalize tracking-wide text-secondary">
                {unit}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA (sigue comentado, como en tu versión original)
        <a
          href="#registration"
          className="mt-12 inline-flex w-fit items-center gap-3 rounded-full bg-tertiary px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-tertiary-hover"
        >
          Secure Your Spot <ChevronRight className="h-5 w-5" />
        </a> */}
      </div>
    </section>
  );
};