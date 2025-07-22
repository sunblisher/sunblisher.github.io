'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { HistorySection } from './components/HistorySection';

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
    <div className="min-h-screen bg-background">
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
            <Header />
            <main>
              <HeroSection />
              <SkillsSection />
              <ProjectsSection />
              <HistorySection />
            </main>
            
            <footer className="bg-primary text-primary-foreground py-12">
              <div className="container mx-auto px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-medium">함께 프로젝트를 시작해보세요</h3>
                  <p className="text-primary-foreground/80 max-w-md mx-auto font-normal">
                    새로운 아이디어를 현실로 만들어가는 여정에 함께하고 싶습니다.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      href="mailto:contact@example.com"
                      className="px-6 py-3 bg-background text-foreground rounded-lg hover:bg-background/90 transition-colors duration-200 cursor-pointer font-medium"
                    >
                      이메일 문의
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      href="tel:010-1234-5678"
                      className="px-6 py-3 border border-primary-foreground/20 rounded-lg hover:bg-primary-foreground/10 transition-colors duration-200 cursor-pointer font-medium"
                    >
                      전화 문의
                    </motion.a>
                  </div>
                </motion.div>
                <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-primary-foreground/60 text-sm">
                  <p className="font-normal">&copy; 2025 UI/UX Designer Portfolio. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}