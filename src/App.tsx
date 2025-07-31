"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { HistorySection } from "./components/HistorySection";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingSpinner key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Header */}
            <header className="w-full">
              <div className="max-w-7xl mx-auto px-8">
                <Header />
              </div>
            </header>
            {/* Hero Section */}
            <section className="w-full">
              <HeroSection />
            </section>
            {/* Skills Section */}
            <section className="w-full bg-black/20">
              <div className="max-w-7xl mx-auto px-8">
                <SkillsSection />
              </div>
            </section>
            {/* Projects Section */}
            <section className="w-full">
              <div className="max-w-7xl mx-auto px-8">
                <ProjectsSection />
              </div>
            </section>
            {/* History Section */}
            <section className="w-full bg-black/20">
              <div className="max-w-7xl mx-auto px-8">
                <HistorySection />
              </div>
            </section>
            {/* Footer */}
            <footer className="w-full bg-black/40 backdrop-blur-md text-white py-12 border-t border-white/10">
              <div className="max-w-7xl mx-auto px-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-medium">
                    함께 프로젝트를 시작해보세요
                  </h3>
                  <p className="text-white/80 max-w-md mx-auto font-normal">
                    새로운 아이디어를 현실로 만들어가는 여정에 함께하고
                    싶습니다.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      href="mailto:contact@example.com"
                      className="px-6 py-3 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-xl hover:bg-white/30 transition-all duration-200 cursor-pointer font-medium shadow-lg"
                    >
                      이메일 문의
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      href="tel:010-1234-5678"
                      className="px-6 py-3 bg-transparent text-white border border-white/50 rounded-xl hover:bg-white/10 backdrop-blur-md transition-all duration-200 cursor-pointer font-medium"
                    >
                      전화 문의
                    </motion.a>
                  </div>
                </motion.div>
                <div className="mt-8 pt-8 border-t border-white/20 text-white/60 text-sm">
                  <p className="font-normal">
                    &copy; 2025 UI/UX Designer Portfolio. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
