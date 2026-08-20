# DESIGN — Korea at a Glance

| 항목 | 내용 |
| --- | --- |
| 문서 상태 | Design System v1.0 |
| 기준 문서 | PRD.md Revised Draft v1.1 |
| 디자인 컨셉 | Minimal Korean Travel Discovery |
| 우선 적용 범위 | MVP 1 — 여행지 탐색 |
| 지원 언어 | English(기본), Español, 한국어 원명·주소 |
| 주요 화면 | 홈/탐색, 여행지 상세 |

## 1. 문서 목적과 범위

이 문서는 영어권·스페인어권 외국인 여행자가 한국 여행지를 사진 중심으로 탐색하는 반응형 웹사이트의 시각 언어와 UI 규칙을 정의한다. 개발자가 디자인 결정을 다시 만들지 않고 CSS와 컴포넌트로 옮길 수 있을 만큼 구체적으로 작성한다.

Airbnb에서 느껴지는 명확한 정보 구조, 넉넉한 여백과 편안한 검색 경험, Pinterest에서 느껴지는 사진 중심의 발견성과 스크롤 리듬을 참고한다. 특정 서비스의 레이아웃, 아이콘, 브랜드 표현이나 인터랙션을 그대로 복제하지 않는다.

PRD와 충돌할 경우 PRD가 우선한다. 특히 단계별 범위를 다음과 같이 지킨다.

- **MVP 1**: 언어 전환, 검색·필터, 여행지 카드, slug 기반 상세, 외부 지도 CTA
- **MVP 2**: My Trip, Day 1~Day 14 일정, 버튼 기반 순서·날짜 변경
- **Phase 2**: 인터랙티브 한국 지도, 카드·핀 연동, Drag & Drop

MVP 1 헤더와 화면에는 My Trip이나 내부 지도 기능을 미리 노출하지 않는다. 이후 단계의 디자인은 이 문서 후반의 확장 규칙으로만 정의한다.

## 2. 디자인 컨셉

### Minimal Korean Travel Discovery

사용자가 첫 화면에서 “I want to explore Korea.”라는 감정을 느끼고, 사진을 보다가 자연스럽게 새로운 장소를 발견한 뒤 상세 정보를 신뢰하고 활용하게 만드는 경험을 목표로 한다.

시각적 우선순위는 다음과 같다.

1. Travel photography
2. Easy discovery
3. Clear information
4. English / Spanish usability
5. Korean local information
6. Responsive experience
7. Accessibility

### 분위기 키워드

- Warm
- Minimal
- Editorial
- Visual
- Friendly
- Contemporary
- Calm
- Travel inspiration

### 한국다움의 표현

태극, 한복 패턴, 단청과 전통 문양을 반복 장식으로 사용하지 않는다. 실제 여행지 사진, 공식 한국어 지명, 한국어 typography 자체가 한국이라는 정체성을 전달하게 한다. 한국어는 이국적인 장식이 아니라 현지에서 활용하는 중요한 정보로 다룬다.

## 3. 디자인 원칙

1. **사진이 먼저 보인다**: 컬러, 카드 장식과 아이콘보다 여행 사진이 가장 강한 시각 요소여야 한다.
2. **정보는 사진 아래에서 읽힌다**: 카드 이미지 위에 긴 문장을 겹치지 않는다. 분류와 설명은 이미지 아래에 둔다.
3. **여백으로 구분한다**: 두꺼운 테두리와 강한 그림자 대신 간격, 정렬과 약한 표면 차이를 사용한다.
4. **탐색은 예측 가능하다**: 검색, 필터와 결과 개수의 위치를 안정적으로 유지한다.
5. **다국어 길이를 견딘다**: 스페인어 텍스트 확장을 허용하고 제목·버튼에 고정 폭이나 한 줄 강제를 남용하지 않는다.
6. **한국어 정보는 크게 보여준다**: 현지인에게 휴대폰을 보여줄 수 있도록 원명과 주소를 충분한 크기로 제공한다.
7. **단계 밖 기능을 암시하지 않는다**: MVP 1에서 동작하지 않는 지도와 My Trip 버튼을 disabled 상태로 배치하지 않는다.
8. **장식보다 접근성을 우선한다**: 키보드 focus, 대비, 터치 크기와 reduced motion을 기본 디자인 결정으로 포함한다.

## 4. 컬러 시스템

따뜻하고 밝은 neutral palette를 사용한다. 배경과 표면은 사진을 받쳐 주고, muted forest green accent는 선택 상태와 소량의 강조에만 사용한다. 사진이 페이지의 주된 색이므로 accent를 넓은 면적에 반복하지 않는다.

### 4.1 팔레트

