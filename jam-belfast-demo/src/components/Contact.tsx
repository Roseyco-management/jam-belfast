"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Star, Leaf, Wheat } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Unit 23, Park Centre\nDonegall Road\nBelfast BT12 6HN",
    color: "#0099cb",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "028 9032 8103",
    href: "tel:02890328103",
    color: "#ff8097",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "info@jambelfast.com",
    href: "mailto:info@jambelfast.com",
    color: "#f4b800",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    content: "Mon - Sat: 9am - 5pm\nSunday: 1pm - 5pm",
    color: "#8BC34A",
  },
];

const certifications = [
  { icon: Leaf, label: "Fairtrade", sublabel: "Certified" },
  { icon: Star, label: "5 Star", sublabel: "Food Hygiene" },
  { icon: Wheat, label: "Gluten Free", sublabel: "Options" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-white">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100V0C240 80 480 80 720 40C960 0 1200 0 1440 40V100H0Z"
            fill="#111112"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="bg-[#111112] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
              style={{ fontFamily: "var(--font-sigmar), sans-serif" }}
            >
              Come In And Eat With Us
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We&apos;d love to hear from you. Get in touch for reservations or catering enquiries.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              const content = item.href ? (
                <a href={item.href} className="hover:underline">
                  {item.content}
                </a>
              ) : (
                item.content.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < item.content.split("\n").length - 1 && <br />}
                  </span>
                ))
              );

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group border border-white/10"
                >
                  <div
                    className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <IconComponent size={28} style={{ color: item.color }} />
                  </div>
                  <h3 className="text-white font-semibold mb-2" style={{ fontFamily: "var(--font-roboto), system-ui, sans-serif" }}>{item.title}</h3>
                  <p className="text-gray-400 text-sm">{content}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form & Map Section */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 bg-gradient-to-br from-[#0099cb] to-[#007ba8] rounded-3xl p-8"
            >
              <h3
                className="text-2xl font-bold mb-6 text-white"
                style={{ fontFamily: "var(--font-sigmar), sans-serif" }}
              >
                Send us a message
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/30 transition"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/30 transition"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/30 transition"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/30 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-white text-[#0099cb] rounded-xl font-bold hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 rounded-3xl overflow-hidden h-[400px] lg:h-auto"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2311.8970539889655!2d-5.9614!3d54.5886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486108f8c9c7d7e1%3A0x123456789!2sPark%20Centre%2C%20Donegall%20Rd%2C%20Belfast!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 flex flex-wrap justify-center gap-6"
          >
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <IconComponent size={24} className="text-[#0099cb]" />
                  <div>
                    <span className="text-white font-semibold">{cert.label}</span>
                    <span className="text-gray-500 ml-2">{cert.sublabel}</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
