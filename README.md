# Sangyeon Kim — Personal Portfolio

산업공학, 데이터, 제품 개발, 인간중심설계, 창업 활동을 기록하는 김상연의 개인 포트폴리오입니다.

## 기술 스택

- HTML
- CSS
- Vanilla JavaScript
- 외부 런타임 및 라이브러리 의존성 없음

## GitHub Pages 배포

1. 이 폴더의 파일을 GitHub Repository의 기본 브랜치에 push합니다.
2. GitHub Repository의 **Settings → Pages**로 이동합니다.
3. **Build and deployment → Source**에서 **Deploy from a branch**를 선택합니다.
4. 배포 브랜치로 `main`, 폴더로 `/ (root)`를 선택하고 저장합니다.
5. 잠시 후 생성된 GitHub Pages 주소에서 사이트를 확인합니다.

`index.html`이 저장소 루트에 있고 `.nojekyll` 파일이 포함되어 있어 별도 빌드 과정 없이 배포할 수 있습니다.

## 프로젝트 추가 방법

1. `assets/js/data.js`의 `ko.projects`, `en.projects` 배열에 새 프로젝트 객체를 각각 추가합니다.
2. `id`와 연결할 상세 페이지 파일명(`projects/<id>.html`)을 정합니다.
3. `projects/` 안에 기존 상세 페이지를 복사해 새 프로젝트 내용을 작성합니다.
4. 프로젝트의 `title`, `description`, `category`, `period`, `tags`, `visual` 값을 수정합니다.
5. 결과물이나 수치가 확정되지 않은 경우 임의로 채우지 말고 `TODO` 또는 플레이스홀더로 남겨주세요.

## 한국어 / 영어 콘텐츠 관리

- 정적 HTML 문구에는 `data-i18n="번역키"`를 사용하고, 영어 번역은 `assets/js/i18n.js`에서 관리합니다.
- `alt`, `aria-label`, `title`, 메타 설명 같은 속성은 `data-i18n-attr="속성명:번역키"` 형식으로 연결합니다.
- 홈의 프로젝트·경력·수상 등 동적 목록은 `assets/js/data.js`의 `ko`, `en` 데이터에서 관리합니다.
- 사용자가 선택한 언어는 `localStorage`의 `portfolio-language` 키에 저장되며, 최초 방문 기본값은 한국어입니다.

## 연락처 및 개인 정보 수정

- GitHub 주소: `https://github.com/anysicha`
- 이메일: `anysicha@naver.com`
- Instagram: `https://www.instagram.com/top_year17/`
- 프로필 이미지: 이미지가 준비되면 `assets/images/profile.jpg`를 추가하고 `index.html`의 플레이스홀더 영역을 이미지로 교체