| 역할 | 토큰 | 값 | 사용 |
| --- | --- | --- | --- |
| Background | color-background | #F7F4EF | 전체 페이지의 warm cream 배경 |
| Surface | color-surface | #FFFFFF | 헤더, 입력, 정보 패널 |
| Subtle Surface | color-surface-subtle | #EFEAE2 | 한국어 정보, 빈 상태, 선택 보조 배경 |
| Primary Text | color-text-primary | #201F1C | 제목, 본문, 주요 아이콘 |
| Secondary Text | color-text-secondary | #625E56 | 메타데이터, 보조 설명 |
| Muted Text | color-text-muted | #777168 | caption, 비활성 설명 |
| Border | color-border | #D8D1C7 | 입력, chip, 구분선 |
| Strong Border | color-border-strong | #AAA298 | hover 또는 강조 테두리 |
| Primary | color-primary | #202A23 | 주요 CTA의 warm charcoal-green |
| Primary Hover | color-primary-hover | #111713 | 주요 CTA hover |
| On Primary | color-on-primary | #FFFFFF | Primary 위 텍스트 |
| Accent | color-accent | #5F765F | 선택, 짧은 강조, 링크 아이콘 |
| Accent Strong | color-accent-strong | #435A47 | 작은 텍스트 링크, 선택 테두리 |
| Accent Subtle | color-accent-subtle | #E2EAE1 | 선택 chip과 보조 강조 배경 |
| Focus | color-focus | #175CD3 | 키보드 focus ring |
| Error | color-error | #A3312B | 오류 텍스트와 상태 |
| Success | color-success | #2F6B47 | 복사 성공 등 긍정 상태 |
| Image Placeholder | color-image-placeholder | #E7E1D8 | 이미지 로딩·실패 영역 |

### 4.2 CSS 컬러 토큰

```css
:root {
  --color-background: #f7f4ef;
  --color-surface: #ffffff;
  --color-surface-subtle: #efeae2;

  --color-text-primary: #201f1c;
  --color-text-secondary: #625e56;
  --color-text-muted: #777168;

  --color-border: #d8d1c7;
  --color-border-strong: #aaa298;

  --color-primary: #202a23;
  --color-primary-hover: #111713;
  --color-on-primary: #ffffff;

  --color-accent: #5f765f;
  --color-accent-strong: #435a47;
  --color-accent-subtle: #e2eae1;

  --color-focus: #175cd3;
  --color-error: #a3312b;
  --color-success: #2f6b47;
  --color-image-placeholder: #e7e1d8;
}
```

### 4.3 사용 규칙

- 기본 본문은 background 위 primary text를 사용한다.
- secondary 또는 muted text는 큰 제목이나 핵심 행동에 사용하지 않는다.
- primary CTA는 primary 배경과 on-primary 텍스트를 사용한다.
- accent는 선택 chip, 작은 링크, 상태 아이콘에 제한한다. 섹션 전체 배경이나 긴 본문에 사용하지 않는다.
- 선택 상태는 색상 외에 테두리, 글자 굵기와 선택 아이콘을 함께 바꾼다.
- focus blue는 브랜드 색과 별개인 접근성 신호다. 다른 요소에 장식색으로 사용하지 않는다.
- 텍스트·컨트롤 조합은 구현 후 WCAG 대비 도구로 검증한다.
- gradient와 반투명 glass surface는 기본 시스템에서 사용하지 않는다.

## 5. Typography

### 5.1 폰트

오픈 라이선스 기반의 한 가지 산세리프 계열 경험을 유지한다.

```css
:root {
  --font-sans: "Inter", "Noto Sans KR", system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", sans-serif;
}
```

- **Inter**: 영어와 스페인어 UI, 제목과 본문
- **Noto Sans KR**: 한국어 원명과 주소, Inter에 없는 한국어 glyph fallback
- Inter와 Noto Sans KR을 실제로 불러오지 못하는 경우 system font가 동작해야 한다.
- Hero와 제목에는 600, 본문에는 400, 버튼·필터에는 500을 사용한다. 700 이상을 반복하지 않는다.
- 영어·스페인어는 문장형 대소문자(sentence case)를 기본으로 한다. 긴 uppercase 문장을 사용하지 않는다.
- 한국어 원명은 읽기 쉽게 500 또는 600을 사용한다.

### 5.2 타입 스케일

| 역할 | Mobile | Desktop | Weight | Line height | 용도 |
| --- | ---: | ---: | ---: | ---: | --- |
| Display / Hero | 44px | 72px | 600 | 1.06 | 홈 Hero 문구 |
| H1 | 36px | 56px | 600 | 1.10 | 여행지 상세 제목 |
| H2 | 30px | 40px | 600 | 1.15 | 주요 섹션 제목 |
| H3 | 22px | 24px | 600 | 1.25 | 카드 제목, 상세 하위 제목 |
| Body Large | 18px | 19px | 400 | 1.55 | Hero 설명, 상세 리드 |
| Body | 16px | 16px | 400 | 1.60 | 일반 본문 |
| Small | 14px | 14px | 400/500 | 1.45 | 카드 메타데이터 |
| Caption | 13px | 13px | 500 | 1.40 | 검수일, 짧은 보조 정보 |
| Button | 15px | 15px | 600 | 1.00 | 버튼, chip |

### 5.3 유동형 토큰

