"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Award } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "테크 스타트업 A",
    position: "Senior UI/UX Designer",
    period: "2022.03 - 현재",
    location: "서울, 대한민국",
    description:
      "사용자 중심의 디자인 시스템 구축 및 제품 전략 수립을 담당하고 있습니다.",
    achievements: [
      "디자인 시스템 구축으로 개발 효율성 40% 향상",
      "사용자 만족도 조사에서 4.8/5.0 달성",
      "신규 서비스 런칭으로 MAU 200% 증가",
    ],
  },
  {
    id: 2,
    company: "디지털 에이전시 B",
    position: "Web Publisher",
    period: "2020.09 - 2022.02",
    location: "서울, 대한민국",
    description:
      "다양한 클라이언트의 웹사이트 퍼블리싱 및 프론트엔드 개발을 담당했습니다.",
    achievements: [
      "20개 이상의 웹사이트 퍼블리싱 완료",
      "모바일 최적화로 페이지 로딩 속도 50% 개선",
      "크로스 브라우저 호환성 100% 달성",
    ],
  },
  {
    id: 3,
    company: "프리랜서",
    position: "UI/UX Designer & Developer",
    period: "2019.01 - 2020.08",
    location: "원격 근무",
    description:
      "소규모 비즈니스와 스타트업을 위한 브랜딩 및 웹 개발 서비스를 제공했습니다.",
    achievements: [
      "15개의 브랜드 아이덴티티 디자인 완료",
      "고객 만족도 평균 4.9/5.0 유지",
      "리피트 고객 비율 80% 달성",
    ],
  },
];

const certifications = [
  {
    name: "Google UX Design Certificate",
    issuer: "Google",
    year: "2023",
  },
  {
    name: "Adobe Certified Expert (ACE)",
    issuer: "Adobe",
    year: "2022",
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    year: "2021",
  },
];

export function HistorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="history" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Career History</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            지속적인 성장과 도전을 통해 쌓아온 경험과 성과를 소개합니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl mb-8">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="relative pl-8 pb-8 border-l-2 border-primary/20 last:border-l-0 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full transform -translate-x-2"></div>

                  <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg">{exp.position}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-primary mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>
                        {exp.company} • {exp.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h5 className="text-sm">주요 성과</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="sticky top-20 self-start">
            <div>
              <h3 className="text-xl mb-8">Certifications</h3>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="bg-background rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Award className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">{cert.name}</h4>
                          <p className="text-xs text-muted-foreground">
                            {cert.issuer} • {cert.year}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
