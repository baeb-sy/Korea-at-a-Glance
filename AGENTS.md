# AGENTS.md — Korea at a Glance 개발 규칙

이 파일은 이 프로젝트 전체에 적용되는 Codex 작업 규칙이다. 목적은 PRD와 디자인 방향을 지키면서 MVP 1을 작고 검증 가능한 단계로 구현하는 것이다.

## 1. 문서 우선순위와 충돌 처리

개발 판단은 다음 순서로 내린다.

1. `PRD.md`
2. `DESIGN.md`
3. `AGENTS.md`
4. 기존 구현 코드

- 제품 기능, 데이터 계약과 단계별 범위는 `PRD.md`를 따른다.
- UI, 시각적 표현, 반응형 동작과 디자인 토큰은 `DESIGN.md`를 따른다.
- 이 파일은 개발 절차, 품질 기준과 작업 규율을 정의한다.
- 기존 코드가 상위 문서와 다르면 기존 동작을 제품 요구사항으로 간주하지 않는다.
- 문서 사이에 실질적인 충돌이 있으면 영향을 받는 작업을 멈추고 파일명, 관련 섹션과 충돌 내용을 먼저 보고한다. 임의의 해석으로 구현하지 않는다.
- 사용자 요청 없이 `PRD.md`나 `DESIGN.md`의 요구사항을 변경하지 않는다.
- 루트의 `AGENTS.md`가 프로젝트 전용 에이전트 규칙이다. 확장자가 중복된 이전 문서가 있더라도 이 우선순위를 변경하지 않는다.

## 2. 현재 제품과 개발 범위

현재 개발 대상은 `PRD.md`의 **MVP 1 — 여행지 탐색**뿐이다.

### MVP 1에 포함

- English 기본 UI
- Español 지원과 EN / ES 전환
- 언어 선택 localStorage 저장
- 프로젝트 내부 정적 여행지 데이터
- 키워드 검색
- 지역, 테마, 추천 계절 필터
- 결과 개수와 필터 초기화
- 사진 중심 Destination Card
- 언어와 무관한 slug 기반 Destination Detail URL
- 영어·스페인어 이름, 설명과 방문 팁
- 항상 표시하는 한국어 공식 명칭과 한국어 도로명 주소
- 검증된 경우에만 표시하는 가까운 대중교통·운영·공식 정보
- 최종 정보 검수일과 정적 정보 안내
- 외부 지도에서 열기
- 모바일, 태블릿, 데스크톱 반응형 UI
- 필수 접근성, 오류와 빈 상태

### 현재 구현 금지

- Interactive Korea Map
- 지도 핀, 핀 미리보기와 지도·카드 연동
- My Trip / My Itinerary
- Day 1~Day 14 일정 UI와 일정 localStorage
- Drag & Drop
- 사용자 계정, 로그인과 클라우드 저장
- 서버 데이터베이스
- 자동 여행 일정 추천
- 이동 시간 계산과 경로 최적화
- 실제 여행 날짜 연결
- 날씨와 실시간 교통 정보
- 음식점·숙박 추천
- 즐겨찾기, 일정 공유
- 사용자 리뷰와 평점
- 예약, 결제와 여행 상품 판매
- CMS
- 외부 관광 데이터 API

향후 확장을 막지 않는 단순한 구조는 허용하지만, 미래 기능을 위한 route, 화면, 빈 버튼, disabled CTA, 상태 저장소, dependency 또는 추상화를 미리 추가하지 않는다. 특히 MVP 1 화면에 My Trip이나 “Coming soon” 지도를 노출하지 않는다.

## 3. 작업 방식

한 번에 전체 사이트를 구현하거나 전면 rewrite하지 않는다. 작업을 작고 검증 가능한 단위로 나누고, 각 단위가 정상 작동한 것을 확인한 뒤 다음 단계로 진행한다.

### 권장 구현 순서

1. 프로젝트 구조와 기존 도구 확인
2. 공통 레이아웃과 디자인 토큰
3. Header
4. Hero와 Search 외형
5. Destination Card
6. 약 6개의 샘플 여행지 데이터
7. Destination Grid
8. 영어/스페인어 전환과 UI 문자열
9. 키워드 검색
10. 지역 필터
11. 테마 필터
12. 추천 계절 필터
13. slug 기반 Destination Detail
14. Korean Information component와 주소 복사
15. 외부 지도 및 공식 정보 링크
16. 모바일·태블릿·데스크톱 반응형 UI
17. 접근성, 빈 상태와 오류 처리
18. 데이터 검증과 최종 테스트
19. 기능 안정화 후 전체 30개 여행지 데이터 확장

