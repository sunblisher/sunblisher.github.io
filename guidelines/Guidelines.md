# Portfolio Design System Guidelines

이 가이드라인은 UI/UX 디자이너 포트폴리오 사이트의 일관성 있는 디자인과 개발을 위한 규칙을 정의합니다.

## 🎨 Design Tokens

### Typography
**Font Family**: Pretendard (프리텐다드)
- 한글과 영문 모두 최적화된 가독성 제공
- 웹폰트로 로드되어 일관된 렌더링 보장
- 기본 폰트 사이즈: 14px (`--font-size`)

#### Hierarchy
```
h1: text-2xl font-medium (메인 제목)
h2: text-xl font-medium (섹션 제목)  
h3: text-lg font-medium (서브섹션 제목)
h4: text-base font-medium (카드 제목)
p: text-base font-normal (본문)
```

#### Font Weight Rules
- **Medium (500)**: 제목, 버튼, 라벨에 사용 (`font-medium`)
- **Normal (400)**: 본문 텍스트, 입력 필드에 사용 (`font-normal`)
- 절대 bold를 사용하지 않음 (브랜드 일관성 유지)
- 모든 텍스트에 명시적으로 font-weight 클래스 적용 필수

#### Typography Usage
```tsx
// 올바른 사용법 - 명시적 font-weight 지정
<h2 className="text-xl font-medium">섹션 제목</h2>
<p className="text-base font-normal">본문 텍스트</p>
<span className="text-sm font-normal">작은 텍스트</span>

// 잘못된 사용법 - font-weight 누락
<h2 className="text-xl">섹션 제목</h2> // ❌
<p className="text-base">본문 텍스트</p> // ❌
```

### Colors
우리의 컬러 시스템은 CSS 커스텀 프로퍼티를 기반으로 하며, 라이트/다크 모드를 지원합니다.

#### Primary Colors
- **Primary**: 메인 브랜드 컬러 (`--primary`) - 주요 CTA 버튼, 중요한 텍스트
- **Primary Foreground**: Primary 배경 위의 텍스트 (`--primary-foreground`)

#### Semantic Colors  
- **Background**: 페이지 배경색 (`--background`)
- **Foreground**: 기본 텍스트 색상 (`--foreground`) 
- **Muted**: 보조 텍스트 및 비활성 요소 (`--muted`, `--muted-foreground`)
- **Accent**: 강조 요소 (`--accent`, `--accent-foreground`)
- **Destructive**: 에러, 삭제 등 경고 액션 (`--destructive`)

#### Usage Rules
- Primary 컬러는 페이지당 최대 3개의 주요 액션에만 사용
- Muted 컬러는 설명 텍스트, 메타 정보에 사용
- 모든 컬러는 CSS 변수를 통해서만 사용 (예: `text-primary`, `bg-accent`)

### Cursor Styles
모든 인터랙티브 요소에는 적절한 커서 스타일이 적용되어야 합니다.

#### 기본 규칙
- **button, a 태그**: 자동으로 `cursor: pointer` 적용 (globals.css에서 정의)
- **클릭 가능한 div**: `cursor-pointer` 클래스 명시적 추가
- **드래그 가능한 요소**: `cursor-grab` 또는 `cursor-grabbing`
- **텍스트 선택 불가**: `select-none` 클래스와 함께 사용

#### 적용 대상
```tsx
// 자동 적용 (globals.css)
<button>버튼</button>
<a href="#">링크</a>

// 명시적 적용 필요
<div className="cursor-pointer" onClick={handleClick}>클릭 가능한 카드</div>
<motion.div className="cursor-pointer" whileHover={{ scale: 1.05 }}>인터랙티브 요소</motion.div>

// 특수 상황
<div className="cursor-grab">드래그 가능</div>
<div className="cursor-not-allowed opacity-50">비활성화된 요소</div>
```

### Spacing & Layout
- **Container**: 최대 너비 제한으로 가독성 보장
- **Section Padding**: `py-20` (상하 5rem)
- **Card Padding**: `p-6` (1.5rem)
- **Button Padding**: `px-6 py-3` 또는 `px-8 py-3`
- **Gap Standards**: `gap-2`, `gap-4`, `gap-6`, `gap-8` 사용

