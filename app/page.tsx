'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  MapPin, 
  CheckCircle2, 
  Phone, 
  ShieldCheck, 
  Trees, 
  Waves, 
  CarFront, 
  Building2,
  BellOff,
  Fingerprint
} from 'lucide-react';

export default function RealEstateLandingPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <main className="min-h-screen font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Building2 className="w-8 h-8 text-amber-500" />
          <span className="text-xl font-bold tracking-tight text-white uppercase letter-spacing-wide">
            Aura <span className="font-light">Residences</span>
          </span>
        </div>
        <a 
          href="#lead-form" 
          className="hidden sm:inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-colors border border-white/30 rounded hover:bg-white hover:text-slate-900"
        >
          Enquire Now
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 pb-12 px-6 md:px-12 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
            alt="Luxury Real Estate Exterior"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          {/* Elegant Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Pre-Launch in Gurugram
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              The Pinnacle of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                Luxury Living.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
              Experience ultra-premium 3 & 4 BHK residences with world-class amenities. 
              Secure your legacy at India's most coveted address.
            </p>

            <ul className="grid grid-cols-2 gap-4 mt-4">
              {[
                "Spacious Layouts", 
                "Private Elevators", 
                "Unobstructed Views", 
                "Minimized Distractions"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Lead Capture Form - Crucial for FB/IG traffic */}
          <motion.div 
            id="lead-form"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto"
          >
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600" />
              
              {formStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                  <p className="text-slate-600">
                    Your brochure has been sent to your email. Our property expert will contact you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                      Download Brochure
                    </h2>
                    <p className="text-sm text-slate-500">
                      Register to get floor plans, pricing, and exclusive early-bird offers.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="sr-only">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                        placeholder="Full Name *"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="sr-only">Phone Number</label>
                      <div className="flex">
                        <span className="inline-flex items-center px-4 border border-r-0 border-slate-200 bg-slate-100 text-slate-500 sm:text-sm rounded-l-lg">
                          +91
                        </span>
                        <input 
                          type="tel" 
                          id="phone"
                          required
                          pattern="[0-9]{10}"
                          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-r-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                          placeholder="Mobile Number *"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="sr-only">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        required
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                        placeholder="Email Address *"
                      />
                    </div>

                    <div>
                      <label htmlFor="configuration" className="sr-only">Interested In</label>
                      <select 
                        id="configuration"
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all appearance-none"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>Configuration Interested In *</option>
                        <option value="3bhk">3 BHK Premium</option>
                        <option value="4bhk">4 BHK Luxury</option>
                        <option value="penthouse">Penthouse</option>
                      </select>
                    </div>

                    <button 
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                    >
                      {formStatus === 'submitting' ? (
                        <span className="animate-pulse">Processing...</span>
                      ) : (
                        <>
                          Get Instant Access
                          <span className="transition-transform group-hover:translate-x-1">→</span>
                        </>
                      )}
                    </button>
                    
                    <p className="text-xs text-center text-slate-400 mt-4">
                      By submitting, you agree to our Terms & Privacy Policy. 
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights / Amenities */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Curated for the Elite
            </h2>
            <p className="text-slate-600 text-lg">
              Indulge in 40+ bespoke amenities spread across 100,000 sq.ft. of pristine clubhouse and landscaped greens.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Waves, title: "Infinity Pool", desc: "Temperature controlled" },
              { icon: Trees, title: "Lush Greens", desc: "80% Open spaces" },
              { icon: ShieldCheck, title: "5-Tier Security", desc: "24/7 AI surveillance" },
              { icon: BellOff, title: "Zero Distractions", desc: "Acoustic-treated soundproof interiors" },
              { icon: Fingerprint, title: "Smart Access", desc: "Biometric & app-based entry" },
              { icon: CarFront, title: "EV Parking", desc: "Dedicated spots per unit" }
            ].map((amenity, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mb-4">
                  <amenity.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{amenity.title}</h3>
                <p className="text-sm text-slate-500">{amenity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Image Grid */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                A Glimpse of Perfection
              </h2>
              <p className="text-slate-600 max-w-xl text-lg">
                Where architectural brilliance meets unparalleled comfort.
              </p>
            </div>
            <a href="#lead-form" className="inline-flex text-amber-600 font-semibold hover:text-amber-700 transition-colors items-center gap-1">
              Download Full Gallery <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-[800px] md:h-[600px]">
            <div className="md:col-span-2 relative rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                alt="Living Room"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                <span className="text-white font-medium text-lg">Double-Height Living Spaces</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="relative flex-1 rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2080&auto=format&fit=crop"
                  alt="Master Bedroom"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6">
                  <span className="text-white font-medium">Master Suites</span>
                </div>
              </div>
              <div className="relative flex-1 rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop"
                  alt="Clubhouse"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6">
                  <span className="text-white font-medium">Grand Clubhouse</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlights - Compact */}
      <section className="py-12 px-6 md:px-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Prime Location: Sector 59, Gurugram</h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl">
              Seamless connectivity to global corporate hubs, international schools, and premium healthcare.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 md:gap-8">
             {[
                { time: "5 Mins", location: "Cyber City 2.0" },
                { time: "15 Mins", location: "IGI Airport" },
                { time: "2 Mins", location: "Rapid Metro" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-12 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded text-center">
                    <span className="text-amber-400 font-bold block leading-tight text-sm">{item.time.split(' ')[0]}</span>
                  </div>
                  <span className="text-sm font-medium text-slate-200">{item.location}</span>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Footer / Trust & Compliance */}
      <footer className="bg-slate-950 py-12 px-6 md:px-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Building2 className="w-6 h-6 text-amber-600" />
              <span className="text-lg font-bold tracking-tight text-white uppercase letter-spacing-wide">
                Aura <span className="font-light">Residences</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 max-w-md">
              Disclaimer: The imagery used on the website is indicative of style only. Photographs of interiors, surroundings or location are digitally enhanced.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2 text-slate-400 text-sm">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-4 h-4" />
              <span>Sales: +91 98765 43210</span>
            </div>
            <p className="font-mono text-xs bg-slate-900 px-3 py-1 rounded border border-slate-800">RERA No: RC/REP/HARERA/GGM/2024/000</p>
            <p className="mt-4 text-xs text-slate-600">© {new Date().getFullYear()} Aura Residences. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
