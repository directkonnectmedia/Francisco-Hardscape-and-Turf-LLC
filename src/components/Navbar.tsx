"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-black/90 backdrop-blur-sm border-b border-brand-gray shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl mr-1">🌱</span>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-white to-brand-green bg-clip-text text-transparent group-hover:from-white group-hover:to-brand-green-hover transition-all leading-tight">
                Francisco Hardscape
              </span>
              <span className="text-xs text-brand-orange font-semibold tracking-widest uppercase">
                & Turf LLC
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="#services"
              className="text-gray-300 hover:text-brand-green font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="#gallery"
              className="text-gray-300 hover:text-brand-green font-medium transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="#reviews"
              className="text-gray-300 hover:text-brand-green font-medium transition-colors"
            >
              Reviews
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="tel:602-920-2015"
              className="flex items-center text-gray-300 hover:text-brand-green font-semibold transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span>(602) 920-2015</span>
            </a>
            <Link
              href="#quote"
              className="bg-brand-green hover:bg-brand-green-hover text-white px-6 py-2.5 rounded-md font-semibold transition-colors shadow-sm"
            >
              Get a Quote
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-black border-b border-brand-gray px-4 pt-2 pb-6 space-y-4">
          <Link
            href="#services"
            className="block text-gray-300 hover:text-brand-green font-medium"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#gallery"
            className="block text-gray-300 hover:text-brand-green font-medium"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href="#reviews"
            className="block text-gray-300 hover:text-brand-green font-medium"
            onClick={() => setIsOpen(false)}
          >
            Reviews
          </Link>
          <a
            href="tel:602-920-2015"
            className="flex items-center text-gray-300 hover:text-brand-green font-medium pt-4 border-t border-brand-gray"
          >
            <Phone className="w-5 h-5 mr-2" />
            <span>(602) 920-2015</span>
          </a>
          <Link
            href="#quote"
            className="block w-full text-center bg-brand-green hover:bg-brand-green-hover text-white px-6 py-3 rounded-md font-semibold transition-colors mt-4"
            onClick={() => setIsOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}