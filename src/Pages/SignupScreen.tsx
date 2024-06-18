import React from 'react';

const SignupScreen: React.FC = () => {
  return (
    <div>
      <div>
        <label htmlFor="name">이름</label>
        <input id="name" type="text" placeholder="이름(실명)을 입력해주세요" />
        {/* <span>이름을 입력해주세요.</span> */}
      </div>
      <div>
        <label htmlFor="email">이메일</label>
        <input id="email" type="email" placeholder="example@soongo.com" />
        {/* <span>이메일 주소를 입력해주세요.</span> */}
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          placeholder="영문,숫자 조합 8자리 이상 입력해주세요. 꼭!"
        />
        {/* <span>비밀번호를 입력해주세요.</span> */}
      </div>
      <button>다음</button>
    </div>
  );
};

export default SignupScreen;
