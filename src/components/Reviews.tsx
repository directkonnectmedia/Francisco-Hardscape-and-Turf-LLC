"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Homeowner",
    text: "Francisco and his team did an amazing job on our yard remodel. The attention to detail on the travertine pavers is incredible. Highly recommend!",
    stars: 5,
  },
  {
    id: 2,
    name: "Michael Reed",
    title: "Local Resident",
    text: "The new landscape lighting completely transformed our home's exterior. They were quick, professional, and cleaned up everything before leaving.",
    stars: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    title: "Homeowner",
    text: "We wanted artificial turf for our backyard pool area, and they delivered perfectly. The turf looks seamless and incredibly realistic.",
    stars: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-brand-black border-t border-brand-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand-green tracking-widest uppercase mb-3"
          >
            Client Reviews
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            What Our Customers Say
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Don't just take our word for it—see what your neighbors think.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-brand-gray p-8 rounded-2xl shadow-lg flex flex-col h-full relative group border border-brand-light-gray hover:border-brand-green/30 transition-colors"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-brand-green to-brand-green rounded-t-2xl opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Stars */}
              <div className="flex text-yellow-400 mb-6 mt-2">
                {[...Array(review.stars)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 text-lg leading-relaxed flex-grow italic">
                &quot;{review.text}&quot;
              </p>

              {/* Reviewer Info */}
              <div className="mt-8 pt-6 border-t border-brand-light-gray">
                <h4 className="font-bold text-white text-lg">{review.name}</h4>
                <p className="text-gray-400 text-sm">{review.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}