각 단계에서 다음 순서를 따른다.

1. 관련 문서와 기존 코드를 먼저 읽는다.
2. 현재 단계의 완료 조건과 변경 파일을 좁게 정한다.
3. 가장 단순한 구현을 작성한다.
4. 기존 프로젝트의 검사·테스트 명령과 필요한 수동 시나리오를 실행한다.
5. 실패 원인을 해결하고 다시 검증한다.
6. 변경과 검증 결과를 짧게 보고한다.

사용자가 여러 단계를 한 번에 요청하더라도 내부적으로 위 순서대로 구현하고 단계별 동작을 확인한다. 하나의 단계가 실패한 상태에서 그 위에 다음 기능을 쌓지 않는다.

## 4. 샘플 데이터 우선

처음부터 30개 여행지 데이터를 모두 작성하지 않는다. 먼저 다음과 같은 약 6개의 대표 장소로 데이터 렌더링, 다국어, 검색, 필터와 상세 흐름을 완성한다.

- Gyeongbokgung Palace
- Bukchon Hanok Village
- N Seoul Tower
- Haeundae Beach
- Seongsan Ilchulbong
- Bulguksa Temple

이 목록은 개발용 후보이며 사실 정보가 자동으로 검증되었다는 뜻이 아니다.

- 샘플도 `PRD.md`의 `Destination`, `LocalizedText`, `Region`, `Theme`, `Season` 계약을 따른다.
- 모든 핵심 기능과 오류 상태가 샘플 데이터에서 통과한 뒤에만 30개로 확장한다.
- 정식 출시 데이터는 총 30개를 목표로 하고 6개 내부 권역을 모두 포함한다.
- 권역별 5개 균등 배분을 강제하지 않는다.
- 테스트를 위해 필요한 결측 데이터는 별도의 명확한 fixture로 표현하고 실제 콘텐츠와 섞지 않는다.

## 5. 데이터와 UI 분리

- 여행지 콘텐츠를 HTML, JSX 또는 페이지 컴포넌트 안에 직접 나열하지 않는다.
- 여행지 데이터는 별도의 정적 데이터 모듈 또는 파일에서 관리한다.
- UI는 데이터를 읽어 동적으로 카드와 상세 화면을 렌더링한다.
- 지역·테마·계절 라벨과 공통 UI 문자열은 중앙화된 다국어 리소스에서 관리한다.
- 같은 영어·스페인어 문자열을 여러 컴포넌트에 반복 hard-code하지 않는다.
- 필터 로직, 다국어 선택과 화면 표현을 한 파일에 모두 결합하지 않는다.
- 데이터베이스, 서버 API와 외부 관광 API를 추가하지 않는다.
- 실제 정적 데이터 파일 형식은 기존 프로젝트 구조를 우선하고, 아직 정해지지 않았다면 가장 단순한 JSON 또는 TypeScript 모듈을 제안한 뒤 선택 이유를 설명한다.

### 데이터 계약 준수

- 공개 후 안정적인 고유 `id`와 언어와 무관한 `slug`를 사용한다.
- `name`, `summary`, `description`, `visitTips`와 이미지 `alt`는 `en`, `es`를 제공한다.
- `koreanName`과 `koreanAddress`는 번역하지 않은 공식 한국어 원문을 저장한다.
- `region`, `themes`, `seasons`는 PRD에 정의된 enum 값만 사용한다.
- `coordinates`는 MVP 1 내부 지도에 쓰지 않지만 데이터 계약과 외부 지도 검증을 위해 유지한다.
- `nearestTransit`, `officialInfoUrl`은 선택 필드다.
- `operatingInfo`는 검증된 데이터가 없으면 `null`로 둔다.
- `externalMapUrl`은 출시 데이터에서 필수이며 검증된 `https` URL이어야 한다.
- `lastVerifiedAt`은 실제 검수일을 ISO 8601 날짜로 기록한다.

UI는 production 데이터 계약을 엄격하게 검증하면서도 개발 중 결측·손상 fixture 때문에 전체 페이지가 깨지지 않도록 방어적으로 렌더링한다.

## 6. 다국어 규칙

지원 언어는 English(`en`)와 Español(`es`)뿐이다.

