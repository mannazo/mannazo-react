import React from 'react';

// {
//   "email": "string",
//   "password": "string",
// }

const LoginScreen: React.FC = () => {
  return (
    <div>
      <h1>LoginScreen.tsx</h1>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@soongo.com"
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input id="password" name="password" type="password" />
      </div>
      <button>이메일로 로그인</button>
      <button>카카오로 시작</button>
      <button>네이버로 시작</button>
      <button>구글로 시작</button>
    </div>
  );
};

export default LoginScreen;
