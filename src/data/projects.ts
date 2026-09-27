export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  year: string;

  image?: string;
  period: string;
  team: string;
  role: string;

  github?: string;

  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 1,

    title: "OpenMind",

    category: "TEAM PROJECT · FRONTEND",

    description:
      "익명성을 기반으로 질문과 답변을 주고받을 수 있는 웹 애플리케이션입니다.",

    tech: [
      "TypeScript",
      "React",
    ],

    year: "2024",

    period: "2024.10 — 2024.11",

    team: "Frontend 5명",

    role: "Frontend Developer",

    github:
      "https://github.com/fe11-part2-team8/openmind",

    highlights: [
      "로컬 상태를 활용하여 즉각적인 UI 반응 구현",
      "API 요청을 최소화하여 불필요한 네트워크 요청 감소",
      "useMemo와 useCallback을 활용한 렌더링 최적화",
      "커스텀 훅을 활용한 로직 재사용",
      "JSDoc을 활용한 코드 가독성 향상",
    ],
  },

  {
    id: 2,

    title: "Linkbrary",

    category: "TEAM PROJECT · FRONTEND",

    description:
      "링크 공유와 커뮤니티 기능을 중심으로 구성된 SNS 형태의 웹 애플리케이션입니다.",

    tech: [
      "TypeScript",
      "React",
      "Next.js",
    ],

    year: "2024 — 2025",

    period: "2024.12 — 2025.01",

    team: "Frontend 4명",

    role: "Frontend Developer",

    github:
      "https://github.com/codeit-fe11-part3-team4/linkbrary",

    highlights: [
      "React.memo와 useCallback을 활용한 렌더링 최적화",
      "Intersection Observer를 활용한 Lazy Loading 구현",
      "링크 공유 및 커뮤니티 CRUD 기능 구현",
      "Next.js 기반의 반응형 UI 개발",
    ],
  },

  {
    id: 3,

    title: "Coworkers",

    category: "TEAM PROJECT · FRONTEND",

    description:
      "실제 업무 프로세스에 맞춰 업무를 생성하고 공유하며 진행 현황을 관리할 수 있는 To-do 서비스입니다.",

    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "Storybook",
    ],

    year: "2025",

    period: "2025.01 — 2025.02",

    team: "Frontend 5명",

    role: "Frontend Developer",

    github:
      "https://github.com/Team-7-Coworkers/coworkers",

    image:
      "/projects/coworkers/cover.png",

    highlights: [
      "Storybook을 활용한 공통 컴포넌트 관리 및 문서화",
      "전체 API 함수 구현",
      "이미지 업로드 공통 컴포넌트 구현",
      "자유게시판 페이지 개발",
      "Sharp를 활용한 이미지 최적화",
    ],
  },

  {
    id: 4,

    title: "창업 업종 및 프랜차이즈 추천",

    category: "PERSONAL PROJECT · FULL STACK",

    description:
      "상권·인구·결제 데이터를 분석하여 지역별 유망 업종과 프랜차이즈를 추천하는 위치 기반 창업 추천 애플리케이션입니다.",

    tech: [
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    year: "2025",

    period: "2025.07 — 2025.12",

    team: "개인 프로젝트",

    role: "Full Stack Developer",

    github:
      "https://github.com/gachisangga/gachisanga",

    highlights: [
      "카카오 상권 데이터를 활용한 지역 데이터 수집",
      "주소를 좌표로 변환하고 반경 내 POI 조회 기능 구현",
      "상권·인구·결제 데이터를 결합한 추천 로직 구현",
      "Trend / Gap 전략에 따른 유망 업종 추천",
      "추천 결과와 상권 요약 및 주변 업종 데이터를 시각화",
    ],
  },

  {
    id: 5,

    title: "판다마켓",

    category: "PERSONAL PROJECT · FRONTEND",

    description:
      "상품 등록부터 구매와 판매까지의 과정을 직관적으로 관리할 수 있는 중고 마켓 플랫폼입니다.",

    tech: [
      "TypeScript",
      "React",
      "Next.js",
    ],

    year: "2024 — 2025",

    period: "2024.07 — 2025.02",

    team: "개인 프로젝트",

    role: "Frontend Developer",

    highlights: [
      "기존 HTML 구조를 React 기반으로 전환",
      "dangerouslySetInnerHTML과 createRoot를 활용한 기존 구조 처리",
      "상품 등록 및 거래 흐름을 고려한 UI 구현",
    ],
  },
];