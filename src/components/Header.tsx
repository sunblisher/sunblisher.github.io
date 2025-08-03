"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/10 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer"
            onClick={() => scrollToSection("hero")}
          ></motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "About", id: "hero" },
              { name: "Skills", id: "skills" },
              { name: "Projects", id: "projects" },
              { name: "History", id: "history" },
            ].map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-white transition-all duration-200 cursor-pointer font-medium px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm"
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