```css
:root {
  --text-display: clamp(2.75rem, 6vw, 4.5rem);
  --text-h1: clamp(2.25rem, 4.5vw, 3.5rem);
  --text-h2: clamp(1.875rem, 3vw, 2.5rem);
  --text-h3: clamp(1.375rem, 2vw, 1.5rem);
  --text-body-lg: clamp(1.125rem, 1.4vw, 1.1875rem);
  --text-body: 1rem;
  --text-small: 0.875rem;
  --text-caption: 0.8125rem;
  --text-button: 0.9375rem;
}
```

### 5.4 다국어 규칙

- 문서의 최상위 lang은 현재 선택 언어에 따라 en 또는 es로 변경한다.
- 한국어 원명과 주소 요소에는 lang="ko"를 지정한다.
- 스페인어의 긴 단어와 문장을 고려해 버튼 높이를 고정하더라도 가로 폭은 내용에 따라 늘어나게 한다.
- 카드 제목은 시각적으로 최대 2줄, 요약은 최대 3줄까지 허용한다. 원문 전체는 DOM과 상세 페이지에서 접근 가능해야 한다.
- 제목 영역을 고정 높이로 만들지 않는다. 같은 행 카드의 하단 정렬보다 텍스트 손실 방지가 우선이다.

## 6. 디자인 토큰

### 6.1 전체 토큰

```css
:root {
  /* Spacing: 4px base */
  --space-3xs: 0.25rem;  /* 4px */
  --space-2xs: 0.5rem;   /* 8px */
  --space-xs: 0.75rem;   /* 12px */
  --space-sm: 1rem;      /* 16px */
  --space-md: 1.5rem;    /* 24px */
  --space-lg: 2rem;      /* 32px */
  --space-xl: 3rem;      /* 48px */
  --space-2xl: 4rem;     /* 64px */
  --space-3xl: 5rem;     /* 80px */
  --space-4xl: 6rem;     /* 96px */
  --space-5xl: 8rem;     /* 128px */

  /* Radius */
  --radius-sm: 0.5rem;   /* 8px */
  --radius-md: 0.75rem;  /* 12px */
  --radius-lg: 1.125rem; /* 18px */
  --radius-xl: 1.75rem;  /* 28px */
  --radius-pill: 999px;

  /* Shadow */
  --shadow-xs: 0 1px 2px rgb(32 31 28 / 0.06);
  --shadow-sm: 0 6px 18px rgb(32 31 28 / 0.08);
  --shadow-md: 0 14px 36px rgb(32 31 28 / 0.12);

  /* Container */
  --container-reading: 45rem; /* 720px */
  --container-detail: 70rem;  /* 1120px */
  --container-page: 80rem;    /* 1280px */

  /* Motion */
  --duration-fast: 120ms;
  --duration-base: 180ms;
  --duration-slow: 240ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);

  /* Layer */
  --z-header: 40;
  --z-panel: 60;
  --z-toast: 80;
}
```

### 6.2 Breakpoints

| 이름 | 범위 | 기본 레이아웃 |
| --- | --- | --- |
| Mobile | 0~639px | 1열, 20px gutter |
| Tablet | 640~1023px | 2열, 32px gutter |
| Desktop | 1024~1279px | 3열, 40px gutter |
| Wide | 1280px 이상 | 4열, 최대 1280px container, 48px gutter |

Breakpoints는 콘텐츠가 깨지는 시점을 우선해 조정할 수 있지만 컴포넌트마다 임의의 breakpoint를 추가하지 않는다.

## 7. 글로벌 레이아웃

- page background는 warm cream을 사용하고 주요 정보 surface만 white를 사용한다.
- 콘텐츠는 max-width 1280px 중앙 정렬 container에 배치한다.
- 일반 섹션의 세로 간격은 모바일 64px, 데스크톱 96px을 기본으로 한다.
- 탐색 결과 영역은 필터와 카드 사이에 32px, 카드 행 사이에 48px 간격을 둔다.
- 상세 본문은 읽기 폭 720px을 넘기지 않는다.
- ultra-wide 화면에서도 카드 너비가 과도하게 커지지 않도록 1280px에서 container를 제한한다.
- 얇은 1px border는 입력, 구분선과 subtle panel에만 사용한다.
- 모든 영역을 카드나 box로 감싸지 않는다.

## 8. Header와 Navigation

### 8.1 MVP 1 Desktop

- 높이: 72px
- 배경: surface
- 위치: sticky top 0
- 하단: 1px border
- 내부: 최대 1280px, 좌우 gutter 유지
- 왼쪽: **Korea at a Glance** wordmark
- 중앙 또는 wordmark 오른쪽: **Explore** 링크
- 오른쪽: EN / ES language selector

스크롤 중에도 opaque surface를 유지한다. blur 기반 glassmorphism을 사용하지 않는다.

### 8.2 MVP 1 Mobile

