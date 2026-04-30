"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "hardscape",
    title: "Hardscape",
    description:
      "Expertly designed and installed hardscaping to transform your outdoor space into a functional and beautiful living area.",
    features: ["Patios", "Walkways", "Retaining Walls"],
    image:
      "https://images.unsplash.com/photo-1761637823622-eaaaee0660db?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "travertine-pavers",
    title: "Travertine Pavers",
    description:
      "Premium travertine paver installation providing elegant, slip-resistant, and heat-resistant surfaces perfect for Arizona weather.",
    features: ["Pool Decks", "Driveways", "Courtyards"],
    image:
      "https://images.unsplash.com/photo-1717160111930-b1a7ba2baf52?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "turf-installation",
    title: "Turf Installation",
    description:
      "Lush, green, and maintenance-free professional artificial turf. Perfect for backyards, dog runs, and surrounding swimming pools.",
    features: ["Pet-Friendly", "Water Conservation", "Always Green"],
    image:
      "https://images.unsplash.com/photo-1707228700996-5862513fe7de?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "materials-delivery",
    title: "Materials Delivery",
    description:
      "Reliable delivery of essential landscaping and hardscaping materials right to your project site.",
    features: ["Quarter Minus", "Gravel & Blocks", "Drywall"],
    image:
      "https://images.unsplash.com/photo-1761898552506-5b14f17edcdf?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "landscape-lighting",
    title: "Custom Landscape Lighting",
    description:
      "Highlight the beauty of your home and improve security with our custom-designed LED landscape lighting systems.",
    features: ["Path Lighting", "Up-lighting", "Spotlights"],
    image:
      "https://images.unsplash.com/photo-1741646557129-eeb404155d65?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "yard-cleanups",
    title: "Yard Cleanups",
    description:
      "Comprehensive yard cleanups to clear out debris, overgrowth, and prepare your outdoor spaces for the season.",
    features: ["Debris Removal", "Pruning", "Refresh"],
    image:
      "https://images.unsplash.com/photo-1771317778033-3473a576c5e9?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "sprinkler-repairs",
    title: "Sprinkler Repairs",
    description:
      "Fast and reliable sprinkler system diagnostics and repair to keep your natural plants healthy and hydrated.",
    features: ["Leak Repair", "Head Replacement", "Timer Setup"],
    image:
      "https://images.unsplash.com/photo-1769339764809-522564cf34c9?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "weed-spraying",
    title: "Weed Spraying (Herbicide)",
    description:
      "Effective herbicide treatments to eliminate and prevent invasive weeds from taking over your yard.",
    features: ["Pre-emergent", "Spot Treatment", "Safe Application"],
    image:
      "https://images.unsplash.com/photo-1775806383830-39512c641bd6?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "outdoor-barbecues",
    title: "Custom Outdoor Barbecues",
    description:
      "Built-in outdoor BBQ islands customized to your cooking style and entertaining needs.",
    features: ["Stone Veneer", "Custom Counters", "Built-in Grills"],
    image:
      "https://images.unsplash.com/photo-1762117361035-5cd4f9c24795?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "fire-pits",
    title: "Fire Pits",
    description:
      "Warm up your chilly evenings with beautifully crafted custom fire pits, available in gas or wood-burning setups.",
    features: ["Gas or Wood", "Seating Walls", "Safe & Stylish"],
    image:
      "https://images.unsplash.com/photo-1654546493292-7df731737090?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "cement-block-walls",
    title: "Cement Block Walls",
    description:
      "Durable and strong cement block walls for privacy, security, and property division.",
    features: ["Privacy Walls", "Retaining Walls", "Stucco Finish"],
    image:
      "https://images.unsplash.com/photo-1746160934129-36b73b974228?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand-green tracking-widest uppercase mb-3"
          >
            Our Services
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Everything Your Yard Needs
          </motion.h3>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.id} 
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Photo Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full lg:w-1/2 flex justify-center"
                >
                  <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full max-w-md rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-brand-gray group">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent"></div>
                  </div>
                </motion.div>

                {/* Description Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="bg-brand-gray p-8 sm:p-10 rounded-2xl shadow-xl space-y-8 relative overflow-hidden group hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] transition-shadow duration-300">
                    <div className="absolute top-0 left-0 w-2 h-full bg-brand-green group-hover:bg-brand-orange transition-colors duration-300"></div>
                    
                    <h4 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                      {service.title}
                    </h4>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-gray-200 font-medium">
                          <CheckCircle2 className="w-6 h-6 text-brand-green mr-3 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-6">
                      <Link 
                        href="#quote"
                        className="inline-flex items-center justify-center px-6 py-3 bg-brand-green hover:bg-brand-green-hover text-white rounded-md font-semibold transition-colors group/btn"
                      >
                        Get a Free Quote
                        <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}