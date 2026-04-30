"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, Check } from "lucide-react";

type QuoteData = {
  services: string[];
  details: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  address: string;
};

const serviceOptions = [
  "Hardscape",
  "Travertine Pavers",
  "Turf Installation",
  "Materials Delivery",
  "Custom Landscape Lighting",
  "Yard Cleanups",
  "Sprinkler Repairs",
  "Weed Spraying",
  "Outdoor Barbecues",
  "Fire Pits",
  "Cement Block Walls",
];

const timelineOptions = ["ASAP", "Next Few Weeks", "Planning Phase", "Just browsing / getting a quote"];

export default function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<QuoteData>({
    services: [],
    details: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleServiceToggle = (service: string) => {
    setData((prev) => {
      const isSelected = prev.services.includes(service);
      return {
        ...prev,
        services: isSelected 
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const isStepValid = () => {
    if (step === 1) return data.services.length > 0;
    if (step === 2) return data.details.trim().length > 0;
    if (step === 3) return data.timeline !== "";
    if (step === 4) {
      return data.name.trim() !== "" && (data.phone.trim() !== "" || data.email.trim() !== "");
    }
    return true;
  };

  const steps = [
    { num: 1, label: "Services" },
    { num: 2, label: "Details" },
    { num: 3, label: "Timeline" },
    { num: 4, label: "Contact" },
    { num: 5, label: "Done" },
  ];

  return (
    <section id="quote" className="py-24 bg-brand-black border-t border-brand-gray overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand-green tracking-widest uppercase mb-3"
          >
            Get Started
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          >
            Let's Build Your Dream Space
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-400"
          >
            Tell us about your project to get a free, no-obligation estimate.
          </motion.p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12 relative px-4">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-brand-light-gray z-0 rounded-full"></div>
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-brand-green z-0 transition-all duration-500 rounded-full"
            style={{ width: `${((step - 1) / 4) * 100}%` }}
          ></div>
          
          <div className="relative z-10 flex items-center justify-between">
            {steps.map((s) => {
              const isActive = step >= s.num;
              const isCurrent = step === s.num;
              
              return (
                <div key={s.num} className="flex flex-col items-center">
                  <div 
                    className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full font-bold text-sm transition-colors duration-300 shadow-lg ${
                      isActive 
                        ? "bg-brand-green text-white shadow-[0_0_15px_rgba(34,197,94,0.4)]" 
                        : "bg-brand-black text-gray-500 border-2 border-brand-light-gray"
                    }`}
                  >
                    {isActive && s.num < step ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : s.num}
                  </div>
                  <span className={`absolute top-12 sm:top-14 text-[10px] sm:text-xs font-medium ${isCurrent ? "text-brand-green" : "text-gray-500"}`}>
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-brand-gray rounded-2xl shadow-xl border border-brand-light-gray overflow-hidden min-h-[450px] relative mt-16 sm:mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 md:p-12 w-full absolute inset-0 overflow-y-auto"
            >
              {/* Step 1: Services */}
              {step === 1 && (
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Which services do you need?</h4>
                  <p className="text-gray-400 mb-8">Select all that apply to your project.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
                    {serviceOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleServiceToggle(opt)}
                        className={`p-4 border-2 rounded-xl text-left font-semibold text-sm sm:text-base transition-all ${
                          data.services.includes(opt)
                            ? "border-brand-green bg-brand-green/10 text-white"
                            : "border-brand-light-gray hover:border-brand-green/50 hover:bg-brand-black text-gray-300"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Details */}
              {step === 2 && (
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Project Details</h4>
                  <p className="text-gray-400 mb-6">Briefly describe what you're looking to achieve.</p>
                  <textarea
                    value={data.details}
                    onChange={(e) => setData({ ...data, details: e.target.value })}
                    placeholder="E.g., I want to replace my grass with turf and add a new travertine paver patio..."
                    className="w-full h-48 bg-brand-black border-2 border-brand-light-gray rounded-xl p-4 text-white focus:outline-none focus:border-brand-green transition-colors resize-none mb-24"
                  />
                </div>
              )}

              {/* Step 3: Timeline */}
              {step === 3 && (
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">When do you want to start?</h4>
                  <p className="text-gray-400 mb-8">Select your ideal timeline.</p>
                  <div className="grid grid-cols-1 gap-4 mb-24">
                    {timelineOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setData({ ...data, timeline: opt })}
                        className={`p-5 border-2 rounded-xl text-left font-semibold text-base sm:text-lg transition-all ${
                          data.timeline === opt
                            ? "border-brand-green bg-brand-green/10 text-white"
                            : "border-brand-light-gray hover:border-brand-green/50 hover:bg-brand-black text-gray-300"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Contact */}
              {step === 4 && (
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Your Contact Info</h4>
                  <p className="text-gray-400 mb-8">How can we reach you to provide the quote?</p>
                  
                  <div className="space-y-5 mb-24">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Full Name *</label>
                      <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        className="w-full bg-brand-black border border-brand-light-gray rounded-md p-3 text-white focus:outline-none focus:border-brand-green transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          value={data.phone}
                          onChange={(e) => setData({ ...data, phone: e.target.value })}
                          className="w-full bg-brand-black border border-brand-light-gray rounded-md p-3 text-white focus:outline-none focus:border-brand-green transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Email Address *</label>
                        <input
                          type="email"
                          value={data.email}
                          onChange={(e) => setData({ ...data, email: e.target.value })}
                          className="w-full bg-brand-black border border-brand-light-gray rounded-md p-3 text-white focus:outline-none focus:border-brand-green transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <p className="text-xs text-brand-orange mt-1">Please provide at least a phone number or email address.</p>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Project Address (Optional)</label>
                      <input
                        type="text"
                        value={data.address}
                        onChange={(e) => setData({ ...data, address: e.target.value })}
                        className="w-full bg-brand-black border border-brand-light-gray rounded-md p-3 text-white focus:outline-none focus:border-brand-green transition-colors"
                        placeholder="1234 Main St, City, State"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Success */}
              {step === 5 && (
                <div className="flex flex-col items-center justify-center h-full text-center py-10">
                  <div className="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center mb-6">
                    <Check className="w-10 h-10 text-brand-green" />
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-4">Request Submitted!</h4>
                  <p className="text-gray-400 max-w-md">
                    Thank you for considering Francisco Hardscape and Turf LLC. We have received your project details and will be in touch shortly to provide your free quote.
                  </p>
                  <button 
                    onClick={() => {
                      setStep(1);
                      setData({ services: [], details: "", timeline: "", name: "", email: "", phone: "", address: "" });
                    }}
                    className="mt-8 text-brand-green hover:text-white transition-colors"
                  >
                    Submit another request
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          {step < 5 && (
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-brand-gray border-t border-brand-light-gray flex justify-between">
              <button
                onClick={() => setStep(step - 1)}
                disabled={step === 1}
                className="px-6 py-3 text-gray-400 hover:text-white disabled:opacity-0 disabled:cursor-default transition-colors font-medium"
              >
                Back
              </button>
              
              <button
                onClick={() => setStep(step + 1)}
                disabled={!isStepValid()}
                className="flex items-center px-8 py-3 bg-brand-green hover:bg-brand-green-hover disabled:bg-brand-green/50 disabled:cursor-not-allowed text-white rounded-md font-bold text-base sm:text-lg transition-colors shadow-md"
              >
                {step === 4 ? "Submit Request" : "Continue"}
                {step < 4 && <ChevronRight className="ml-2 w-5 h-5" />}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}