"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const previewPhotos = [
  { id: 1, src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2940&auto=format&fit=crop", title: "Paver Walkways" },
  { id: 2, src: "https://images.unsplash.com/photo-1598908314732-07113901949e?q=80&w=2940&auto=format&fit=crop", title: "Landscape Lighting" },
  { id: 3, src: "https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=2940&auto=format&fit=crop", title: "Artificial Turf Pool" },
  { id: 4, src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2940&auto=format&fit=crop", title: "Hardscape Patios" },
  { id: 5, src: "https://images.unsplash.com/photo-1583344607736-224405374e2d?q=80&w=2940&auto=format&fit=crop", title: "Lush Backyards" },
  { id: 6, src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2940&auto=format&fit=crop", title: "Custom BBQs" }
];

const expandedPhotos = [
  { id: 7, src: "https://images.unsplash.com/photo-1533555543184-a14eb89115b0?q=80&w=2940&auto=format&fit=crop", title: "Fire Pits" },
  { id: 8, src: "https://images.unsplash.com/photo-1518457850871-ad0d41ca4eb0?q=80&w=2940&auto=format&fit=crop", title: "Block Walls" },
  { id: 9, src: "https://images.unsplash.com/photo-1689728318937-17d24bc0a65c?q=80&w=2940&auto=format&fit=crop", title: "Yard Cleanups" },
  { id: 10, src: "https://images.unsplash.com/photo-1592424001809-5b1068df6d05?q=80&w=2940&auto=format&fit=crop", title: "Weed Control" },
  { id: 11, src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2940&auto=format&fit=crop", title: "Material Delivery" },
  { id: 12, src: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=2940&auto=format&fit=crop", title: "Beautiful Landscapes" }
];

export default function Gallery() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="gallery" className="py-24 bg-brand-black border-t border-brand-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand-green tracking-widest uppercase mb-3"
          >
            Our Recent Work
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            Excellence in Landscape Design
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Take a look at some of the stunning outdoor spaces we've created for our clients.
          </motion.p>
        </div>

        {/* Initial Grid (6 photos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {previewPhotos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[400px] bg-brand-gray border border-brand-gray"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${photo.src}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brand-green font-semibold text-sm tracking-wider uppercase mb-1 block">
                  Project
                </span>
                <h4 className="text-white text-xl font-bold">{photo.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Grid */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="overflow-hidden mt-6 md:mt-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {expandedPhotos.map((photo, i) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="group relative rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[400px] bg-brand-gray border border-brand-gray"
                  >
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${photo.src}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-1 block">
                        Gallery
                      </span>
                      <h4 className="text-white text-xl font-bold">{photo.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center px-8 py-3 bg-transparent border-2 border-brand-green hover:bg-brand-green/10 text-brand-green rounded-md font-bold text-lg transition-colors group"
          >
            {isExpanded ? (
              <>
                View Less
                <ChevronUp className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </>
            ) : (
              <>
                View Full Gallery
                <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}