# React + TypeScript 프로젝트에 Tailwind CSS를 적용하는 방법

1. 프로젝트에 Tailwind CSS 관련 패키지를 설치합니다.
```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

2. Tailwind CSS 설정 파일을 생성합니다.
```bash
npx tailwindcss init -p
```
위 명령어를 실행하면 `tailwind.config.js`와 `postcss.config.js` 파일이 생성됩니다.

3. `tailwind.config.js` 파일을 열어 `content` 옵션을 설정합니다.
```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
위 설정은 프로젝트의 `index.html`과 `src` 디렉토리 내의 모든 `.js`, `.ts`, `.jsx`, `.tsx` 파일에서 Tailwind CSS 클래스를 추출하도록 지정합니다.

4. `./src/index.css` 파일을 생성하고 다음 내용을 추가합니다.
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. `./src/main.tsx` 파일에서 `index.css`를 import합니다.
```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

6. 개발 서버를 실행하고 Tailwind CSS 클래스를 사용할 수 있습니다.
```bash
npm run dev
```

이제 React 컴포넌트에서 Tailwind CSS 클래스를 사용할 수 있습니다. 예를 들면 다음과 같이 사용할 수 있습니다.

```tsx
function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center">Hello, Tailwind CSS!</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
  )
}

export default App
```

위의 단계를 따라 Vite로 생성한 React + TypeScript 프로젝트에 Tailwind CSS를 적용할 수 있습니다. Tailwind CSS 클래스를 사용하여 스타일을 적용하고, 필요에 따라 `tailwind.config.js` 파일에서 추가 설정을 할 수 있습니다.