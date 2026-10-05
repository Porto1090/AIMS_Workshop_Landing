import React from 'react';
import { motion } from 'framer-motion';
import imageHere from '../assets/image.jpg';

export const SpeakerSection = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-brand border-b-4 border-secondary p-6 md:p-12">
      {/* La "Cajita" Central - Estructura estricta sin curvas */}
      <div className="w-full max-w-6xl bg-brand-hover border-4 border-secondary flex flex-col md:flex-row">
        {/* Contenedor de Imagen (Cuadrado estricto) */}
        <div className="w-full md:w-5/12 border-b-4 md:border-b-0 md:border-r-4 border-secondary relative aspect-square md:aspect-auto">
          <img
            src={imageHere}
            alt="Dr. Shardul Phadnis"
            className="absolute inset-0 w-full h-full object-cover object-top grayscale"
          />
        </div>

        {/* Contenedor de Información */}
        <div className="w-full md:w-7/12 p-10 md:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-secondary font-black tracking-widest uppercase mb-4 text-sm md:text-base">
              Speaker Profile
            </p>
            <h3 className="text-5xl md:text-6xl font-black text-white uppercase leading-none tracking-tighter mb-6">
              Dr. Shardul <br /> Phadnis
            </h3>

            {/* Línea divisoria de color de acento */}
            <div className="border-l-4 border-tertiary pl-6 mb-8">
              <p className="text-xl md:text-2xl font-bold uppercase text-white leading-snug">
                Professor of Operations & Supply Chain Management at Asia School of Business
              </p>
            </div>

            <p className="text-lg font-bold text-gray-300">
              His research explores the intersection between supply chains and strategic management:
              (a) how organizations create value by orchestrating supply chain operations and
              (b) how strategy processes, such as scenario planning, influence the adaptability of
              supply chain infrastructures and processes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};