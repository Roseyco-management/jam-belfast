"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Our Menus" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Main nav */}
      <nav
        className={`max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/images/logo.jpg"
            alt="Jam Belfast"
            width={scrolled ? 50 : 70}
            height={scrolled ? 50 : 70}
            className="rounded-full transition-all duration-300 shadow-md"
          />
          <div className="hidden sm:block">
            <h1
              className={`font-bold transition-all duration-300 ${
                scrolled ? "text-2xl" : "text-3xl"
              }`}
              style={{ fontFamily: "var(--font-sigmar), sans-serif" }}
            >
              <span className="text-[#0099cb]">J</span>
              <span className="text-[#ff8097]">A</span>
              <span className="text-[#f4b800]">M</span>
              <span className={scrolled ? "text-gray-800" : "text-white drop-shadow-md"}> Belfast</span>
            </h1>
            <p
              className={`text-xs tracking-widest uppercase transition-all duration-300 ${
                scrolled ? "text-gray-500" : "text-white/80 drop-shadow-sm"
              }`}
            >
              Good Tasty Wholesome Grub
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-medium transition-all duration-300 relative group ${
                  scrolled
                    ? "text-gray-700 hover:text-[#0099cb]"
                    : "text-white hover:text-[#2AC4EA] drop-shadow-sm"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0099cb] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <a
          href="tel:02890328103"
          className={`hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
            scrolled
              ? "bg-[#0099cb] text-white hover:bg-[#007ba8]"
              : "bg-white text-[#0099cb] hover:bg-gray-100"
          }`}
        >
          <Phone size={16} />
          Call Us
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 transition-colors duration-300 ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t shadow-lg"
          >
            <ul className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 hover:text-[#0099cb] font-medium py-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t">
                <a href="tel:02890328103" className="flex items-center gap-2 text-[#0099cb] py-2">
                  <Phone size={18} />
                  028 9032 8103
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
