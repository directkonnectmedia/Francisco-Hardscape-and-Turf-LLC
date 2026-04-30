"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import LeafLogo from "./LeafLogo";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] sm:min-h-[600px] sm:h-[90vh] flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Animated Paver Walkway with Landscape Lighting Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1741646557129-eeb404155d65?q=80&w=2400&auto=format&fit=crop')",
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-brand-black/65"></div>
      </motion.div>

      {/* Flickering landscape-lighting glow #1 (warm bottom-center) */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 90%, rgba(249,115,22,0.45), transparent 70%)",
        }}
        animate={{ opacity: [0.35, 0.95, 0.45, 0.85, 0.3, 1, 0.5] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Flickering landscape-lighting glow #2 (warm bottom-left lamp) */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle 220px at 18% 78%, rgba(250,204,21,0.55), transparent 70%)",
        }}
        animate={{ opacity: [0.6, 0.15, 0.85, 0.4, 1, 0.3, 0.7] }}
        transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
      {/* Flickering landscape-lighting glow #3 (warm bottom-right lamp) */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle 260px at 82% 70%, rgba(253,186,116,0.5), transparent 70%)",
        }}
        animate={{ opacity: [0.4, 0.95, 0.3, 0.8, 0.5, 1, 0.35] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
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