# 프로젝트 개발환경
- 만나조 팀의 프론트엔드 개발자들을 위한 개발환경 세팅 가이드입니다.
- 웹서버로 NGINX를 사용하고, 개발에는 React를 사용합니다.
- 백엔드 서버로의 요청은 `/api` 주소로 오고, 리버스 프록시 처리합니다.

## 생성 방법
Vite 템플릿 사용 >> React + TS + SWC
- `npm create vite@latest`
~~- [Create React App](https://create-react-app.dev/) 사용~~


## 주요 라이브러리 및 도구
- 라우팅 처리: React Router
- UI 컴포넌트 라이브러리: Material-UI
- 폼 처리: Formik, React Hook Form
- 상태 관리 라이브러리: Redux

### 버전 및 디펜던시

```json
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.23.1",
    "react-scripts": "5.0.1",
    "styled-components": "^6.1.11",
    "web-vitals": "^2.1.4"
  }
```

## 패키지 구조
```
src/
  ├── assets/
  │   ├── images/
  │   ├── styles/
  │   └── ...
  ├── components/
  │   ├── common/
  │   │   ├── Button.tsx
  │   │   ├── Input.tsx
  │   │   └── ...
  │   ├── layout/
  │   │   ├── Header.tsx
  │   │   ├── Footer.tsx
  │   │   └── ...
  │   └── ...
  ├── pages/
  │   ├── Home/
  │   │   ├── index.tsx
  │   │   ├── components/
  │   │   └── ...
  │   ├── About/
  │   │   ├── index.tsx
  │   │   ├── components/
  │   │   └── ...
  │   └── ...
  ├── services/
  │   ├── api.ts
  │   └── ...
  ├── types/
  │   ├── User.ts
  │   └── ...
  ├── utils/
  │   ├── helpers.ts
  │   └── ...
  ├── App.tsx
  └── main.tsx
```

# 개발환경 설정
## [NGINX](https://nginx.org/en/download.html) 설치 및 실행 가이드

### Windows
1. NGINX [공식 웹사이트]([NGINX](https://nginx.org/en/download.html))에서 최신 버전 다운로드
2. 다운로드한 zip 파일 압축 해제 및 원하는 위치로 이동
3. 명령 프롬프트에서 NGINX 디렉토리로 이동 후 NGINX 시작
```cmd
cd C:\nginx
start nginx
```

### MacOS
1. Homebrew를 사용하여 NGINX 설치
```bash
brew install nginx
```
2. NGINX 시작:
```
sudo nginx
```
필요시 NGINX 설정 파일을 수정합니다.
```bash
sudo nano /usr/local/etc/nginx/nginx.conf
```

---
## [npm](https://nodejs.org/en) 설치 가이드
### Windows
1. node.js를 전체 설치합니다. [다운로드 링크](https://nginx.org/en/download.html)
2. 프로젝트 디렉토리에서 개발서버를 시작합니다.
```bash
npm start
```
### MacOS
1. Homebrew를 사용해 node.js를 npm 포함하여 설치합니다.
``` bash
brew install node
```
2. 프로젝트 디렉토리에서 개발서버를 시작합니다.
```bash
npm start
```
### IDE 설정
# IntelliJ -> Prettier로 오토포매팅 필수
#### 확장 프로그램 목록
- VSCode React Refactor
- Prettier – Code formatted
- Auto Rename Tag
- Live Share
### Convention

### Code Convention
- Prettier 규칙 따를 것
- [Airbnb JS Style Guide](https://github.com/airbnb/javascript)
- [Airbnb React Style Guide](https://github.com/airbnb/javascript/blob/master/react/README.md)