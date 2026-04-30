"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import LeafLogo from "./LeafLogo";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] sm:min-h-[600px] sm:h-[90vh] flex items-center justify-center overflow-hidden bg-brand-black">
      {/*
        Animated Paver Walkway with Landscape Lighting Background.
        Brightness/saturation flicker is applied DIRECTLY to the photo so the
        actual solar lights in the image (the brightest pixels) appear to
        pulse and flicker. The dark overlay sits in a separate layer so it
        never gets brightened along with the lights.
      */}
      <motion.div
        className="absolute inset-0 bg-cover z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1741646557129-eeb404155d65?q=80&w=2400&auto=format&fit=crop')",
          backgroundPosition: "center bottom",
        }}
        animate={{
          scale: [1, 1.06, 1],
          filter: [
            "brightness(0.95) saturate(1.05) contrast(1)",
            "brightness(1.55) saturate(1.35) contrast(1.1)",
            "brightness(1.05) saturate(1.05)",
            "brightness(1.7) saturate(1.45) contrast(1.15)",
            "brightness(0.9) saturate(1)",
            "brightness(1.6) saturate(1.4) contrast(1.1)",
            "brightness(1) saturate(1.05)",
          ],
        }}
        transition={{
          scale: { duration: 22, repeat: Infinity, ease: "easeInOut" },
          filter: { duration: 2.6, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Static dark overlay so the brightness flicker doesn't wash out the section */}
      <div className="absolute inset-0 z-0 bg-brand-black/55 pointer-events-none" />

      {/*
        Independent warm-glow halos placed exactly on top of each solar light
        in the photo. Each one flickers at its own rhythm using mix-blend-mode
        screen so it only ADDS brightness where the photo is already lit.
        Coordinates were measured from the source image:
          Light 1 (largest, foreground):  ~37% x, ~78% y
          Light 2 (mid):                  ~50% x, ~42% y
          Light 3 (small back):           ~67% x, ~22% y
          Light 4 (tiny far back):        ~76% x, ~13% y
      */}
      <motion.div
        className="absolute inset-0 z-0 mix-blend-screen pointer-events-none hidden sm:block"
        style={{
          background:
            "radial-gradient(circle 130px at 37% 78%, rgba(255,236,179,0.95), rgba(255,200,120,0.5) 35%, transparent 70%)",
        }}
        animate={{ opacity: [0.55, 1, 0.4, 0.95, 0.5, 1, 0.6] }}
        transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 z-0 mix-blend-screen pointer-events-none hidden sm:block"
        style={{
          background:
            "radial-gradient(circle 90px at 50% 42%, rgba(255,236,179,0.9), rgba(255,200,120,0.4) 35%, transparent 70%)",
        }}
        animate={{ opacity: [0.7, 0.3, 0.95, 0.45, 1, 0.5, 0.85] }}
        transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.div
        className="absolute inset-0 z-0 mix-blend-screen pointer-events-none hidden sm:block"
        style={{
          background:
            "radial-gradient(circle 60px at 67% 22%, rgba(255,236,179,0.85), rgba(255,200,120,0.35) 40%, transparent 70%)",
        }}
        animate={{ opacity: [0.4, 0.9, 0.5, 1, 0.35, 0.95, 0.45] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
      />
      <motion.div
        className="absolute inset-0 z-0 mix-blend-screen pointer-events-none hidden sm:block"
        style={{
          background:
            "radial-gradient(circle 40px at 76% 13%, rgba(255,236,179,0.8), transparent 70%)",
        }}
        animate={{ opacity: [0.3, 0.85, 0.4, 1, 0.45, 0.9, 0.5] }}
        transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />

      {/*
        Mobile fallback: on small screens the photo gets cropped, so the
        precisely-positioned light halos no longer line up. Instead, blanket
        the bottom of the screen with a single warm flickering glow that
        always covers wherever the photo's lights end up rendering.
      */}
      <motion.div
        className="absolute inset-0 z-0 mix-blend-screen pointer-events-none sm:hidden"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% 80%, rgba(255,220,150,0.55), transparent 70%)",
        }}
        animate={{ opacity: [0.4, 0.95, 0.45, 1, 0.5, 0.95, 0.55] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20 sm:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-4 mb-6 drop-shadow-lg"
        >
          {/* Animated Leaf Logo / Centerpiece */}
          <div className="flex flex-col items-center space-y-4 mb-4">
            <LeafLogo size={96} className="sm:hidden" />
            <LeafLogo size={128} className="hidden sm:block md:hidden" />
            <LeafLogo size={160} className="hidden md:block" />
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-white to-brand-green bg-clip-text text-transparent leading-tight pb-2">
              Francisco Hardscape
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-4xl text-brand-orange font-bold tracking-widest uppercase">
              & Turf LLC
            </h2>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-6 text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 drop-shadow-md font-medium"
        >
          Premium hardscaping, turf installation, and landscaping services. We transform your outdoor living spaces with expert craftsmanship and meticulous attention to detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex justify-center"
        >
          <Link
            href="#quote"
            className="w-full sm:w-auto px-10 py-5 bg-brand-green hover:bg-brand-green-hover text-white rounded-md font-bold text-xl transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] flex items-center justify-center group"
          >
            Get a Quote
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}