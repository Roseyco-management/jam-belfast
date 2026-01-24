"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_image.png"
          alt="Jam Belfast Storefront"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl mb-6 text-white drop-shadow-lg"
          style={{ fontFamily: "var(--font-sigmar), sans-serif" }}
        >
          Welcome To Jam Belfast
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md"
        >
          Quality Cafe, Restaurant & Corporate Catering in the heart of Belfast
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#menu"
            className="px-8 py-4 bg-[#0099cb] text-white rounded-full font-semibold hover:bg-[#007ba8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View Our Menus
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#0099cb] transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0099cb] drop-shadow-md">5★</div>
            <div className="text-sm text-white/80">Food Hygiene</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#ff8097] drop-shadow-md">Fresh</div>
            <div className="text-sm text-white/80">Daily</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#8BC34A] drop-shadow-md">Local</div>
            <div className="text-sm text-white/80">Suppliers</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
