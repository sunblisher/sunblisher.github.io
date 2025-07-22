/**
 * Design System Tokens
 * 일관된 디자인을 위한 재사용 가능한 유틸리티 컴포넌트들
 */

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// Animation Variants - 일관된 애니메이션 패턴
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4 }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4 }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4 }
};

// 표준 호버 효과
export const hoverLift = {
  whileHover: { scale: 1.05, y: -2 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.2 }
};

export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.2 }
};

// 섹션 컨테이너 - 일관된 레이아웃
interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  background?: 'default' | 'muted';
}

export function Section({ 
  id, 
  className = '', 
  children, 
  background = 'default' 
}: SectionProps) {
  const bgClass = background === 'muted' ? 'bg-muted/30' : '';
  
  return (
    <section id={id} className={`py-20 ${bgClass} ${className}`}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
}

// 섹션 헤더 - 일관된 제목 스타일
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  className = '' 
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <motion.h2
        {...fadeInUp}
        className="text-3xl md:text-4xl mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

// 그리드 컨테이너 - 반응형 그리드
interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: 4 | 6 | 8;
  className?: string;
}

export function Grid({ 
  children, 
  cols = 3, 
  gap = 8, 
  className = '' 
}: GridProps) {
  const colsClass = {
    1: 'grid-cols-1',
    2: 'grid md:grid-cols-2',
    3: 'grid md:grid-cols-2 lg:grid-cols-3',
    4: 'grid md:grid-cols-2 lg:grid-cols-4'
  };

  const gapClass = {
    4: 'gap-4',
    6: 'gap-6', 
    8: 'gap-8'
  };

  return (
    <div className={`grid ${colsClass[cols]} ${gapClass[gap]} ${className}`}>
      {children}
    </div>
  );
}

// 카드 컴포넌트 - 표준 카드 스타일
interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ 
  children, 
  className = '', 
  hover = false, 
  onClick 
}: CardProps) {
  const MotionCard = motion.div;
  
  return (
    <MotionCard
      {...(hover ? hoverScale : {})}
      onClick={onClick}
      className={`
        bg-background rounded-lg shadow-sm transition-shadow duration-200
        ${hover ? 'hover:shadow-md cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </MotionCard>
  );
}

// 태그 컴포넌트 - 일관된 태그 스타일
interface TagProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning';
  size?: 'sm' | 'md';
}

export function Tag({ 
  children, 
  variant = 'default', 
  size = 'sm' 
}: TagProps) {
  const variantClasses = {
    default: 'bg-accent text-accent-foreground',
    primary: 'bg-primary/10 text-primary',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1'
  };

  return (
    <span className={`
      rounded-full font-medium
      ${variantClasses[variant]} 
      ${sizeClasses[size]}
    `}>
      {children}
    </span>
  );
}

// 버튼 그룹 - 일관된 버튼 레이아웃
interface ButtonGroupProps {
  children: ReactNode;
  direction?: 'row' | 'column';
  gap?: 2 | 3 | 4;
  align?: 'start' | 'center' | 'end';
}

export function ButtonGroup({ 
  children, 
  direction = 'row', 
  gap = 4, 
  align = 'center' 
}: ButtonGroupProps) {
  const directionClass = direction === 'column' ? 'flex-col' : 'flex-col sm:flex-row';
  const gapClass = `gap-${gap}`;
  const alignClass = {
    start: 'justify-start items-start',
    center: 'justify-center items-center',
    end: 'justify-end items-end'
  };

  return (
    <div className={`flex ${directionClass} ${gapClass} ${alignClass[align]}`}>
      {children}
    </div>
  );
}