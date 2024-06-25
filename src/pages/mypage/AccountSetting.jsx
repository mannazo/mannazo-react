import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import AccountSettingModify from './AccountSettingModify.jsx'

const AccountSetting = () => {
  let userinfo = JSON.parse(localStorage.getItem('fetchCodeResponse'));
  console.log(userinfo);

  const navigate = useNavigate();

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
    console.log("button on");
    navigate('../AccountSettingModify')
  };

  return (
    <>
      <div>
        <h1>계정설정</h1>
      </div>
      <div>
        <div>
          <label htmlFor='name'>이름: {userinfo.name}</label>
        </div>
        <div>
          <label htmlFor='email'>이메일: {userinfo.email}</label>
        </div>
        <div>
          <label htmlFor='password'>비밀번호: {userinfo.password}</label>
        </div>
        <div>
          <label htmlFor='nickname'>닉네임: {userinfo.nickname}</label>
        </div>
        <div>
          <label htmlFor='nationality'>국적: {userinfo.nationality}</label>
        </div>
        <div>
          <label htmlFor='language'>언어: {userinfo.language}</label>
        </div>
        <div>
          <label htmlFor='introduction'>소개: {userinfo.introduction}</label>
        </div>
        <div>
          <label htmlFor='city'>거주지: {userinfo.city}</label>
        </div>
        <div>
          <label htmlFor='gender'>성별: {userinfo.gender}</label>
        </div>
        <div>
          <label htmlFor='mbti'>MBTI: {userinfo.mbti}</label>
        </div>
        <div>
          <label htmlFor='interests'>흥미: {userinfo.interests}</label>
        </div>
        <button onClick={handleSubmit}>계정변경</button>
        {/*<p>{JSON.stringify(userInfo)}</p>*/}
      </div>
    </>
  );
};

export default AccountSetting;
