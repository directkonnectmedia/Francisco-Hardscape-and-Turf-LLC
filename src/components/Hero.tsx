"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Animated Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2940&auto=format&fit=crop')" }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 bg-brand-black/60"></div>
      </motion.div>

      {/* Flickering Lighting Overlay */}
      <motion.div
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-orange/20 via-transparent to-transparent pointer-events-none"
        animate={{ opacity: [0.3, 0.7, 0.4, 0.8, 0.5, 0.9, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent pointer-events-none"
        animate={{ opacity: [0.5, 0.9, 0.3, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-4 mb-6 drop-shadow-lg"
        >
          {/* Logo / Centerpiece */}
          <div className="flex flex-col items-center space-y-4 mb-4">
            <span className="text-6xl sm:text-7xl">🌱</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-white to-brand-green bg-clip-text text-transparent leading-tight pb-2">
              Francisco Hardscape
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-brand-orange font-bold tracking-widest uppercase">
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