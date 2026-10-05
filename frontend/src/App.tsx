import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { HeroSection } from './components/HeroSection';
import { RegistrationSection } from './components/RegistrationSection';
import { SpeakerSection } from './components/SpeakerSection';

import { SplitQuoteCard, SplitQuoteCardProps } from './components/SplitQuoteSection';
import card1 from './assets/fist.jpg';
import card2 from './assets/lady.jpg';
import card3 from './assets/gates.jpg';

import logo_image from './assets/logo.png';

const cardData: SplitQuoteCardProps[] = [
  {
    number: '01 • Autonomy and control',
    title: 'What if we lose control of AI?',
    description: 'As planning, purchasing and production move to AI agents, who holds the off switch in your plants and across your supply network?',
    quote: 'Visibility without predictive action is just watching your margins bleed in real-time.',
    authorOrTruth: 'Industry Truth',
    imageSrc: card1,
    imagePosition: 'right',
  },
  {
    number: '02 • Workforce and skills',
    title: 'Who will run your operations in 2035?',
    description: "AI is moving into entry-level work, and PISA 2025 shows Mexicos's 15-year-olds still scoring low in science, math and reading.",
    imageSrc: card2,
    imagePosition: 'left',
  },
  {
    number: '03 • Technology Dependence',
    title: 'Who will own the AI your supply chain runs on?',
    description: "Yesterday's single point of failure was a chip supplier. Tomorrow's could be a model, a cloud or a vendor you don't control.",
    imageSrc: card3,
    imagePosition: 'right',
  },
];

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
                AI <span className="text-secondary">Scenario Planning For Manufacturing and Supply Chain</span>
              </span>
            </div>
            
            <img src={logo_image} alt="Logo" className="h-12" />
          </div>
        </motion.header>

        {/* Sin padding superior: el header flota sobre el hero (cada sección ya reserva su espacio) */}
        <main>
          <HeroSection />
          {cardData.map((card, index) => (
            <SplitQuoteCard key={index} {...card} />
          ))}
          <SpeakerSection />
          <RegistrationSection />
        </main>
      </div>
    </MotionConfig>
  );
}