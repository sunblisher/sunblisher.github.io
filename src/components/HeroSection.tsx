"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import imgBg from "../assets/img_bg.png";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <img src={imgBg} alt="배경" className="w-full h-full object-cover" />
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="w-full px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-white drop-shadow-2xl"
            style={{ fontFamily: "'Newyork', serif" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="leading-tight">
              <div className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight">
                Sunrise
              </div>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-lg"
          >
            사용자 경험을 중시하는 디자이너로서 감각적인 디자인과
            <br className="hidden md:block" />
            완벽한 웹 퍼블리싱을 통해 브랜드 가치를 높입니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={scrollToProjects}
              className="px-8 py-3 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-xl hover:bg-white/30 transition-all duration-300 cursor-pointer font-medium shadow-2xl hover:shadow-white/20"
            >
              작업물 보기
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="px-8 py-3 bg-transparent text-white border border-white/50 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer font-medium backdrop-blur-md shadow-2xl hover:shadow-white/20"
            >
              이력서 다운로드
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToProjects}
      >
        <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl">
          <ChevronDown className="w-6 h-6 text-white drop-shadow-lg" />
        </div>
      </motion.div>
    </section>
  );
}
