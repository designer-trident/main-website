"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [service, setService] = useState("Brand Identity");
  const services = ["Brand Identity", "Apparel Design", "E-commerce Campaign", "Product Photography"];
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    brief: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Web3Forms integration
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // Replace with real key
          service: service,
          ...formData,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
      } else {
        console.error("Submission failed", result);
        // Handle error gracefully if needed
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black min-h-[calc(100vh-5rem)] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 py-12">
        
        {/* Left Side: CTA */}
        <div className="flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-heading font-bold text-white uppercase tracking-tighter leading-[1.1] mb-6"
          >
            Let&apos;s build<br />your next<br />commercial<br />campaign.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-400 text-lg md:text-xl max-w-md font-light"
          >
            Fill out the brief to start the conversation. I usually respond within 24-48 hours.
          </motion.p>
        </div>

        {/* Right Side: Form */}
        <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8 relative overflow-hidden backdrop-blur-xl">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div>
                  <label className="block text-sm uppercase tracking-widest text-neutral-500 mb-4">Service Needed</label>
                  <div className="flex flex-wrap gap-3">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setService(s)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                          service === s 
                            ? "bg-white text-black border-white" 
                            : "bg-transparent text-neutral-400 border-white/20 hover:border-white/50"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm uppercase tracking-widest text-neutral-500 mb-2">Name</label>
                    <input 
                      id="name"
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm uppercase tracking-widest text-neutral-500 mb-2">Work Email</label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm uppercase tracking-widest text-neutral-500 mb-2">Budget Tier</label>
                  <select 
                    id="budget"
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-neutral-900 text-neutral-500">Select budget range...</option>
                    <option value="<5k" className="bg-neutral-900">&lt; $5,000</option>
                    <option value="5k-10k" className="bg-neutral-900">$5,000 - $10,000</option>
                    <option value="10k-25k" className="bg-neutral-900">$10,000 - $25,000</option>
                    <option value="25k+" className="bg-neutral-900">$25,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="brief" className="block text-sm uppercase tracking-widest text-neutral-500 mb-2">Project Brief</label>
                  <textarea 
                    id="brief"
                    required
                    rows={4}
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    className="w-full bg-transparent border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-white transition-colors resize-none"
                    placeholder="Tell me about your vision..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-white uppercase mb-4">Transmission Sent</h2>
                <p className="text-neutral-400">
                  Thank you for your inquiry. I will review your brief and get back to you shortly.
                </p>
                <button 
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({ name: "", email: "", budget: "", brief: "" });
                  }}
                  className="mt-8 px-6 py-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-colors"
                >
                  Send Another
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
      </div>
    </div>
  );
}