- 높이: 64px
- 왼쪽: 축약하지 않은 wordmark. 공간이 부족하면 글자 크기를 16px까지 줄이되 로고를 아이콘만으로 대체하지 않는다.
- 오른쪽: EN / ES language selector
- 메뉴가 두 개뿐이므로 hamburger menu를 만들지 않는다.
- Explore는 wordmark가 홈/탐색으로 이동하는 역할을 함께 하므로 별도 링크를 생략할 수 있다.

### 8.3 MVP 2 변경

- My Trip 링크를 Desktop navigation에 추가한다.
- Mobile에서는 language selector 옆에 최소 44px 높이의 My Trip 텍스트 또는 아이콘+텍스트 버튼을 추가한다.
- MVP 1에서는 My Trip을 disabled, “Coming soon” 또는 빈 아이콘으로 노출하지 않는다.

### 8.4 Language selector

- EN과 ES가 모두 보이는 segmented control을 사용한다.
- 최소 높이 44px, 각 segment 최소 너비 44px
- 현재 언어는 primary text, surface-subtle background, 1px strong border와 font-weight 600으로 표시한다.
- 비선택 언어는 투명 배경과 secondary text를 사용한다.
- 현재 언어는 색상만으로 구분하지 않고 aria-pressed 또는 현재 상태 텍스트를 제공한다.

## 9. Hero Section

Hero는 full-screen background image 대신 텍스트와 사진이 나란히 있는 editorial composition을 사용한다.

### 9.1 Desktop

- section max-width: 1280px
- 상하 padding: 80~96px
- 12-column grid에서 텍스트 5, 이미지 7 columns
- 텍스트 column 최대 폭: 560px
- 이미지 영역: 큰 4:5 이미지와 작은 1:1 이미지 두 장의 비대칭 조합
- 이미지는 18~28px radius를 사용하고 서로 20~32px 정도 겹칠 수 있다.
- 자동 재생 carousel, 동영상, parallax를 사용하지 않는다.

### 9.2 권장 카피

English:

- Headline: “Discover Korea, one place at a time.”
- Sub headline: “Find places worth seeing, from iconic landmarks to hidden corners of Korea.”
- Search placeholder: “Where do you want to explore?”

Español:

- Headline: “Descubre Corea, un lugar a la vez.”
- Sub headline: “Encuentra lugares que vale la pena conocer, desde sitios emblemáticos hasta rincones menos conocidos de Corea.”
- Search placeholder: “¿Qué lugar de Corea quieres explorar?”

최종 카피는 콘텐츠 검수를 거치며 줄바꿈을 문자열에 강제로 넣지 않는다. 시각적 줄바꿈은 container 폭으로 유도한다.

### 9.3 Mobile

- 순서: headline → sub headline → search → 대표 이미지
- 상하 padding: 48~64px
- Hero 이미지는 한 장만 사용하고 4:3 비율로 표시한다.
- 작은 overlapping 이미지는 숨겨 정보 밀도와 다운로드 비용을 줄인다.
- headline은 3~4줄까지 허용하고 이미지 위에 겹치지 않는다.

## 10. Search

검색은 Hero 안에서 가장 먼저 발견되는 기능이어야 한다.

- Desktop 높이: 60px
- Mobile 높이: 56px
- background: surface
- border: 1px solid border
- radius: 18px
- shadow: shadow-xs
- 왼쪽: 20px search icon
- 중앙: text input
- 오른쪽: 48px primary search button 또는 명확한 submit affordance
- placeholder는 secondary text를 사용한다.
- hover: border-strong
- focus-within: 3px focus ring과 2px offset에 준하는 명확한 외곽선
- 검색어 삭제 버튼은 값이 있을 때만 표시하고 최소 44×44px을 유지한다.

검색 icon만으로 label을 대체하지 않는다. 시각적 label을 생략할 경우 접근 가능한 label을 제공한다.

## 11. Explore와 Filters

### 11.1 구조

검색 아래에 다음 순서로 배치한다.

1. “Explore places” 섹션 제목
2. 결과 개수와 Reset filters
3. Region
4. Theme
5. Season
6. Destination grid

각 필터 그룹에는 현재 언어의 보이는 label을 제공한다.

### 11.2 Filter chip

- 최소 높이: 44px
- padding: 0 16px
- border: 1px solid border
- background: surface
- text: primary
- radius: pill
- gap: 8px
- hover: border-strong, surface-subtle
- selected: accent-subtle background, accent-strong border, primary text, font-weight 600, check icon
- focus: 공통 focus ring
- disabled 상태는 MVP 1에서 사용하지 않는다.

“All”은 특정 선택값이 아니라 해당 그룹에 선택된 값이 없는 상태를 이해하기 쉽게 표현한다.

### 11.3 Desktop

- 필터 그룹을 3개의 간결한 행으로 배치한다.
- label은 96px 폭의 왼쪽 column, chip은 오른쪽에서 wrap한다.
- 필터가 여러 줄로 넘어가도 결과 grid를 가리지 않는다.
- active filter가 있을 때만 Reset filters를 표시한다.

### 11.4 Mobile

