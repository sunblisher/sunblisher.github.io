# Design System Components

이 디렉토리에는 포트폴리오 사이트의 일관성을 보장하기 위한 재사용 가능한 디자인 시스템 컴포넌트들이 포함되어 있습니다.

## 사용법

### 1. 애니메이션 Variants

일관된 애니메이션을 위해 미리 정의된 variants를 사용하세요:

```tsx
import { fadeInUp, hoverLift } from './design-system/DesignTokens';

<motion.div {...fadeInUp}>
  내용
</motion.div>

<motion.button {...hoverLift}>
  버튼
</motion.button>
```

### 2. 섹션 레이아웃

모든 섹션은 `Section` 컴포넌트로 감싸세요:

```tsx
import { Section, SectionHeader } from './design-system/DesignTokens';

<Section id="about" background="muted">
  <SectionHeader 
    title="About Me"
    subtitle="UI/UX 디자이너로서의 경험과 철학을 소개합니다."
  />
  {/* 섹션 내용 */}
</Section>
```

### 3. 그리드 레이아웃

반응형 그리드를 쉽게 구성하세요:

```tsx
import { Grid } from './design-system/DesignTokens';

<Grid cols={3} gap={8}>
  <div>아이템 1</div>
  <div>아이템 2</div>
  <div>아이템 3</div>
</Grid>
```

### 4. 카드 컴포넌트

표준 카드 스타일을 사용하세요:

```tsx
import { Card } from './design-system/DesignTokens';

<Card hover onClick={handleClick}>
  <div className="p-6">
    <h3>카드 제목</h3>
    <p>카드 내용</p>
  </div>
</Card>
```

### 5. 태그 시스템

일관된 태그 스타일을 적용하세요:

```tsx
import { Tag } from './design-system/DesignTokens';

<Tag variant="primary" size="md">React</Tag>
<Tag variant="success">런칭됨</Tag>
<Tag variant="warning">개발중</Tag>
```

### 6. 버튼 그룹

버튼들을 일관된 레이아웃으로 배치하세요:

```tsx
import { ButtonGroup } from './design-system/DesignTokens';

<ButtonGroup align="center" gap={4}>
  <Button>주요 액션</Button>
  <Button variant="outline">보조 액션</Button>
</ButtonGroup>
```

## 기존 컴포넌트 업데이트 예시

기존 컴포넌트들을 디자인 시스템에 맞춰 리팩토링할 때의 예시입니다:

### Before (기존 방식)
```tsx
<section className="py-20 bg-muted/30">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl mb-4">Skills</h2>
      <p className="text-muted-foreground">설명</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* 내용 */}
    </div>
  </div>
</section>
```

### After (디자인 시스템 적용)
```tsx
import { Section, SectionHeader, Grid } from '../design-system/DesignTokens';

<Section background="muted">
  <SectionHeader 
    title="Skills" 
    subtitle="설명" 
  />
  <Grid cols={3} gap={8}>
    {/* 내용 */}
  </Grid>
</Section>
```

이런 식으로 리팩토링하면 코드가 더 간결해지고 일관성이 보장됩니다.