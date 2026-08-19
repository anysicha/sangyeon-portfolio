const projects = [
  {
    id: "omnibus",
    title: "omniBUS",
    description: "심야 시간대 서울에서 경기권으로 이동하는 사람들의 귀가 문제에서 출발한 서비스.",
    category: "Product",
    type: "Mobility",
    period: "기간 입력 필요",
    tags: ["Flutter", "Firebase", "User Research"],
    visual: "omnibus",
    visualLabel: "Late-night mobility",
    featured: true,
  },
  {
    id: "mom-map",
    title: "맘편할 지도",
    description: "서울어린이대공원 이용 가족을 위한 AI 기반 맞춤형 이동 동선 서비스.",
    category: "Product",
    type: "AI · UX",
    period: "참여중",
    tags: ["AI", "Route Optimization", "Data", "Human-Centered Design", "Family"],
    visual: "mom-map",
    visualLabel: "A calmer route",
    featured: true,
  },
  {
    id: "greencity-ai",
    title: "GreenCity AI",
    description: "도시열섬 완화를 위한 AI 기반 녹화 추천 서비스",
    category: "Data",
    displayCategory: "AI · Data · Environment",
    type: "AI · Data · Environment",
    period: "2026.06.05",
    award: "2026년 AI·SW 융합 페스티벌 장려상",
    tags: ["AI", "Data", "Environment"],
    visual: "greencity",
    visualLabel: "Cooler city, greener choices",
    featured: true,
  },
  {
    id: "finance",
    title: "금융 데이터 분석 / 연구",
    description: "KOSPI200, ETF, Futures 등의 데이터를 활용한 금융 데이터 분석 및 연구 프로젝트.",
    category: "Data",
    type: "Research",
    period: "기간 입력 필요",
    tags: ["Python", "Financial Data", "Statistics"],
    visual: "finance",
    visualLabel: "Signals in data",
    featured: true,
  },
  {
    id: "ai-education",
    title: "경기도서관 AI 썸머스쿨 교육 멘토",
    description: "2026.08 · Education / Mentoring",
    category: "Education",
    type: "Mentoring",
    period: "2026.08",
    tags: ["Education", "Mentoring"],
    visual: "ai-education",
    visualLabel: "Education & mentoring",
    featured: false,
  },
];

const highlights = [
  { number: "01", title: "공군 조종장학생", period: "2024 — Present", description: "공군 조종장학생으로 선발되어 현재 자격 유지 중." },
  { number: "02", title: "인간중심설계 연구실 조교", period: "2025.05.01 — Present", description: "Human-Centered Design / Research" },
  { number: "03", title: "FINDS LAB 인턴 2기", period: "2026.05.01 — Present", description: "현재 진행 중인 인턴 경험." },
  { number: "04", title: "2026년 AI·SW 융합 페스티벌 장려상", period: "2026.06.05", description: "AI·SW 융합 페스티벌 장려상" },
  { number: "05", title: "경기실록지리지 우수상", period: "2026.07.06 — 2026.07.24", description: "경기실록지리지 우수상" },
  { number: "06", title: "KVS 10기 성장팀 선정", period: "2024.11.18 — 2024.12.13", description: "KVS(KHU Valley Start-up) 10기 성장팀 · 사업자금 300만원 지원" },
];

const experiences = [
  { title: "경기도서관 AI 썸머스쿨 교육 멘토", period: "2026.08", category: "Education / Mentoring", link: "projects/ai-education.html" },
  { title: "FINDS LAB 인턴 2기", period: "2026.05.01 — Present", category: "Internship" },
  { title: "경희대학교 자율전공학부 멘토", period: "2026-1", category: "Mentoring" },
  { title: "인간중심설계 연구실 조교", period: "2025.05.01 — Present", category: "Human-Centered Design / Research" },
  { title: "GS 산학 마케팅", period: "2024.11.06 — 2024.12.31", category: "Industry / Marketing" },
  { title: "공군 조종장학생", period: "2024 — Present", category: "Personal profile" },
];

const awards = [
  { date: "2026.07.06 — 2026.07.24", title: "경기실록지리지", award: "우수상" },
  { date: "2026.06.05", title: "2026년 AI·SW 융합 페스티벌", award: "장려상", projectTitle: "GreenCity AI", projectLink: "projects/greencity-ai.html" },
  { date: "2025.05.09", title: "경희대학교 공과대학 캐치프라이즈 공모전", award: "최우수상" },
  { date: "2024.12.27", title: "2024 FLIP DEMO DAY", subtitle: "경희대학교 벤처 창업동아리 대회", award: "우수상" },
];

const activities = [
  { title: "언론지대", period: "2026-1", category: "부회장", flow: "총무 → 부회장", previous: "2025-2 총무" },
  { title: "2026 총학생회 선거운동 관리본부", period: "2026", category: "활동" },
];

const competitions = [
  { date: "2026.02.04", title: "2026 식용곤충 활용 레시피 공모전", result: "본선 진출" },
  { date: "진행 중", title: "어린이대공원 공모전", result: "참여중" },
];

const programs = [
  { date: "2025.01.07 — 2025.01.09", title: "정부창업 지원사업 대비반" },
  { date: "2024.12.27", title: "2024 FLIP DEMO DAY", detail: "경희대학교 벤처 창업동아리 대회 · 우수상" },
  { date: "2024.11.18 — 2024.12.13", title: "KVS(KHU Valley Start-up) 10기 성장팀", detail: "사업자금 300만원 지원" },
];

const education = [
  { date: "현재", title: "경희대학교", detail: "산업경영공학과 · Industrial Engineering" },
  { date: "2024.08.05 — 2024.08.06", title: "데이터 안심구역 분석캠프 초급과정", detail: "수료" },
];

const certifications = [
  { title: "생활스포츠지도사 2급" },
  { title: "자동차운전면허 1종 보통" },
];