- label과 chip을 세로로 배치한다.
- 각 그룹의 chip은 가로 스크롤할 수 있지만 page 자체에는 가로 스크롤이 생기지 않아야 한다.
- 스크롤 영역 양 끝에 내용이 더 있음을 알 수 있는 여백을 남긴다.
- 첫 구현에서는 별도 modal filter panel을 만들지 않는다.

## 12. Destination Grid

### 12.1 기본 grid

- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns
- Wide: 4 columns
- column gap: 24px
- row gap: 48px
- DOM 읽기 순서는 항상 왼쪽에서 오른쪽, 위에서 아래로 유지한다.
- CSS masonry나 grid-auto-flow: dense를 사용하지 않는다.

### 12.2 Editorial variation

Airbnb의 카드 명확성을 유지하면서 Pinterest의 시각적 리듬을 다음 수준에서만 반영한다.

- 기본 카드 이미지 비율은 4:5다.
- Wide와 Desktop에서 결과가 충분할 경우, 각 6~8개 결과 사이에 한 개의 wide card를 2 columns로 배치하고 이미지는 3:2로 사용한다.
- wide card도 동일한 정보 구조와 DOM 순서를 유지한다.
- Tablet과 Mobile에서는 wide span을 해제하고 모든 카드를 기본 column 폭으로 표시한다.
- 필터 결과가 적거나 grid에 빈 공간이 생기면 wide variation을 적용하지 않는다.
- 완전한 masonry, 무작위 크기와 dense reordering은 사용하지 않는다.

첫 구현에서는 uniform 4:5 grid로 기능을 완성한 뒤, wide variation을 독립적인 시각 polish로 추가할 수 있다. uniform grid도 이 디자인 시스템을 준수하는 완성 상태로 인정한다.

## 13. Destination Card

### 13.1 정보 구조

1. 대표 이미지
2. 지역 · 주요 테마
3. 현재 언어의 여행지 이름
4. 한국어 공식 명칭
5. 짧은 설명
6. 추천 계절
7. View details / Ver detalles CTA

PRD의 필수 정보는 모두 유지한다. 한국어 공식 명칭은 카드에서 작은 보조 제목으로 제공해 현지성을 강화하되, 상세 화면의 한국어 정보 컴포넌트보다 낮은 시각적 우선순위를 가진다.

### 13.2 스타일

- 카드 background는 기본적으로 transparent다.
- 카드 자체에는 border를 두르지 않는다.
- 이미지 radius: 18px
- 이미지 object-fit: cover
- 이미지 아래 간격: 16px
- 지역·테마: 14px / 500 / secondary
- 여행지 이름: 22~24px / 600 / primary, 최대 2줄
- 한국어 원명: 15px / 500 / secondary, lang="ko"
- 요약: 15~16px / 400 / secondary, 최대 3줄
- 계절: 14px / 500 / accent-strong
- CTA: 15px / 600 / primary, text link + 작은 arrow

카드 전체를 하나의 상세 링크로 만들 수 있다. 카드 전체가 링크라면 내부에 중복 링크나 버튼을 넣지 않고 CTA는 같은 링크의 시각적 표현으로 처리한다.

### 13.3 상태와 interaction

- hover 가능한 기기에서 이미지를 1.02배 확대하고 card를 최대 2px 위로 이동한다.
- hover transition은 180~240ms를 사용한다.
- 강한 shadow 대신 이미지 아래에 shadow-sm을 선택적으로 적용한다.
- focus-visible 시 카드 외곽에 3px focus ring을 표시한다.
- active 시 translate를 제거해 눌린 느낌을 준다.
- reduced motion에서는 scale과 translate를 제거하고 border 또는 outline 변화만 사용한다.

## 14. Destination Detail

상세 화면은 판매 페이지가 아니라 editorial travel guide처럼 보여야 한다.

### 14.1 상단

- max-width: 1120px
- 작은 back link 또는 breadcrumb
- 큰 대표 이미지: 16:9, radius 28px
- 이미지 아래 localized H1
- 한국어 공식 명칭
- 지역 · 테마 · 추천 계절 metadata
- localized lead description

대표 이미지 위에는 제목이나 긴 설명을 overlay하지 않는다.

### 14.2 Desktop 본문

12-column 기준:

- main editorial column: 8 columns, 실제 읽기 폭 최대 720px
- side information column: 4 columns
- column gap: 64px

Main column:

1. Description
2. Why visit / Visit tips
3. Getting there
4. Nearest transit — 데이터가 있을 때만
5. Operating information — 검증된 데이터가 있을 때만

Side column:

1. Korean Information component
2. Open in Maps primary CTA
3. Official information link — 데이터가 있을 때만
4. Last verified
5. 정적 정보 재확인 안내

side column은 viewport 높이가 충분한 desktop에서만 header 아래에 sticky로 둘 수 있다. 내용이 viewport보다 길면 sticky를 사용하지 않는다.

### 14.3 Mobile 본문