- 첫 방문의 기본 언어는 브라우저 자동 감지가 아니라 **English**다.
- 사용자가 선택한 언어는 localStorage에 저장하고 재방문 시 복원한다.
- English를 번역 누락 시 fallback으로 사용한다.
- 언어 변경 시 현재 slug, 검색어와 필터 상태를 불필요하게 초기화하지 않는다.
- 한국어 공식 명칭과 한국어 주소는 선택 언어와 관계없이 원문 그대로 표시한다.
- 스페인어는 특정 국가에 치우치지 않는 중립적인 표현을 사용한다.
- 영어와 스페인어 페이지를 별도 코드베이스나 중복 컴포넌트로 만들지 않는다.
- 현재 문서 언어에 맞게 최상위 `lang`을 `en` 또는 `es`로 설정한다.
- 한국어 원명과 주소 요소에는 `lang="ko"`를 설정한다.
- 스페인어 텍스트 확장 때문에 버튼, 제목과 필터 라벨이 잘리지 않도록 고정 폭·한 줄 강제를 피한다.
- 언어 선택 UI는 EN과 ES를 모두 보이는 형태로 제공하고 현재 상태를 색상 외의 방법으로도 전달한다.

검색은 현재 언어의 여행지 이름, 한국어 공식 명칭과 현재 언어의 권역명을 대상으로 하며 대소문자를 구분하지 않는다. 필터 라벨은 PRD의 영어·스페인어 권역명과 분류명을 사용한다.

## 7. 여행지 정보의 정확성

실제 관광 정보를 추측해서 생성하지 않는다.

특히 다음 항목은 권위 있는 출처로 확인되지 않았다면 임의로 작성하지 않는다.

- 한국어 공식 명칭과 도로명 주소
- 운영 시간, 입장료와 휴무일
- 가까운 역과 대중교통 정보
- 위도·경도
- 외부 지도 URL
- 공식 정보 URL
- 최종 검수일

### 검증 규칙

- 가능하면 관광지 공식 사이트, 공공기관 또는 지도 서비스의 공식 장소 정보를 우선한다.
- 출처를 확인한 날짜를 `lastVerifiedAt`에 실제로 기록한다.
- 상충하는 출처가 있으면 더 그럴듯한 값을 골라 쓰지 말고 충돌을 보고한다.
- 검증되지 않은 값은 명확한 placeholder, `null` 또는 누락 상태로 둔다.
- placeholder를 실제 운영 정보처럼 사용자에게 표시하지 않는다.
- 개발 중 검증되지 않은 외부 URL을 임의 생성하지 않는다.
- production 데이터에서 필수 URL이 미검증이면 출시 차단 문제로 보고한다.
- 이미지의 사용 권한, 출처, crop 가능 여부와 영어·스페인어 alt text를 함께 관리한다.

## 8. 코드 품질과 구조

비전공자도 파일과 데이터 흐름을 따라갈 수 있는 단순한 구조를 우선한다.

- 기능과 역할을 설명하는 명확한 파일명, 컴포넌트명과 변수명을 사용한다.
- 함수와 컴포넌트는 한 가지 책임을 중심으로 작게 유지한다.
- 반복되는 데이터·문자열·렌더링만 의미 있게 공통화한다.
- 한 번만 쓰는 로직을 위해 범용 framework나 추상화 계층을 만들지 않는다.
- 현재 MVP 1에 필요하지 않은 hook, service, store, adapter와 utility를 미리 만들지 않는다.
- 사용하지 않는 import, 변수, 컴포넌트와 주석 처리된 코드를 남기지 않는다.
- 기존에 정상 작동하는 구조를 이유 없이 전체 rewrite하지 않는다.
- 관계없는 파일의 formatting이나 refactor를 함께 수행하지 않는다.
- 주석은 코드가 무엇을 하는지 반복하기보다 결정 이유와 중요한 제약을 설명할 때만 사용한다.
- secret, API key와 개인 환경 경로를 소스에 작성하지 않는다.

### Dependency 규칙

- 기존 dependency와 Web Platform 기능으로 해결할 수 있는지 먼저 확인한다.
- 새 library가 필요하다고 판단하면 설치 전에 목적, 대안, bundle·유지보수 영향과 필요한 이유를 설명하고 사용자 승인을 받는다.
- 단일 아이콘, 간단한 상태 관리, 작은 필터 함수나 기본 animation을 위해 큰 dependency를 추가하지 않는다.
- MVP 1에는 지도, Drag & Drop, 서버 상태 관리와 인증 library를 설치하지 않는다.

