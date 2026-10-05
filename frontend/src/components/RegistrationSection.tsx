import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
} from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import imageHere from '../assets/image.jpg';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------ */
/* Piezas reutilizables (solo dentro de esta sección)                  */
/* ------------------------------------------------------------------ */

// Línea del titular que "sube" desde una máscara
const Line = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <span className="block overflow-hidden pb-[0.14em]">
    <motion.span
      className="inline-block"
      initial={{ y: '110%' }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 1.1, delay, ease }}
    >
      {children}
    </motion.span>
  </span>
);

// Dos arcos de luz (secondary y tertiary) que giran alrededor del borde de la tarjeta.
// Capa cuadrada centrada: lo justo para cubrir la tarjeta al girar (más barato de renderizar).
const sweep = (from: number) =>
  `conic-gradient(from ${from}deg, transparent 0deg, currentColor 70deg, transparent 140deg)`;

const BorderSweep = () => (
  <>
    <motion.div
      aria-hidden
      className="absolute left-1/2 top-1/2 aspect-square w-[190%] text-secondary"
      style={{ x: '-50%', y: '-50%', background: sweep(0) }}
      animate={{ rotate: 360 }}
      transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
    />
    <motion.div
      aria-hidden
      className="absolute left-1/2 top-1/2 aspect-square w-[190%] text-tertiary"
      style={{ x: '-50%', y: '-50%', background: sweep(180) }}
      animate={{ rotate: 360 }}
      transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
    />
  </>
);