- 대표 이미지 → 제목과 metadata → lead → Korean Information → Open in Maps → 본문 순서로 배치한다.
- 한 column으로 표시하며 section 간 40~48px 간격을 둔다.
- Open in Maps CTA는 full width, 최소 높이 52px로 제공한다.
- 하단 고정 CTA는 콘텐츠를 가릴 수 있으므로 MVP 1 기본 패턴으로 사용하지 않는다.
- 공식 링크와 검수일은 본문 하단에서도 다시 찾기 쉬운 위치에 둔다.

### 14.4 선택 데이터

- nearestTransit이 없으면 section과 heading을 모두 숨긴다.
- operatingInfo가 없으면 빈 box를 만들지 않고 공식 정보 재확인 안내만 표시한다.
- officialInfoUrl이 없으면 링크 영역을 숨긴다.
- 숨긴 section 때문에 비정상적으로 큰 여백이 남지 않아야 한다.

## 15. Korean Information Component

외국인 여행자가 현지에서 휴대폰 화면을 보여주거나 주소를 복사할 수 있는 실용 컴포넌트다.

### 15.1 구조

1. “Korean name” / “Nombre en coreano” label
2. 한국어 공식 명칭
3. “Address in Korean” / “Dirección en coreano” label
4. 한국어 도로명 주소
5. Copy address / Copiar dirección button

### 15.2 스타일

- background: surface-subtle
- border: 1px solid border
- radius: 18px
- padding: mobile 20px, desktop 24px
- label: 13px / 600 / secondary
- 한국어 원명: 24px / 600 / primary / line-height 1.35
- 한국어 주소: 18px / 500 / primary / line-height 1.55
- Copy button: secondary button, 최소 44px 높이

### 15.3 동작과 feedback

- 주소를 복사하면 버튼 text를 “Copied” / “Copiado”로 잠시 변경한다.
- 성공 상태는 text와 success icon을 함께 사용한다.
- Clipboard API 실패 시 주소 선택이 가능해야 하며 오류 안내를 제공한다.
- 한국어 원명과 주소에 lang="ko"를 지정한다.

## 16. Buttons, Links와 Form Controls

### 16.1 Primary button

- height: 48px, 모바일 주요 CTA는 52px 허용
- padding: 0 20px
- radius: 12px
- background: primary
- text: on-primary, 15px / 600
- hover: primary-hover
- active: shadow 제거
- focus: 3px focus ring + 2px offset
- disabled: 실제 비활성 기능에만 사용하고 opacity만으로 상태를 구분하지 않는다.

### 16.2 Secondary button

- height: 48px
- padding: 0 18px
- radius: 12px
- background: surface
- border: 1px solid border-strong
- text: primary
- hover: surface-subtle

### 16.3 Text link

- text: accent-strong 또는 primary
- underline offset: 3px
- 본문 링크는 hover에만 underline을 표시하지 말고 기본 underline을 유지한다.
- 외부 링크는 문맥상 필요할 때 external icon과 accessible label을 제공한다.

### 16.4 Icon button

- 최소 44×44px
- radius: 12px 또는 원형
- 항상 accessible name 제공
- 장식 아이콘은 보조기술에서 숨긴다.

Pill 형태는 filter chip과 compact selector에만 사용한다. 모든 버튼, header와 카드를 pill로 만들지 않는다.

## 17. Image Direction

사진 품질은 이 디자인의 핵심이다.

### 17.1 선택 기준

- 실제 여행지의 특징이 바로 이해되는 사진
- 자연광과 현실적인 색감
- 과도한 HDR, saturation과 색보정 지양
- editorial travel magazine에 어울리는 구도
- 사람보다 장소가 주인공인 장면
- 사람이 포함될 경우 군중보다 규모감이나 현장성을 전달하는 역할
- 텍스트를 이미지에 직접 삽입하지 않은 원본

### 17.2 기술 규칙

- Hero: desktop용 4:5 주 이미지와 1:1 보조 이미지, mobile용 4:3 crop 확인
- Card: 기본 4:5, wide variation은 3:2
- Detail: 16:9
- CSS object-fit: cover와 의미 있는 object-position을 사용한다.
- width·height 또는 aspect-ratio를 미리 지정해 layout shift를 방지한다.
- 첫 Hero 핵심 이미지를 제외한 카드·상세 보조 이미지는 lazy loading한다.
- 같은 원본의 반응형 source와 적절한 압축 포맷을 제공한다.
- 이미지별 영어·스페인어 alt text와 출처 정보를 콘텐츠 데이터에서 관리한다.

## 18. Empty, Loading과 Error States

### 18.1 검색 결과 없음

강한 illustration 없이 여백과 간결한 문구로 구성한다.

English:

- “No places found.”
- “Try changing your search or filters.”
- “Reset filters”

Español:

- “No encontramos lugares.”
- “Prueba con otra búsqueda o cambia los filtros.”
- “Restablecer filtros”

스타일:

- surface-subtle 배경 또는 빈 background
- max-width 520px
- 48~64px vertical padding
- H3 + body + secondary button

### 18.2 이미지 loading과 실패

