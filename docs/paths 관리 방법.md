# paths 관리하기
URL 경로를 만들 때 사용하는 paths 상수를 관리하는 방법에 관한 문서입니다.

# paths.js
## 작성 방법
- `src/constants/paths.th`에서 url을 만들기 위한 경로들을 관리합니다.
- `URL Parameter`가 있는 경우 `:URLParam`과 같이 앞에 `:`를 붙여줍니다.
- 값은 URL이므로 `kebab-case`로 작성해주세요.
- 변수명은 상수이므로 `UPPER_CASE_WITH_SNAKE_CASE`로 작성해주세요.
### Nested Routing 을 위한 작성법
`절대 경로`를 적지 말고, **문자열을 합치는 방식**으로 만들어주세요.
```typescript
export const HOME = '/';
export const ABOUT = '/about';
export const CONTACT = '/contact';

export const PRODUCTS = '/products';
export const PRODUCT_DETAIL = `${PRODUCTS}/:id`;
export const PRODUCT_DETAILS = `${PRODUCT_DETAIL}/details`;
export const PRODUCT_REVIEWS = `${PRODUCT_DETAIL}/reviews`;
```
# 사용 방법
- 컴포넌트에서 paths.ts를 import 합니다.
- 템플릿에 경로 상수를 중괄호`{}`를 통해 사용합니다.
- URL 파라미터를 사용하는 경우 `useParams` 훅을 사용합니다.
```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import * as PATHS from './constants/paths';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={PATHS.HOME}>Home</Link>
        </li>
        <li>
          <Link to={PATHS.ABOUT}>About</Link>
        </li>
        <li>
          <Link to={PATHS.CONTACT}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
```
