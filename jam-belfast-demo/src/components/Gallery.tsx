"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

type Category = "all" | "breakfast" | "lunch" | "desserts" | "drinks" | "cafe";

interface GalleryImage {
  src: string;
  span: string;
  accent: string;
  category: Category[];
}

const galleryImages: GalleryImage[] = [
  { src: "/gallery/01-243679795.jpg", span: "col-span-2 row-span-2", accent: "#0099cb", category: ["cafe"] },
  { src: "/gallery/02-273027674.jpg", span: "col-span-1 row-span-1", accent: "#ff8097", category: ["breakfast"] },
  { src: "/gallery/03-273366920.jpg", span: "col-span-1 row-span-1", accent: "#f4b800", category: ["lunch"] },
  { src: "/gallery/04-273220010.jpg", span: "col-span-1 row-span-2", accent: "#8BC34A", category: ["desserts"] },
  { src: "/gallery/05-273764476.jpg", span: "col-span-1 row-span-1", accent: "#0099cb", category: ["breakfast"] },
  { src: "/gallery/06-274985766.jpg", span: "col-span-1 row-span-1", accent: "#ff8097", category: ["lunch"] },
  { src: "/gallery/07-278877838.jpg", span: "col-span-2 row-span-1", accent: "#f4b800", category: ["drinks"] },
  { src: "/gallery/08-279222123.jpg", span: "col-span-1 row-span-1", accent: "#8BC34A", category: ["desserts"] },
  { src: "/gallery/09-279969824.jpg", span: "col-span-1 row-span-2", accent: "#0099cb", category: ["breakfast"] },
  { src: "/gallery/10-281413911.jpg", span: "col-span-1 row-span-1", accent: "#ff8097", category: ["lunch"] },
  { src: "/gallery/11-281490340.jpg", span: "col-span-2 row-span-1", accent: "#f4b800", category: ["cafe"] },
  { src: "/gallery/12-281329978.jpg", span: "col-span-1 row-span-1", accent: "#8BC34A", category: ["desserts"] },
  { src: "/gallery/13-281463290.jpg", span: "col-span-1 row-span-1", accent: "#0099cb", category: ["drinks"] },
  { src: "/gallery/14-283714051.jpg", span: "col-span-1 row-span-1", accent: "#ff8097", category: ["breakfast"] },
  { src: "/gallery/15-283553853.jpg", span: "col-span-2 row-span-2", accent: "#f4b800", category: ["lunch"] },
  { src: "/gallery/16-283667449.jpg", span: "col-span-1 row-span-1", accent: "#8BC34A", category: ["desserts"] },
  { src: "/gallery/17-281915507.jpg", span: "col-span-1 row-span-1", accent: "#0099cb", category: ["drinks"] },
];

const categories: { id: Category; label: string; color: string }[] = [
  { id: "all", label: "All", color: "#111112" },
  { id: "breakfast", label: "Breakfast", color: "#0099cb" },
  { id: "lunch", label: "Lunch", color: "#8BC34A" },
  { id: "desserts", label: "Desserts", color: "#ff8097" },
  { id: "drinks", label: "Drinks", color: "#f4b800" },
  { id: "cafe", label: "Cafe", color: "#0099cb" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category.includes(activeCategory));

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-[#0099cb]/10 text-[#0099cb] rounded-full text-sm font-semibold mb-4"
          >
            Fresh & Delicious
          </motion.span>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "var(--font-sigmar), sans-serif" }}
          >
            Our Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A taste of what we have to offer - fresh, delicious food made with love
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
              }`}
              style={{
                backgroundColor: activeCategory === cat.id ? cat.color : undefined,
              }}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <span className="ml-2 text-white/80 text-sm">
                  ({filteredImages.length})
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[120px] md:auto-rows-[180px] gap-3 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{
                  scale: 1.02,
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl ${
                  activeCategory === "all" ? image.span : "col-span-1 row-span-1"
                }`}
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${image.accent}90 0%, transparent 50%, ${image.accent}60 100%)`
                  }}
                />

                {/* Bottom accent bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ backgroundColor: image.accent }}
                />

                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                  >
                    <ZoomIn size={24} style={{ color: image.accent }} />
                  </motion.div>
                </div>

                {/* Category badge */}
                <div
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: image.accent }}
                >
                  {image.category[0].charAt(0).toUpperCase() + image.category[0].slice(1)}
                </div>

                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderTopColor: image.accent }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg">No images found in this category.</p>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute top-6 right-6 text-white p-3 hover:bg-white/20 rounded-full transition"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full"
            >
              <Image
                src={selectedImage}
                alt="Gallery image"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
