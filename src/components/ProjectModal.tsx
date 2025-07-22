'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  images: Array<{
    url: string;
    caption: string;
  }>;
  liveUrl?: string;
  githubUrl?: string;
  isLaunched: boolean;
}

interface ProjectModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-pointer"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-background rounded-lg shadow-2xl max-w-4xl max-h-[90vh] w-full mx-4 overflow-hidden cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="text-2xl font-medium">{project.title}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-primary font-normal">{project.category}</span>
                  <span className={`text-xs px-2 py-1 rounded-full font-normal ${
                    project.isLaunched 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                  }`}>
                    {project.isLaunched ? '런칭됨' : '개발중'}
                  </span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={onClose}
                className="p-2 hover:bg-accent rounded-lg transition-colors duration-200 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="p-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="relative aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                      <ImageWithFallback
                        src={project.images[currentImageIndex]?.url || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'}
                        alt={project.images[currentImageIndex]?.caption || project.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {project.images.length > 1 && (
                        <>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200 cursor-pointer"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200 cursor-pointer"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </motion.button>
                        </>
                      )}
                    </div>

                    {project.images[currentImageIndex]?.caption && (
                      <p className="text-sm text-muted-foreground text-center font-normal">
                        {project.images[currentImageIndex].caption}
                      </p>
                    )}

                    {project.images.length > 1 && (
                      <div className="flex justify-center gap-2 mt-4">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors duration-200 cursor-pointer ${
                              index === currentImageIndex ? 'bg-primary' : 'bg-muted'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg mb-3 font-medium">프로젝트 소개</h3>
                      <p className="text-muted-foreground leading-relaxed font-normal">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg mb-3 font-medium">사용 도구</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-normal"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      {project.liveUrl && (
                        <motion.a
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 cursor-pointer font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Site
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors duration-200 cursor-pointer font-medium"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}