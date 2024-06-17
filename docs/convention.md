# 네이밍 컨벤션

1. 컴포넌트 파일 이름
   - Pascal Case를 사용합니다. (예: MyComponent.vue)
   - 파일 이름은 컴포넌트 이름과 동일해야 합니다.

2. props 이름
   - camelCase를 사용합니다. (예: myProp)
   - 컴포넌트에서 props를 선언할 때도 camelCase를 사용합니다.

3. 이벤트 이름
   - kebab-case를 사용합니다. (예: my-event)
   - 이벤트를 발생시킬 때 $emit('my-event')와 같이 사용합니다.

4. 커스텀 이벤트 이름
   - camelCase를 사용합니다. (예: myCustomEvent)
   - 커스텀 이벤트를 정의할 때 $emit('myCustomEvent')와 같이 사용합니다.

5. 슬롯 이름
   - kebab-case를 사용합니다. (예: my-slot)
   - 템플릿에서 <slot name="my-slot"></slot>과 같이 사용합니다.

6. 변수와 함수 이름
   - camelCase를 사용합니다. (예: myVariable, myFunction)
   - 컴포넌트 내부에서 사용되는 변수와 메서드에 적용됩니다.

7. CSS 클래스 이름
   - kebab-case를 사용합니다. (예: my-class)
   - 컴포넌트의 스타일을 정의할 때 사용됩니다.

8. 전역 상태 관리(Pinia) 스토어 이름
   - PascalCase를 사용합니다. (예: MyStore)
   - 스토어 파일 이름도 PascalCase를 사용합니다. (예: MyStore.js)