import React from 'react';
import { motion } from 'framer-motion';
import imageHere from '../assets/image.jpg';

export const SplitQuoteSection = () => {
  return (
    <section className="h-screen w-full grid grid-cols-1 md:grid-cols-2 border-b-4 border-secondary">
      {/* Left: High Impact Statement */}
      <div className="bg-brand p-16 flex flex-col justify-center border-r-4 border-secondary">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p className="text-tertiary font-black tracking-widest uppercase mb-8 text-xl">
            01 • Autonomy and control
          </p>
          <h2 className="text-6xl md:text-7xl font-black leading-none text-white uppercase tracking-tighter">
            What if we lose control of AI?
          </h2>
          <div className="border-t-4 border-tertiary pt-8 mt-12 max-w-lg">
            <p className="text-white text-2xl font-bold">
              As planning, purchasing and production move to AI agents, who holds the off switch in your plants and across your supply network?
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right: Image */}
      <div className="relative bg-brand-hover p-16 flex flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top opacity-75"
          style={{ backgroundImage: `url(${imageHere})` }}
        ></div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="relative z-10 bg-brand border-4 border-secondary p-8"
        >
          <h3 className="text-3xl font-bold uppercase leading-tight text-white mb-6">
            "Visibility without predictive action is just watching your margins bleed in real-time."
          </h3>
          <div>
            <p className="font-black text-secondary text-xl uppercase">Industry Truth</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};