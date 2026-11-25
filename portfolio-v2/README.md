# 김상연 포트폴리오 V2

기존 포트폴리오와 분리된 정적 사이트입니다. 원본 파일은 수정하지 않았습니다.

- `dist/index.html`: V2 홈
- `dist/assets/style.css`: 반응형 스타일과 애니메이션
- `dist/assets/main.js`: 스크롤 연출, 필터, 이메일 복사
- `dist/projects/`: V2 상세 페이지 8개
- `build.py`: 원본 내용을 읽어 상세 페이지 생성

미리보기: 이 폴더에서 `python3 -m http.server 4173 --directory dist`를 실행하고 http://localhost:4173 을 엽니다.

별도의 패키지 설치 없이 dist 폴더를 정적 호스팅할 수 있습니다. 시스템의 동작 줄이기 설정을 지원합니다. Pretendard 웹폰트를 사용할 수 없으면 시스템 글꼴로 표시됩니다.

출시 상태와 이력은 기존 포트폴리오 기록을 기준으로 옮겼습니다. 수정할 때 상세 페이지 원문과 홈 문구를 함께 확인하세요.

LLM 연구 상세 페이지는 `content/llm-prompt-cost.html`에서 관리합니다. `build.py`는 V1의 금융 연구를 제외하고 V2 전용 연구 페이지를 복사합니다. 포스터 원본은 `dist/assets/documents/kiie2026-llm-poster.pdf`이며 발표 일정(2026-12-03)은 사용자 제공 정보입니다.

배민아카데미 강의 이력은 `content/baemin-academy.html`에서 관리하며 배포본은 `dist/projects/baemin-academy.html`입니다. 공식 교육 안내의 담당 일정(2026.11.16·18·23·25, 3–6회차)과 사용자 제공 수업자료를 바탕으로 구성했습니다. 사진 3장은 `dist/assets/images/baemin-academy/`에 웹용으로 최적화했습니다.

GitHub 배포본의 연구활동증명서는 본인 전용 Sites 링크로 연결합니다. 증명서 PDF 원문은 이 공개 저장소에 포함하지 않습니다.
