"use client";

import { motion } from "framer-motion";

type LeafLogoProps = {
  size?: number;
  className?: string;
};

export default function LeafLogo({ size = 36, className = "" }: LeafLogoProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-[0_0_8px_rgba(34,197,94,0.45)] ${className}`}
      style={{ originX: "50%", originY: "100%" }}
      initial={{ rotate: -18 }}
      animate={{ rotate: [-18, 18, -18] }}
      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <defs>
        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="55%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
        <linearGradient id="stemGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#854d0e" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
      </defs>

      {/* Stem */}
      <path
        d="M 32 62 Q 30 56 28 50"
        stroke="url(#stemGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Leaf body */}
      <path
        d="M 28 50
           C 8 44, 4 22, 18 6
           C 36 12, 56 22, 54 44
           C 50 54, 38 54, 28 50 Z"
        fill="url(#leafGrad)"
        stroke="#166534"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      {/* Central vein */}
      <path
        d="M 28 50 Q 24 36 18 8"
        stroke="#166534"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />

      {/* Side veins */}
      <path d="M 24 44 Q 18 40 12 36" stroke="#166534" strokeWidth="1" fill="none" opacity="0.7" />
      <path d="M 22 36 Q 18 32 10 28" stroke="#166534" strokeWidth="1" fill="none" opacity="0.7" />
      <path d="M 22 26 Q 22 22 14 18" stroke="#166534" strokeWidth="1" fill="none" opacity="0.7" />
      <path d="M 30 44 Q 38 42 46 40" stroke="#166534" strokeWidth="1" fill="none" opacity="0.7" />
      <path d="M 26 34 Q 36 32 46 30" stroke="#166534" strokeWidth="1" fill="none" opacity="0.7" />
      <path d="M 24 22 Q 32 20 42 18" stroke="#166534" strokeWidth="1" fill="none" opacity="0.7" />

      {/* Subtle highlight */}
      <path
        d="M 22 18 C 30 14, 40 16, 48 24"
        stroke="#bbf7d0"
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      />
    </motion.svg>
  );
}