- 이미지 영역의 aspect-ratio를 항상 유지한다.
- loading 중 image-placeholder 색을 사용한다.
- static data이므로 전체 페이지 skeleton을 기본 사용하지 않는다.
- 이미지 요청이 느릴 때만 단순한 shimmer 없는 placeholder를 사용한다.
- 실패 시 장소 아이콘과 현재 언어 alt/fallback 문구를 표시한다.

### 18.3 데이터 오류와 404

- 정적 데이터 로딩 실패 시 손상된 카드를 표시하지 않고 간결한 재시도 안내를 제공한다.
- 존재하지 않는 slug는 “Place not found” / “Lugar no encontrado”와 Explore 복귀 CTA를 제공한다.
- 외부 지도 링크 오류 시 CTA를 비활성화하고 Korean Information에서 주소 복사를 유지한다.
- 오류를 색상만으로 표시하지 않고 제목, 설명과 다음 행동을 함께 제공한다.

## 19. Micro Interaction과 Motion

### 19.1 허용

- card image 1.02 scale
- card 최대 2px elevation
- button background와 border transition
- filter selection transition
- language selector state transition
- copy feedback
- MVP 2 panel과 Day section의 짧은 open/close transition

### 19.2 피할 것

- parallax
- bouncing animation
- 1.05를 넘는 큰 scale
- 자동 재생 carousel
- 지속적으로 움직이는 장식
- 긴 page transition
- 불필요한 loading animation

### 19.3 Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

동작 이해에 필요한 상태 변화는 motion을 제거해도 border, text와 icon으로 남아야 한다.

## 20. Responsive Design

### 20.1 Mobile

우선순위:

1. Language selector
2. Hero message
3. Search
4. Filters
5. Destination images
6. Destination information

규칙:

- page gutter 20px
- 1-column destination grid
- Hero text와 이미지를 세로 배치
- filter chip은 그룹별 가로 스크롤 허용
- 상세 화면은 1 column
- 주요 CTA는 full width 허용
- 주요 터치 영역 최소 44×44px
- page 수준의 가로 스크롤 금지
- hover에 의존하는 정보 금지

### 20.2 Tablet

- page gutter 32px
- 2-column card grid
- Hero는 공간에 따라 1 column 또는 5:7 split
- 상세는 기본 1 column, 충분한 폭에서 7:5 split 허용
- 필터 chip은 wrap

### 20.3 Desktop

- page gutter 40px
- 3-column card grid
- Hero 5:7 split
- 상세 8:4 split
- filter label + wrapping chip row

### 20.4 Wide

- page gutter 48px
- max-width 1280px
- 4-column card grid
- 제한적인 wide editorial card 허용
- Hero와 상세의 읽기 폭은 더 늘리지 않는다.

## 21. 접근성

### 21.1 기본 규칙

- header, nav, main, section, article과 footer에 semantic HTML을 사용한다.
- heading level을 시각 크기가 아니라 문서 구조에 맞게 사용한다.
- 모든 interactive element는 키보드로 접근하고 실행할 수 있어야 한다.
- focus-visible은 3px focus color ring과 충분한 offset으로 표시한다.
- 일반 텍스트는 4.5:1, 큰 텍스트와 필수 UI 그래픽은 3:1 이상의 대비를 목표로 한다.
- 색상만으로 선택, 성공, 오류와 현재 상태를 전달하지 않는다.
- 주요 touch target은 최소 44×44px이다.
- 이미지에는 현재 언어의 alt text를 위한 공간과 데이터가 있어야 한다.
- 장식 이미지는 빈 alt 또는 적절한 보조기술 제외 처리를 한다.
- icon-only button에는 보이는 tooltip 또는 accessible name을 제공한다.
- caption은 13px보다 작게 만들지 않는다.
- 200% 확대와 텍스트 확대에서 기능과 콘텐츠가 손실되지 않아야 한다.
- 언어 전환 후 focus를 잃거나 페이지 맨 위로 강제 이동하지 않는다.

### 21.2 컴포넌트별 주의

- Search에는 보이는 placeholder와 별개인 accessible label을 제공한다.
- Filter chip은 button 또는 checkbox semantics를 사용하고 선택 상태를 전달한다.
- 카드 전체 링크는 중첩 interactive element 없이 구성한다.
- 검색 결과 개수 변경은 과도하지 않은 live region으로 안내한다.
- Copy feedback은 screen reader에도 전달한다.
- motion은 prefers-reduced-motion을 존중한다.
- MVP 2 일정 순서 변경은 Drag & Drop 없이도 버튼으로 완료할 수 있어야 한다.
- Phase 2 지도 정보는 카드 목록에서도 동일하게 접근 가능해야 한다.

WCAG 2.2 AA 전체 검증과 스크린 리더 테스트는 각 버전 출시 전 품질 검수에서 수행한다.

## 22. Footer

Footer는 탐색 경험을 방해하지 않는 간결한 구조로 만든다.

- 상단 1px border
- background: background 또는 surface
- max-width: 1280px
- padding: mobile 48px 20px, desktop 64px 48px
- wordmark와 한 줄 설명
- Explore 링크
- MVP 2부터 My Trip 링크
- language selector 또는 현재 언어 표시
- 정적 여행 정보의 검수 한계 안내
- 필요한 법적 링크

