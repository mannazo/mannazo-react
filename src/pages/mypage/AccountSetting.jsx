import { useState } from 'react';

const AccountSetting = () => {
  let userinfo = JSON.parse(localStorage.getItem('fetchCodeResponse'));
  console.log(userinfo);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [nationality, setNationality] = useState('');
  const [language, setLanguage] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [mbti, setMbti] = useState('');
  const [interests, setInterests] = useState('');
  const [lastLoginAt, setLastLoginAt] = useState('');
  const userInfo = {
    name,
    email,
    password,
    nickname,
    nationality,
    language,
    profileImage,
    introduction,
    city,
    gender,
    mbti,
    interests,
    lastLoginAt,
  };

  const handleSubmit = () => {
    console.log(name, email, password);
  };

  return (
    <>
      <div>
        <h1>계정설정</h1>
      </div>
      <div>
        <div>
          <label htmlFor='name'>이름</label>
          <input
            id='name'
            type='text'
            placeholder='이름(실명)을 입력해주세요'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='email'>이메일</label>
          <input
            id='email'
            type='email'
            placeholder='example@soongo.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>비밀번호</label>
          <input
            id='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>다음</button>
        <p>{JSON.stringify(userInfo)}</p>
      </div>
    </>
  );
};

export default AccountSetting;