### Border Radius
- **Small**: `rounded-md` - 인풋, 작은 요소
- **Medium**: `rounded-lg` - 버튼, 카드 
- **Large**: `rounded-xl` - 모달, 큰 컨테이너

---

## 🧩 Component Patterns

### Button Hierarchy
```tsx
// Primary Button (주요 액션)
<Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium cursor-pointer">
  주요 액션
</Button>

// Secondary Button (보조 액션)  
<Button variant="outline" className="border-border hover:bg-accent font-medium cursor-pointer">
  보조 액션
</Button>

// Ghost Button (최소 중요도)
<Button variant="ghost" className="hover:bg-accent font-medium cursor-pointer">
  기타 액션  
</Button>
```

### Interactive Elements Pattern
모든 클릭 가능한 요소는 다음 패턴을 따릅니다:
```tsx
<motion.div
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
  onClick={handleClick}
  className="cursor-pointer hover:bg-accent transition-colors duration-200"
>
  클릭 가능한 콘텐츠
</motion.div>
```

### Card Pattern
모든 카드는 일관된 구조를 따릅니다:
```tsx
<div className="bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden cursor-pointer">
  {/* 이미지/미디어 영역 (선택적) */}
  <div className="aspect-video overflow-hidden">
    {/* 이미지 */}
  </div>
  
  {/* 콘텐츠 영역 */}
  <div className="p-6">
    {/* 메타 정보 */}
    <div className="flex items-center gap-2 mb-2">
      <span className="text-xs text-primary font-normal">카테고리</span>
      <span className="text-xs px-2 py-1 rounded-full bg-accent font-normal">태그</span>
    </div>
    
    {/* 제목 */}
    <h3 className="mb-2 font-medium">제목</h3>
    
    {/* 설명 */}
    <p className="text-muted-foreground text-sm font-normal">설명</p>
    
    {/* 액션 영역 (선택적) */}
    <div className="flex gap-2 mt-4">
      {/* 버튼들 */}
    </div>
  </div>
</div>
```

### Skills Section Pattern
스킬은 막대그래프나 퍼센티지 대신 실제 역량을 설명하는 텍스트를 사용합니다:
```tsx
<div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
  <div className="flex items-center gap-3 mb-3">
    <h4 className="text-base font-medium">{skill.name}</h4>
    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-normal">
      {skill.category}
    </span>
  </div>
  <p className="text-sm text-muted-foreground leading-relaxed font-normal">
    {skill.description}
  </p>
</div>
```

### Layout Patterns
- **Hero Section**: 전체 화면 높이 (`min-h-screen`), 중앙 정렬
- **Content Section**: `py-20` 패딩, 컨테이너로 감싸기
- **Grid Layout**: `grid md:grid-cols-2 lg:grid-cols-3 gap-8`
- **Flex Layout**: `flex flex-col sm:flex-row gap-4` (반응형 고려)

---

## ✨ Animation & Interactions

### Transition Standards
모든 인터랙션은 `transition-duration: 200ms`를 기본으로 사용합니다.

#### Hover Effects
```css
/* 기본 호버 효과 */
.element {
  transition: all 0.2s ease;
}

/* 스케일 효과 */
hover:scale-105

/* 이동 효과 */  
hover:y-[-2px]

/* 색상 변화 */
hover:bg-accent hover:text-accent-foreground
```

#### Motion Patterns
```tsx
// 페이지 진입 애니메이션
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>

// 스크롤 트리거 애니메이션 (Framer Motion useInView 사용)
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.4, delay: 0.2 }}
>

// 버튼 인터랙션 (cursor-pointer 필수)
<motion.button
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
  className="cursor-pointer"
>
```

### Interactive Elements Checklist
모든 인터랙티브 요소는 다음을 확인해야 합니다:
- [ ] `cursor-pointer` 클래스 또는 자동 적용되는 요소
- [ ] 호버 상태 스타일 정의 (`hover:bg-accent` 등)
- [ ] 적절한 transition 시간 (`duration-200`)
- [ ] 명시적 font-weight 클래스 (`font-medium` 또는 `font-normal`)
- [ ] Framer Motion 애니메이션 (선택적)

### Loading & State Changes
- **Loading State**: 스피너는 2초간 표시
- **Page Transitions**: 0.5s fade 효과
- **Modal Animations**: scale + opacity (0.3s spring)