## 9. 디자인 구현 규칙

모든 UI는 `DESIGN.md`의 토큰과 컴포넌트 규칙을 따른다.

### 핵심 방향

- photography-first
- warm minimal design
- generous whitespace
- editorial visual discovery
- clear hierarchy
- rounded but not excessive
- subtle interaction
- responsive and accessible

Airbnb 또는 Pinterest의 실제 layout, 검색 UI, icon과 interaction을 복제하지 않는다. 참고 원칙만 활용한다.

### MVP 1 화면 규칙

- Header에는 wordmark, Explore와 EN / ES만 제공한다. My Trip을 표시하지 않는다.
- Desktop Header는 72px, Mobile Header는 64px 기준을 따른다.
- Hero는 full-screen image overlay가 아니라 text + image editorial composition으로 만든다.
- 검색은 첫 화면에서 명확하게 발견되어야 한다.
- Region, Theme, Season은 label이 있는 chip 그룹으로 표시한다.
- 선택 chip은 색상뿐 아니라 배경, 테두리, 굵기와 선택 상태를 함께 바꾼다.
- 카드 grid는 Mobile 1열, Tablet 2열, Desktop 3열, Wide 4열을 기본으로 한다.
- 첫 구현에서는 uniform 4:5 image grid를 사용해도 된다.
- CSS masonry와 `grid-auto-flow: dense`로 DOM·키보드 순서를 바꾸지 않는다.
- 카드에는 이미지, 지역·테마, 현재 언어 이름, 한국어 원명, 요약, 계절과 상세 CTA를 제공한다.
- 카드 전체가 링크이면 내부에 중첩 button이나 link를 넣지 않는다.
- 상세는 사진 중심 editorial guide이며 한국어 정보와 Open in Maps를 쉽게 찾을 수 있어야 한다.
- 모든 값은 가능하면 `DESIGN.md`의 color, typography, spacing, radius, shadow, container와 motion token을 사용한다.

### 시각적 금지

- 모든 요소를 pill로 만들기
- 강한 drop shadow 반복
- gradient와 glassmorphism 남용
- 과도한 icon과 badge
- 사진 위의 긴 text overlay
- autoplay carousel과 parallax
- 과도한 animation
- 정부 관광 사이트처럼 보이는 box 나열
- 예약·판매 사이트처럼 보이는 가격과 promotion UI
- 태극, 전통 문양과 한복 pattern의 반복 장식

## 10. 반응형 규칙

Desktop만 완성한 뒤 Mobile을 축소판으로 만들지 않는다. 구현 중 Mobile, Tablet과 Desktop을 함께 확인한다.

- Mobile: 0~639px, 20px gutter, 1-column grid
- Tablet: 640~1023px, 32px gutter, 2-column grid
- Desktop: 1024~1279px, 40px gutter, 3-column grid
- Wide: 1280px 이상, 최대 1280px container, 4-column grid
- 모바일에서 page 수준의 가로 스크롤을 허용하지 않는다.
- Mobile 필터 chip 그룹의 내부 가로 스크롤은 허용하되 page overflow를 만들지 않는다.
- Hero는 Mobile에서 headline → description → search → image 순서로 쌓는다.
- 상세 화면은 Mobile에서 한 column으로 표시하고 Open in Maps는 full width를 허용한다.
- hover에만 의존하는 정보나 행동을 만들지 않는다.
- 실제 영어·스페인어·한국어 콘텐츠로 overflow와 줄바꿈을 확인한다.

## 11. 접근성 규칙

가능한 한 semantic HTML을 사용하고 접근성을 기본 완료 조건으로 취급한다.

- `header`, `nav`, `main`, `section`, `article`, `footer`를 의미에 맞게 사용한다.
- heading level은 시각 크기가 아니라 문서 구조에 맞춘다.
- 의미 있는 모든 이미지에 현재 언어의 alt text를 제공한다.
- 장식 이미지는 빈 alt 또는 적절한 보조기술 제외 처리를 한다.
- 모든 핵심 기능은 키보드로 접근·실행할 수 있어야 한다.
- 모든 interactive element에 명확한 `:focus-visible` 상태를 제공한다.
- button과 link를 역할에 맞게 사용하고 clickable `div`를 만들지 않는다.
- Search에는 placeholder와 별개의 accessible label을 제공한다.
- Filter chip은 button 또는 checkbox semantics와 선택 상태를 제공한다.
- 검색 결과 개수 변경은 필요한 경우 과도하지 않은 live region으로 알린다.
- 일반 텍스트 4.5:1, 큰 텍스트와 필수 UI 그래픽 3:1 이상의 대비를 목표로 한다.
- 주요 touch target은 최소 44×44px이다.
- 색상만으로 선택, 성공과 오류 상태를 전달하지 않는다.
- `prefers-reduced-motion`을 존중한다.
- caption은 13px보다 작게 만들지 않는다.
- 200% 확대에서도 콘텐츠와 기능이 손실되지 않게 한다.

