import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

export const HeroSection = () => {
  const timeLeft = useCountdown('2027-04-15T10:00:00');

  return (
    <section className="h-screen w-full bg-brand text-white flex flex-col justify-center items-center pb-4 border-b-4 border-secondary relative">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block border-2 border-secondary text-secondary px-4 py-2 text-sm font-bold uppercase tracking-widest mb-8"
        >
          AIMS SCENARIO PLANNING WORKSHOP - APRIL 2027
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8"
        >
          Which future are<br /> you <span className="text-tertiary">building</span> for?
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none mb-8"
        >
          Scenarios for AI in manufacturing and supply chains
        </motion.h3>

        <div className="flex flex-wrap gap-8 mb-16 text-lg font-bold uppercase tracking-wide">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-secondary" /> APR 15, 2027
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-secondary" /> 10:00 AM (CST)
          </div>
        </div>

        <div className="flex gap-4 md:gap-8 mb-16">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-start">
              <div className="w-20 h-20 md:w-32 md:h-32 flex items-center justify-center bg-transparent border-4 border-secondary mb-2">
                <span className="text-3xl md:text-5xl font-black">
                  {value.toString().padStart(2, '0')}
                </span>
              </div>
              <span className="text-sm uppercase font-bold tracking-widest text-secondary">
                {unit}
              </span>
            </div>
          ))}
        </div>

        {/* CTA con el naranja neón (descomentado y adaptado al tema) */}
        {/* <a
          href="#registration"
          className="inline-flex items-center gap-4 px-10 py-5 text-xl font-black text-white bg-tertiary hover:bg-tertiary-hover transition-colors uppercase border-4 border-transparent hover:border-secondary"
        >
          Secure Your Spot <ChevronRight className="w-6 h-6" />
        </a> */}
      </div>
    </section>
  );
};