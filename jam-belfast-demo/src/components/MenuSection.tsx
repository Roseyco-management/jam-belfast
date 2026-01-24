"use client";

import { motion } from "framer-motion";
import { Briefcase, UtensilsCrossed, Coffee, Eye } from "lucide-react";

const menuItems = [
  {
    title: "Corporate Menu",
    description: "Perfect for meetings, events & office catering. Breakfast platters, lunch buffets, and more.",
    color: "#0099cb",
    icon: Briefcase,
    pdf: "/pdfs/corporate-menu.pdf",
  },
  {
    title: "Restaurant Menu",
    description: "Fresh, delicious meals prepared daily. From hearty breakfasts to satisfying lunches.",
    color: "#ff8097",
    icon: UtensilsCrossed,
    pdf: "/pdfs/restaurant-menu.pdf",
  },
  {
    title: "Drinks & Desserts",
    description: "Hot drinks, cold beverages, and indulgent desserts to complete your meal.",
    color: "#f4b800",
    icon: Coffee,
    pdf: "/pdfs/jam-tent.pdf",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "var(--font-sigmar), sans-serif" }}
          >
            Our Menus
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From corporate catering to casual dining, we have something for everyone
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
              >
                <div
                  className="relative h-64 flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <div
                    className="w-32 h-32 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundColor: `${item.color}25` }}
                  >
                    <IconComponent
                      size={64}
                      style={{ color: item.color }}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: item.color, fontFamily: "var(--font-sigmar), sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  {item.pdf && (
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                      style={{ backgroundColor: item.color }}
                    >
                      <Eye size={18} />
                      View Menu
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
