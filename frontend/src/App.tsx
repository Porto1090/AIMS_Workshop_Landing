import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { HeroSection } from './components/HeroSection';
import { SplitQuoteSection } from './components/SplitQuoteSection';
import { RegistrationSection } from './components/RegistrationSection';
import { SpeakerSection } from './components/SpeakerSection';

export default function App() {
  return (
    // reducedMotion="user": respeta la preferencia del sistema y desactiva
    // las animaciones de movimiento para quien la tenga activada
    <MotionConfig reducedMotion="user">
      {/* Contenedor principal con Scroll Snapping */}
      <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-black font-sans selection:bg-[#00E5FF] selection:text-black scroll-smooth">
        {/* Header fijo, translúcido y superpuesto al hero */}
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md"
        >
          <div className="flex h-20 items-center justify-between px-6 md:px-10">
            <div className="flex items-center gap-3 text-lg font-medium tracking-tight text-white md:text-xl">
              <span aria-hidden className="h-2 w-2 rounded-full bg-secondary" />
              <span>
                AI <span className="text-secondary">Supply Chain Event</span>
              </span>
            </div>
            <a
              href="#registration"
              className="rounded-full border border-white/30 px-6 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact us
            </a>
          </div>
        </motion.header>

        {/* Sin padding superior: el header flota sobre el hero (cada sección ya reserva su espacio) */}
        <main>
          <HeroSection />
          <SplitQuoteSection />
          <SpeakerSection />
          <RegistrationSection />
        </main>
      </div>
    </MotionConfig>
  );
}