접근성 요구와 시각 디자인이 충돌하거나 큰 구현 복잡도가 예상되면 요구사항을 낮추지 말고 문제와 대안을 먼저 설명한다.

## 12. 이미지와 성능

- 사진이 핵심이지만 텍스트와 탐색 기능보다 로딩을 방해해서는 안 된다.
- Hero 핵심 이미지를 제외한 off-screen 이미지는 lazy loading한다.
- 모든 이미지에 `width`·`height` 또는 `aspect-ratio`를 지정해 layout shift를 막는다.
- 반응형 source와 적절한 압축 포맷을 사용한다.
- 카드 기본 비율은 4:5, 상세 대표 이미지는 16:9를 따른다.
- `object-fit: cover`와 장소 특징을 보존하는 `object-position`을 사용한다.
- 이미지 실패 시 동일한 비율의 placeholder와 fallback 안내를 표시한다.
- MVP 1 bundle에 지도, carousel과 무거운 animation library를 포함하지 않는다.
- Core Web Vitals의 명백한 회귀를 만들지 않는다.

## 13. 외부 링크와 보안

- 외부 지도와 공식 정보 URL은 `https`만 허용한다.
- 새 탭에서 열리는 링크에는 `noopener`, `noreferrer` 등 필요한 보안 속성을 적용한다.
- 외부 링크임을 문맥 또는 accessible label로 알린다.
- URL이 없거나 검증되지 않았으면 임의 URL을 생성하지 않는다.
- 외부 지도 URL이 없거나 유효하지 않으면 CTA를 숨기거나 비활성화하고 한국어 주소 복사 기능을 유지한다.
- 입력값과 URL을 DOM에 삽입할 때 framework의 기본 escaping을 우회하지 않는다.
- 검색어, 선택 언어와 향후 일정 원문을 분석 이벤트로 전송하지 않는다.

## 14. 오류와 빈 상태

일부 데이터나 이미지가 없어도 전체 페이지가 깨지지 않아야 한다.

반드시 고려할 상태:

- 검색·필터 결과 없음
- 정적 데이터 로딩 실패
- 존재하지 않는 slug
- 이미지 loading과 실패
- 스페인어 번역 누락
- `nearestTransit` 없음
- `operatingInfo` 없음
- `officialInfoUrl` 없음
- 외부 지도 URL 없음 또는 오류
- 언어 localStorage 읽기·쓰기 실패

처리 원칙:

- 사용자에게 stack trace, 객체 dump와 내부 오류 코드를 그대로 보여주지 않는다.
- 문제를 현재 언어로 설명하고 가능한 다음 행동을 제공한다.
- 스페인어 번역 누락은 English로 fallback하되 출시 차단 문제로 기록한다.
- 선택 데이터가 없으면 빈 card나 heading을 남기지 않고 관련 영역을 숨긴다.
- 운영 정보가 없으면 추정하지 않고 공식 정보 재확인 안내를 제공한다.
- 결과 없음 상태에는 Reset filters를 제공한다.
- 404 상세에는 Explore 복귀 CTA를 제공한다.

## 15. 테스트와 검증

작업 완료를 주장하기 전에 변경 범위에 비례해 검증한다.

### 기본 절차

1. 기존 package scripts와 테스트 도구를 확인한다.
2. 관련된 가장 작은 검사부터 실행한다.
3. typecheck, lint, unit test와 build가 구성되어 있으면 필요한 범위를 실행한다.
4. formatter가 파일을 대량 변경한다면 범위를 먼저 확인하고 관계없는 파일을 수정하지 않는다.
5. 자동화가 없는 동작은 아래 수동 시나리오로 검증한다.
6. 실패하거나 실행하지 못한 검사는 이유와 영향을 보고한다.

새 테스트 framework를 설치해 테스트가 있는 것처럼 만들지 않는다. 기존 도구가 없으면 dependency를 추가하기 전에 필요한 이유를 설명한다.

