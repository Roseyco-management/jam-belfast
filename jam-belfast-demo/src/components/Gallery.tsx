"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

type Category = "all" | "brekkie" | "hot-food" | "desserts" | "drinks" | "catering";

interface GalleryImage {
  src: string;
  name: string;
  width: number;
  height: number;
  accent: string;
  category: Category[];
}

const galleryImages: GalleryImage[] = [
  // ── Brekkie (corporate-menu.pdf) ──
  { src: "/gallery/toasted-pancakes-with-bacon.jpg", name: "Toasted Pancakes & Bacon", width: 461,  height: 575,  accent: "#0099cb", category: ["brekkie"] },
  { src: "/gallery/smashed-avocado.jpg",             name: "Smashed Avocado",          width: 1125, height: 660,  accent: "#0099cb", category: ["brekkie"] },
  { src: "/gallery/ulster-fry.jpg",                  name: "Ulster Fry",               width: 1440, height: 1171, accent: "#0099cb", category: ["brekkie"] },
  { src: "/gallery/scone-platter-and-latte.jpg",     name: "Scone Platter & Latte",    width: 1102, height: 681,  accent: "#0099cb", category: ["brekkie"] },

  // ── Hot Food (corporate-menu.pdf) ──
  { src: "/gallery/grilled-beef-burger.jpg",         name: "Grilled Beef Burger",       width: 1080, height: 1351, accent: "#8BC34A", category: ["hot-food"] },
  { src: "/gallery/chicken-curry.jpg",               name: "Chicken Curry",             width: 1340, height: 1371, accent: "#8BC34A", category: ["hot-food"] },
  { src: "/gallery/fresh-cod.jpg",                   name: "Fresh Cod & Chips",         width: 950,  height: 1186, accent: "#8BC34A", category: ["hot-food"] },
  { src: "/gallery/lasagne.jpg",                     name: "Lasagne",                   width: 1080, height: 1351, accent: "#8BC34A", category: ["hot-food", "catering"] },
  { src: "/gallery/southern-fried-goujons.jpg",      name: "Southern Fried Goujons",    width: 1408, height: 1262, accent: "#8BC34A", category: ["hot-food", "catering"] },
  { src: "/gallery/roast-beef.jpg",                  name: "Roast Beef Dinner",         width: 1259, height: 1290, accent: "#8BC34A", category: ["hot-food"] },

  // ── Desserts (restaurant-menu-1.pdf) ──
  { src: "/gallery/cake-of-the-day.jpg",             name: "Cake of the Day",           width: 1078, height: 1348, accent: "#ff8097", category: ["desserts"] },
  { src: "/gallery/waffles-strawberries-and-cream.jpg", name: "Waffles & Strawberries", width: 1078, height: 1349, accent: "#ff8097", category: ["desserts"] },

  // ── Drinks (restaurant-menu-1.pdf) ──
  { src: "/gallery/biscoff-milkshake-and-latte.jpg", name: "Biscoff Milkshake & Latte", width: 665,  height: 832,  accent: "#f4b800", category: ["drinks"] },
  { src: "/gallery/iced-latte-and-milkshake.jpg",    name: "Iced Latte & Milkshake",    width: 798,  height: 996,  accent: "#f4b800", category: ["drinks"] },
  { src: "/gallery/hot-chocolate.jpg",               name: "Hot Chocolate",             width: 1125, height: 1370, accent: "#f4b800", category: ["drinks"] },

  // ── Catering (jam-tent.pdf) ──
  { src: "/gallery/gourmet-sandwich-platter.jpg",    name: "Gourmet Sandwich Platter",  width: 1081, height: 1352, accent: "#E91E63", category: ["catering"] },
  { src: "/gallery/chicken-and-leek-pie.jpg",        name: "Chicken & Leek Pie",        width: 1404, height: 1440, accent: "#E91E63", category: ["catering"] },
];

const categories: { id: Category; label: string; color: string }[] = [
  { id: "all",      label: "All",      color: "#111112" },
  { id: "brekkie",  label: "Brekkie",  color: "#0099cb" },
  { id: "hot-food", label: "Hot Food", color: "#8BC34A" },
  { id: "desserts", label: "Desserts", color: "#ff8097" },
  { id: "drinks",   label: "Drinks",   color: "#f4b800" },
  { id: "catering", label: "Catering", color: "#E91E63" },
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

        {/* Gallery — CSS columns masonry */}
        <div className="columns-2 md:columns-3 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl mb-3 md:mb-4 break-inside-avoid"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.name}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: `linear-gradient(to top, ${image.accent}CC 0%, transparent 50%)`
                  }}
                />

                {/* Bottom accent bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ backgroundColor: image.accent }}
                />

                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    <ZoomIn size={24} style={{ color: image.accent }} />
                  </div>
                </div>

                {/* Name badge — bottom left on hover */}
                <div
                  className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span
                    className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: image.accent }}
                  >
                    {image.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

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