대형 다단 링크 디렉터리, social icon 나열과 강한 dark footer는 MVP 1에 사용하지 않는다.

## 23. MVP 2 디자인 확장

MVP 1 디자인을 변경하지 않고 다음 컴포넌트를 추가한다.

### 23.1 Add to My Trip

- 상세 화면에서 Open in Maps와 구분되는 secondary action으로 제공한다.
- 필요하면 카드에 compact secondary action을 추가하되 카드 전체 링크와 interactive element를 중첩하지 않는다.
- 추가 완료 후 “Added to Day 2” / “Añadido al día 2”처럼 배정 Day를 text로 알린다.

### 23.2 My Trip 화면

- Desktop: 왼쪽 Day navigation, 오른쪽 선택 Day의 여행지 목록
- Mobile: Day별 accordion 또는 세로 section
- 각 여행지 행: thumbnail, localized name, Korean name, move Day select, 위/아래 버튼, 삭제
- Add day는 현재 마지막 Day 아래에 배치한다.
- Day 14에서는 Add day 대신 최대 일수 안내를 표시한다.
- Drag handle은 Phase 2 전에는 표시하지 않는다.
- 저장 실패 안내는 상단 status banner로 제공한다.

## 24. Phase 2 디자인 확장

### 24.1 Interactive Korea Map

- Desktop: card results와 map의 split view
- Mobile: List / Map 명시적 view switch
- 현재 결과만 pin으로 표시
- 선택 card와 pin은 accent, outline과 scale의 조합으로 연결
- pin 색상만으로 선택 여부를 전달하지 않는다.
- map loading과 error 상태에서도 list는 유지한다.
- map은 사진 중심의 기본 탐색보다 시각적으로 우선하지 않는다.

### 24.2 Drag & Drop

- Drag handle, 현재 위치 feedback과 drop target을 명확하게 표시한다.
- 키보드와 버튼 기반 이동을 계속 유지한다.
- reduced motion에서도 이동 결과를 text로 확인할 수 있어야 한다.

## 25. 피해야 할 디자인

- 전형적인 정부 관광정보 사이트처럼 보이는 많은 정보 box
- 여행 상품 판매나 예약 사이트처럼 보이는 가격·프로모션 중심 UI
- 모든 요소를 pill로 만드는 것
- 강한 drop shadow 반복
- gradient와 glassmorphism 남용
- 과도한 아이콘과 장식 badge
- 긴 텍스트를 사진 위에 overlay
- 완전한 Pinterest masonry와 무작위 DOM 재배치
- Airbnb의 검색 bar, 카드나 아이콘을 그대로 복제
- 태극, 전통 문양과 한복 패턴의 반복 장식
- 과도한 HDR과 saturation의 여행 사진
- autoplay carousel, parallax와 화려한 page transition
- 스페인어가 잘리는 고정 너비 label
- 13px보다 작은 caption
- MVP 1에서 My Trip, 내부 지도 또는 “Coming soon” 기능 노출

## 26. 구현 및 디자인 QA 체크리스트

### MVP 1

- [ ] warm neutral palette 위에서 사진이 가장 강한 시각 요소다.
- [ ] Header에는 wordmark, Explore와 EN/ES만 표시된다.
- [ ] Hero는 text + image editorial composition이며 background image overlay가 아니다.
- [ ] 검색은 첫 화면에서 명확하게 발견된다.
- [ ] Region, Theme, Season의 label과 선택 상태가 분명하다.
- [ ] 결과 개수와 Reset filters가 필터 가까이에 있다.
- [ ] 카드가 PRD의 필수 정보와 상세 CTA를 모두 표시한다.
- [ ] card grid의 DOM 순서와 키보드 순서가 일치한다.
- [ ] 상세 화면에 한국어 공식 명칭, 주소와 Copy action이 잘 보인다.
- [ ] nearest transit, operating info와 official link는 데이터가 있을 때만 표시된다.
- [ ] Open in Maps가 상세의 명확한 primary CTA다.
- [ ] English와 Español에서 줄바꿈, 버튼과 layout을 확인했다.
- [ ] mobile, tablet, desktop와 wide layout을 확인했다.
- [ ] alt text, focus, 대비, touch target과 reduced motion을 확인했다.
- [ ] 이미지 비율 사전 확보와 lazy loading을 확인했다.
- [ ] MVP 1에 My Trip과 내부 지도 UI가 없다.

### 출시 전

- [ ] WCAG 2.2 AA 대비와 keyboard flow를 검사했다.
- [ ] 스크린 리더로 검색, 필터, 카드, 상세와 복사 feedback을 확인했다.
- [ ] 실제 영어·스페인어·한국어 콘텐츠로 overflow를 검수했다.
- [ ] 저속 네트워크와 이미지 실패 상태에서 layout이 유지된다.
- [ ] 200% 확대에서 콘텐츠와 기능이 손실되지 않는다.