### MVP 1 핵심 시나리오

- 첫 방문이 English로 표시된다.
- EN / ES 전환과 새로고침 후 언어 복원이 동작한다.
- 언어 변경 후 검색어, 필터와 현재 slug가 유지된다.
- 6개 샘플 데이터가 중앙 데이터 모듈에서 렌더링된다.
- 검색이 현재 언어 이름, 한국어 원명과 지역명에서 동작한다.
- Region, Theme, Season 필터를 단독·조합해 사용할 수 있다.
- 같은 그룹은 OR, 다른 그룹은 AND로 적용된다.
- 결과 개수, 카드 목록과 Reset filters가 일치한다.
- 카드에서 slug 기반 상세 URL로 이동하고 직접 접근·새로고침이 된다.
- 한국어 공식 명칭과 주소가 두 언어에서 항상 표시된다.
- 선택 정보는 데이터 유무에 따라 표시되거나 영역 전체가 숨겨진다.
- 외부 지도와 공식 링크가 올바른 `https` URL을 연다.
- 결과 없음, 이미지 실패, 누락 번역과 404가 페이지를 깨뜨리지 않는다.
- Mobile, Tablet, Desktop에서 page 가로 overflow가 없다.
- keyboard, focus, alt text, touch target과 reduced motion을 확인한다.
- MVP 1에 My Trip, 내부 지도와 미래 기능 UI가 없다.

## 16. 변경 원칙

- 기능을 수정하기 전에 관련 기존 코드, 데이터와 테스트를 먼저 확인한다.
- 한 기능을 위해 관계없는 파일을 대규모로 변경하지 않는다.
- 기존에 정상 작동하는 기능을 임의로 제거하지 않는다.
- 사용자의 기존 변경을 덮어쓰거나 되돌리지 않는다.
- 요청하지 않은 rename, cleanup과 기술 교체를 함께 수행하지 않는다.
- PRD 범위를 벗어난 기능을 “더 좋아 보인다”는 이유로 추가하지 않는다.
- 코드나 데이터의 중요한 가정을 숨기지 않는다.
- 현재 단계에서 해결할 수 없는 문제를 오류를 숨겨 완료 처리하지 않는다.

## 17. 작업 후 보고

각 개발 작업이 끝나면 다음 형식으로 간단히 보고한다.

1. **변경한 파일**: 생성·수정한 파일
2. **구현한 기능**: 사용자 관점의 완료 동작
3. **테스트한 내용**: 실행한 명령과 수동 시나리오
4. **발견된 문제**: 남은 오류, 데이터 검증 또는 환경 문제
5. **아직 구현하지 않은 관련 기능**: 현재 단계 밖이거나 다음 순서의 기능
6. **사용자 확인 방법**: 필요한 경우 실행 명령, URL과 확인 단계

테스트하지 않은 항목을 테스트했다고 보고하지 않는다. 문제가 남아 있다면 범위와 영향을 명확히 설명한다.

## 18. 금지 사항

- PRD에 없는 기능 임의 추가
- MVP 2, Phase 2 또는 Future 기능 선행 구현
- 실제 관광 정보 추측
- 검증되지 않은 주소, 좌표와 URL 생성
- 한 번에 전체 프로젝트 rewrite
- 필요 없는 library와 dependency 설치
- 과도한 animation과 abstraction
- 30개 여행지 데이터를 HTML/JSX 안에 직접 작성
- 영어·스페인어 페이지를 별도 코드베이스로 복제
- DOM 순서를 바꾸는 masonry 구현
- 모바일 검증 없이 Desktop만 완료
- 접근성 상태와 오류 처리 생략
- 사용자 변경이나 정상 기능을 알리지 않고 제거
- 실패한 검사와 미해결 오류를 숨기고 완료 보고

## 19. 완료 정의

작업은 다음 조건을 모두 만족해야 완료다.

- 요청 범위가 MVP 1 안에 있다.
- 관련 PRD 요구사항과 DESIGN 규칙을 충족한다.
- 데이터와 UI, 다국어 문자열이 적절히 분리되어 있다.
- 검증되지 않은 관광 정보를 실제 데이터처럼 표시하지 않는다.
- 해당 변경에 필요한 responsive·accessibility·error 상태를 처리했다.
- 기존 프로젝트에서 가능한 관련 검사와 테스트를 통과했다.
- 관계없는 파일을 수정하지 않았다.
- 변경, 테스트와 남은 문제를 정확히 보고했다.

