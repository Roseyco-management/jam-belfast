"use client";

import { useState } from "react";
import Image from "next/image";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const [active, setActive] = useState(false);

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div className="md:col-span-1 relative">
            <a href="#home" className="block w-fit">
              <Image
                src="/images/logo.jpg"
                alt="Jam Belfast"
                width={80}
                height={80}
                className="rounded-full mb-4 hover:scale-105 transition-transform duration-300"
              />
            </a>

            <div
              className="absolute cursor-pointer"
              style={{ top: '28px', left: '72px' }}
              onClick={() => setActive(!active)}
            >
              <div
                className={`absolute -top-10 left-0 transition-all duration-300 z-10 ${
                  active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
              >
                <div className="bg-white text-gray-900 text-xs font-bold px-3 py-2 rounded-xl shadow-xl whitespace-nowrap">
                  You caught me!
                </div>
                <div className="w-3 h-3 bg-white rotate-45 absolute -bottom-1 left-4 shadow-xl"></div>
              </div>

              <div
                className="overflow-hidden transition-all duration-500 ease-out"
                style={{
                  width: active ? '35px' : '10px',
                  height: '18px',
                }}
              >
                <img
                  src="https://lh3.google.com/u/0/d/1CIpAqjq3ZYLtfPnTwGsBbZOP8QG8y3Ws=w1867-h925-iv1"
                  alt=""
                  className="h-[18px] w-auto max-w-none transition-all duration-500"
                  style={{
                    marginLeft: active ? '0px' : '-25px',
                    opacity: active ? 1 : 0.06,
                  }}
                />
              </div>
            </div>

            <p className="text-gray-400 text-sm">
              Quality cafe, restaurant and corporate catering in Belfast. Fresh food prepared on premises daily.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-white transition">Our Menus</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Menus */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Menus</h4>
            <ul className="space-y-2">
              <li>
                <a href="/pdfs/corporate-menu.pdf" target="_blank" className="text-gray-400 hover:text-white transition">
                  Corporate Menu
                </a>
              </li>
              <li>
                <a href="/pdfs/restaurant-menu.pdf" target="_blank" className="text-gray-400 hover:text-white transition">
                  Restaurant Menu
                </a>
              </li>
              <li>
                <a href="/pdfs/jam-tent.pdf" target="_blank" className="text-gray-400 hover:text-white transition">
                  Drinks & Desserts
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Unit 23, Park Centre</li>
              <li>Donegall Road, Belfast BT12 6HN</li>
              <li>
                <a href="tel:02890328103" className="hover:text-white transition">028 9032 8103</a>
              </li>
              <li>
                <a href="mailto:info@jambelfast.com" className="hover:text-white transition">info@jambelfast.com</a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-[#0099cb] transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0099cb] transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0099cb] transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Jam Belfast. Spires Corporate Catering Limited trading as JAM. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Mon-Sat: 9am-5pm | Sun: 1pm-5pm
          </p>
        </div>
      </div>
    </footer>
  );
}
