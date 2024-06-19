import React from 'react';
import { useNavigate } from 'react-router-dom';
// 사용자 정보

// {
//   "email": "string",
//   "password": "string",
//   "name": "string",
// }

const SignupScreen: React.FC = () => {
    const navigate = useNavigate();

    const goToSignup2Screen = () => {
        navigate('../Pages/Signup2Screen')}

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
        <input id="password" type="password" />
        {/* <span>비밀번호를 입력해주세요.</span> */}
      </div>
      <button onClick={goToSignup2Screen}>다음</button>
    </div>
  );
};

export default SignupScreen;
