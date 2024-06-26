import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AccountSettingModify from './AccountSettingModify.jsx'

const AccountSetting = () => {
  // 사용자가 계정 변경 버튼 눌렀는지에 대한 상태
  const [isModifyClicked, setIsModifyClicked] = useState(false);
  // 유저의 데이터를 로컬스토리지에서 가져와서 초기화
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('fetchCodeResponse')));
  // true
  const [iscomplite, setIscomplite] = useState(false);

  console.log(userData);

  return (
      <>
        <div>
          <h1 style={{fontSize: '20px'}}>계정설정</h1>
        </div>
        {isModifyClicked ?
            <AccountSettingModify setIsModifyClicked={setIsModifyClicked} userData={userData} setIscomplite={setIscomplite}/>
            :
            <div>
              <div>
                <label htmlFor='name'>이름: {userData.name}</label>
              </div>
              <div>
                <label htmlFor='email'>이메일: {userData.email}</label>
              </div>
              <div>
                <label htmlFor='password'>비밀번호: {userData.password}</label>
              </div>
              <div>
                <label htmlFor='nickname'>닉네임: {userData.nickname}</label>
              </div>
              <div>
                <label htmlFor='nationality'>국적: {userData.nationality}</label>
              </div>
              <div>
                <label htmlFor='language'>언어: {userData.language}</label>
              </div>
              <div>
                <label htmlFor='introduction'>소개: {userData.introduction}</label>
              </div>
              <div>
                <label htmlFor='city'>거주지: {userData.city}</label>
              </div>
              <div>
                <label htmlFor='gender'>성별: {userData.gender}</label>
              </div>
              <div>
                <label htmlFor='mbti'>MBTI: {userData.mbti}</label>
              </div>
              <div>
                <label htmlFor='interests'>흥미: {userData.interests}</label>
              </div>
              <button onClick={() => {
                setIsModifyClicked(true)
              }}>계정변경
              </button>
            </div>
        }
      </>
  );
};

export default AccountSetting;