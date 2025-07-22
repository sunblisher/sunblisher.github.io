'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { 
    name: 'Figma', 
    category: 'Design',
    description: '프로토타이핑부터 디자인 시스템 구축까지, 모든 UI/UX 작업을 수행할 수 있습니다. 컴포넌트 기반 디자인과 Auto Layout을 활용한 반응형 디자인이 특기입니다.'
  },
  { 
    name: 'Adobe XD', 
    category: 'Design',
    description: '인터랙티브 프로토타입 제작과 사용자 테스트를 위한 와이어프레임 설계를 전문으로 합니다. Adobe Creative Suite와의 연동을 통한 효율적인 워크플로우를 구축할 수 있습니다.'
  },
  { 
    name: 'Photoshop', 
    category: 'Design',
    description: '이미지 편집, 웹 디자인, 목업 제작 등 비주얼 디자인 전반을 다룹니다. 브랜드 아이덴티티에 맞는 시각적 요소를 효과적으로 표현할 수 있습니다.'
  },
  { 
    name: 'Illustrator', 
    category: 'Design',
    description: '아이콘, 로고, 일러스트레이션 제작을 통해 브랜드의 개성을 담은 그래픽 요소를 만듭니다. 벡터 기반의 확장 가능한 디자인 에셋 제작이 가능합니다.'
  },
  { 
    name: 'HTML/CSS', 
    category: 'Development',
    description: '시맨틱한 마크업과 모던 CSS(Grid, Flexbox)를 활용하여 접근성과 성능을 고려한 웹 구조를 설계합니다. 크로스 브라우저 호환성을 보장하는 코드 작성이 가능합니다.'
  },
  { 
    name: 'JavaScript', 
    category: 'Development',
    description: 'ES6+ 문법을 활용한 인터랙티브한 웹 요소 구현과 API 연동을 통한 동적 콘텐츠 제어가 가능합니다. 사용자 경험을 향상시키는 마이크로 인터랙션 구현을 전문으로 합니다.'
  },
  { 
    name: 'React', 
    category: 'Development',
    description: '컴포넌트 기반 아키텍처와 상태 관리를 통해 유지보수성 높은 웹 애플리케이션을 구축합니다. Hooks와 Context API를 활용한 효율적인 데이터 흐름 설계가 가능합니다.'
  },
  { 
    name: 'Vue.js', 
    category: 'Development',
    description: '직관적인 템플릿 문법과 반응형 데이터 바인딩을 활용하여 빠른 프로토타이핑과 실제 서비스 개발을 모두 지원합니다. Composition API를 통한 코드 재사용성을 극대화합니다.'
  }
];

const stats = [
  { number: '50+', label: '완성된 프로젝트' },
  { number: '3년+', label: '경력' }
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 font-medium">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-normal">
            디자인부터 개발까지, 다양한 도구와 기술을 활용하여 완성도 높은 결과물을 만들어냅니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl mb-8 font-medium">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-base font-medium">{skill.name}</h4>
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-normal">
                      {skill.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl mb-8 font-medium">Career Overview</h3>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-8 bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="text-3xl md:text-4xl text-primary mb-3 font-medium">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-normal">{stat.label}</div>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="bg-background rounded-lg p-6 shadow-sm"
            >
              <h4 className="text-base mb-3 font-medium">주요 성과</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-normal">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  사용자 경험 개선으로 전환율 35% 향상
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  디자인 시스템 도입으로 개발 효율성 40% 증대
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  반응형 웹 구현으로 모바일 사용성 크게 개선
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}