---

## 📱 Responsive Design Rules

### Breakpoint Strategy
- **Mobile First**: 모바일부터 디자인 시작
- **Breakpoints**: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)

### Responsive Patterns
```tsx
// 텍스트 크기
className="text-4xl md:text-6xl lg:text-7xl"

// 그리드 레이아웃  
className="grid md:grid-cols-2 lg:grid-cols-3"

// 플렉스 방향
className="flex flex-col sm:flex-row"

// 패딩/마진
className="px-4 md:px-6 lg:px-8"
```

---

## 🗂 File Organization

### Component Structure
```
/components
  /ui           // ShadCN 컴포넌트 (수정 금지)
  /figma        // Figma 전용 컴포넌트
  /{Section}Section.tsx  // 페이지 섹션 컴포넌트
  /{Feature}.tsx         // 기능별 컴포넌트
```

### Naming Conventions
- **Components**: PascalCase (예: `ProjectModal.tsx`)
- **Files**: kebab-case for utilities, PascalCase for components
- **CSS Classes**: Tailwind 클래스 우선 사용
- **Props**: camelCase

---

## 🎯 Code Quality Rules  

### Component Best Practices
1. **Single Responsibility**: 하나의 컴포넌트는 하나의 책임만
2. **Props Interface**: TypeScript 인터페이스로 props 정의
3. **Default Props**: 기본값은 함수 파라미터에서 정의
4. **Event Handlers**: `handle` prefix 사용 (예: `handleClick`)
5. **Font Weight**: 모든 텍스트 요소에 명시적으로 `font-medium` 또는 `font-normal` 클래스 적용
6. **Cursor Style**: 모든 클릭 가능한 요소에 `cursor-pointer` 명시적 적용

### Performance Guidelines
- **Image Optimization**: `ImageWithFallback` 컴포넌트 사용
- **Lazy Loading**: 스크롤 기반 애니메이션에 `useInView` 활용
- **Bundle Size**: 필요한 아이콘만 import

### Accessibility
- **Semantic HTML**: 의미있는 HTML 태그 사용
- **ARIA Labels**: 스크린 리더 고려
- **Keyboard Navigation**: Tab 순서 고려
- **Color Contrast**: WCAG 가이드라인 준수
- **Cursor Indication**: 모든 인터랙티브 요소의 명확한 커서 표시

---

## 🔧 Customization Guide

### 폰트 변경
Pretendard 외의 폰트를 사용하려면 `/styles/globals.css`에서:
```css
@import url('새로운-폰트-URL');

body {
  font-family: '새로운폰트', 'Pretendard', sans-serif;
}
```

### 컬러 변경
`/styles/globals.css`에서 CSS 커스텀 프로퍼티 수정:
```css
:root {
  --primary: #your-new-color;
}

.dark {
  --primary: #your-new-dark-color;
}
```

### 애니메이션 속도 조정
모든 `transition` duration을 일괄 변경하려면 글로벌 CSS에서:
```css
* {
  transition-duration: 300ms; /* 기본 200ms에서 변경 */}
```

### 타이포그래피 조정
폰트 크기 기준값 변경:
```css
:root {
  --font-size: 16px; /* 기본 14px에서 변경 */
}
```

---

## 📊 Skills Section Guidelines

### 스킬 표현 방식
- **막대그래프 사용 금지**: 주관적인 퍼센티지 대신 구체적인 역량 설명 사용
- **텍스트 기반 설명**: 각 스킬별로 실제 구현 가능한 작업과 경험을 서술
- **카테고리 분류**: Design과 Development로 명확히 구분
- **성과 중심**: 통계는 객관적 지표(완성된 프로젝트 수, 경력)만 포함

### 스킬 카드 구조
```tsx
{
  name: '기술명',
  category: 'Design' | 'Development',
  description: '구체적인 역량과 가능한 작업 내용 설명 (2-3문장)'
}
```

이 가이드라인을 따라 개발하면 일관성 있고 유지보수하기 쉬운 포트폴리오 사이트를 만들 수 있습니다. 새로운 컴포넌트를 추가할 때는 기존 패턴을 따르고, 변경사항이 있을 때는 이 가이드라인을 업데이트해주세요.