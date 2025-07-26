"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ProjectModal } from "./ProjectModal";
import type { ProjectData } from "./ProjectModal";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects: ProjectData[] = [
  {
    id: "1",
    title: "E-Commerce 리디자인",
    category: "디자인 작업물",
    description:
      "사용자 경험을 중심으로 한 이커머스 플랫폼의 전면 리디자인 프로젝트입니다. 기존의 복잡한 구조를 단순화하고, 직관적인 네비게이션과 모던한 디자인으로 전환율을 35% 향상시켰습니다.",
    tools: ["Figma", "Adobe XD", "Photoshop", "Principle"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        caption: "메인 페이지 디자인",
      },
      {
        url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        caption: "제품 상세 페이지",
      },
      {
        url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        caption: "모바일 반응형 디자인",
      },
    ],
    liveUrl: "https://example.com",
    isLaunched: true,
  },
  {
    id: "2",
    title: "기업 웹사이트 구축",
    category: "퍼블리싱 작업물",
    description:
      "React와 TypeScript를 활용한 기업 공식 웹사이트 개발 프로젝트입니다. 성능 최적화와 SEO를 고려하여 개발했으며, 모든 디바이스에서 완벽한 사용자 경험을 제공합니다.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
        caption: "메인 페이지 구현",
      },
      {
        url: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=600&fit=crop",
        caption: "서비스 소개 섹션",
      },
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    isLaunched: true,
  },
  {
    id: "3",
    title: "모바일 앱 UI 디자인",
    category: "디자인 작업물",
    description:
      "헬스케어 분야의 모바일 애플리케이션 UI/UX 디자인 프로젝트입니다. 사용자의 건강 데이터를 직관적으로 시각화하고, 간편한 상호작용을 통해 일상 건강 관리를 도와줍니다.",
    tools: ["Figma", "Sketch", "InVision", "Zeplin"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        caption: "앱 메인 화면 디자인",
      },
      {
        url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
        caption: "데이터 시각화 화면",
      },
      {
        url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop",
        caption: "사용자 프로필 페이지",
      },
    ],
    isLaunched: false,
  },
  {
    id: "4",
    title: "SaaS 대시보드 개발",
    category: "퍼블리싱 작업물",
    description:
      "데이터 분석을 위한 SaaS 플랫폼의 관리자 대시보드 개발 프로젝트입니다. 복잡한 데이터를 직관적인 차트와 그래프로 시각화하여 사용자가 쉽게 인사이트를 얻을 수 있도록 구현했습니다.",
    tools: ["Vue.js", "Chart.js", "SCSS", "Webpack"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        caption: "메인 대시보드 화면",
      },
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        caption: "데이터 분석 페이지",
      },
    ],
    isLaunched: false,
  },
];

const categories = ["전체", "디자인 작업물", "퍼블리싱 작업물"];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    selectedCategory === "전체"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const openProjectModal = (project: ProjectData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="py-20 min-h-screen" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4 font-medium">Portfolio</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-normal">
              다양한 프로젝트를 통해 쌓아온 경험과 노하우를 확인해보세요.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="flex gap-2 p-1 bg-muted rounded-lg">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-md transition-all duration-200 cursor-pointer font-medium ${
                    selectedCategory === category
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <div className="bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={
                        project.images[0]?.url ||
                        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                      }
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-primary font-normal">
                        {project.category}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-normal ${
                          project.isLaunched
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {project.isLaunched ? "런칭됨" : "개발중"}
                      </span>
                    </div>
                    <h3 className="text-lg mb-2 group-hover:text-primary transition-colors duration-200 font-medium">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 font-normal">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-4">
                      {project.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs font-normal"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="px-2 py-1 text-muted-foreground text-xs font-normal">
                          +{project.tools.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </>
  );
}