type FieldProps = { id: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>;

// Campo con línea inferior que se "enciende" con degradado al enfocar
const Field = ({ id, label, ...props }: FieldProps) => (
  <div className="group">
    <label
      htmlFor={id}
      className="mb-1 block text-sm tracking-wide text-white/60 transition-colors duration-300 group-focus-within:text-secondary"
    >
      {label}
    </label>
    <div className="relative">
      <input
        id={id}
        required
        className="w-full rounded-none border-0 border-b border-white/25 bg-transparent px-0 py-3 text-xl font-light text-white placeholder:text-white/30 focus:outline-none focus:ring-0"
        {...props}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-secondary to-tertiary transition-transform duration-500 group-focus-within:scale-x-100"
      />
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Sección                                                             */
/* ------------------------------------------------------------------ */

export const RegistrationSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Foco de luz que sigue al cursor
  const mx = useMotionValue(-600);
  const my = useMotionValue(-600);
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, rgba(255,255,255,0.08), transparent 70%)`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const gridMask = 'radial-gradient(ellipse at center, black 25%, transparent 75%)';

  return (
    <section
      id="registration"
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-black"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
    >
      {/* ---------- Fondo ---------- */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: [1.1, 1.22], x: ['0%', '-3%'] }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
      >
        <img src={imageHere} alt="" className="h-full w-full object-cover object-top opacity-40 grayscale" />
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black via-black/55 to-black" />

      {/* Cuadrícula tenue con desvanecido en los bordes */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: gridMask,
          WebkitMaskImage: gridMask,
        }}
      />

      {/* Orbes de color a la deriva */}
      <motion.div
        aria-hidden
        className="absolute -right-56 -top-20 h-[48rem] w-[48rem] rounded-full text-secondary opacity-25"
        style={{ background: 'radial-gradient(circle, currentColor 0%, transparent 65%)' }}
        animate={{ x: [0, -90, 0], y: [0, 70, 0] }}
        transition={{ duration: 20, ease: 'easeInOut', repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -left-56 h-[46rem] w-[46rem] rounded-full text-tertiary opacity-25"
        style={{ background: 'radial-gradient(circle, currentColor 0%, transparent 65%)' }}
        animate={{ x: [0, 100, 0], y: [0, -60, 0] }}
        transition={{ duration: 24, ease: 'easeInOut', repeat: Infinity }}
      />

      {/* Spotlight del cursor */}
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />

      {/* ---------- Contenido ---------- */}
      <div className="relative z-10 grid grow grid-cols-1 items-center gap-14 px-6 pb-14 pt-28 md:px-12 lg:grid-cols-12 lg:gap-12 lg:px-16">
        {/* Info Side */}
        <div className="lg:col-span-7">
          <h2 className="mb-10 text-6xl font-light leading-[1] tracking-tight text-white sm:text-7xl xl:text-8xl 2xl:text-9xl">
            <Line>Secure</Line>
            <Line delay={0.15}>
              <motion.span
                className="inline-block bg-gradient-to-r from-secondary via-white to-tertiary bg-clip-text text-transparent"
                style={{ backgroundSize: '200% 100%' }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
                transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
              >
                Your Spot.
              </motion.span>
            </Line>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 1, delay: 0.45, ease }}
            className="max-w-xl border-l-2 border-secondary pl-6 text-xl font-light leading-relaxed text-white/80 md:text-2xl"
          >
            Join us for a deep dive into scenario planning for AI in manufacturing and supply chains.
          </motion.p>
        </div>

        {/* Form Side */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 1.1, delay: 0.3, ease }}
          className="relative w-full max-w-lg lg:col-span-5 lg:justify-self-end"
        >
          {/* Brillo suave alrededor de la tarjeta (estático, barato de renderizar) */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-3xl text-secondary opacity-30"
            style={{ boxShadow: '40px -30px 140px -20px currentColor' }}
          />
          <div
            aria-hidden
            className="absolute inset-0 rounded-3xl text-tertiary opacity-30"
            style={{ boxShadow: '-40px 30px 140px -20px currentColor' }}
          />

          {/* Borde animado */}
          <div className="relative overflow-hidden rounded-3xl bg-white/10 p-px">
            <BorderSweep />

            <div className="relative rounded-[calc(1.5rem-1px)] bg-black p-8 md:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[calc(1.5rem-1px)] bg-gradient-to-b from-white/[0.07] to-transparent"
              />
              <div className="flex min-h-[22rem] flex-col justify-center">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-9"
                    >
                      <Field id="full-name" label="Full Name" type="text" placeholder="John Doe" />
                      <Field id="work-email" label="Work Email" type="email" placeholder="john@company.com" />

                      <div className="relative">
                        {/* Pulso que llama la atención al botón */}
                        <motion.span
                          aria-hidden
                          className="absolute inset-0 rounded-full bg-tertiary"
                          animate={{ scale: [1, 1.07, 1], opacity: [0.45, 0, 0.45] }}
                          transition={{ duration: 2.8, ease: 'easeOut', repeat: Infinity }}
                        />
                        <button
                          type="submit"
                          className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-tertiary py-5 text-lg font-medium text-white transition-colors hover:bg-tertiary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                          {/* Destello que cruza el botón al pasar el cursor */}
                          <span
                            aria-hidden
                            className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/30 blur-md transition-transform duration-700 group-hover:translate-x-[420%]"
                          />
                          <span className="relative">Register Now</span>
                          <ChevronRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="confirmed"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, ease }}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="relative mb-8 h-24 w-24 text-secondary">
                        <motion.span
                          aria-hidden
                          className="absolute inset-0 rounded-full border border-current"
                          initial={{ scale: 1, opacity: 0.6 }}
                          animate={{ scale: 1.9, opacity: 0 }}
                          transition={{ duration: 1.8, ease: 'easeOut', repeat: Infinity }}
                        />
                        <svg
                          viewBox="0 0 96 96"
                          className="relative h-full w-full"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                        >
                          <motion.circle
                            cx="48"
                            cy="48"
                            r="44"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.9, ease }}
                          />
                          <motion.path
                            d="M30 50 L43 63 L68 36"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.6, delay: 0.7, ease }}
                          />
                        </svg>
                      </div>
                      <h3 className="mb-4 text-3xl font-light tracking-tight text-secondary md:text-4xl">
                        Registration Confirmed
                      </h3>
                      <p className="text-lg font-light text-white/80">Check your inbox for access details.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ---------- Footer ---------- */}
      <footer className="relative z-10 flex h-20 shrink-0 items-center gap-3 border-t border-white/15 px-6 md:px-12 lg:px-16">
        <span aria-hidden className="h-2 w-2 rounded-full bg-secondary" />
        <h2 className="text-base font-light tracking-wide text-white/70 md:text-lg">
          AI for Manufacturing and Supply Chain Institute
        </h2>
      </footer>
    </section>
  );
};