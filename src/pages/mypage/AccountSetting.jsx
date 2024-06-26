import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AccountSettingModify from './AccountSettingModify.jsx';
import axios from 'axios';

const AccountSetting = () => {
  // 사용자가 계정 변경 버튼 눌렀는지에 대한 상태
  const [isModifyClicked, setIsModifyClicked] = useState(false);

  // 유저의 데이터를 로컬스토리지에서 가져와서 초기화
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('fetchCodeResponse')));
  true;

  // const [userData, setUserData] = useState(null); // 초기값을 null로 설정

  const [isComplete, setIsComplete] = useState(false);

  console.log(userData);

  useEffect(() => {
    // 로컬스토리지에서 userId 값을 가져옵니다.
    const userId = JSON.parse(localStorage.getItem('fetchCodeResponse')).user_id;

    // userId가 존재하면 데이터를 가져오는 API 요청을 보냅니다.
    if (userId) {
      // 컴포넌트가 마운트될 때 한 번 실행됩니다.
      // 여기서 서버에서 데이터를 가져옵니다.
      const fetchUserData = async () => {
        try {
          const response = await axios.get('http://api.mannazu.com/api/v1/user/{userDate.userId}'); // 실제 API 엔드포인트로 변경해야 합니다.
          setUserData(response.data); // 서버에서 받은 데이터를 상태에 저장합니다.
        } catch (error) {
          console.error('서버에서 사용자 데이터를 가져오는 중 오류 발생:', error);
          // 오류 처리 (예: 사용자에게 오류 메시지 표시)
        }
      };

      fetchUserData(); // 데이터 가져오기 함수 호출
    }

    // 로컬 스토리지에서 데이터를 가져오는 것과는 달리 비동기 함수를 사용하여 서버에서 데이터를 가져옵니다.
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정합니다.

  console.log(userData);

  return (
    <>
      <div>
        <h1 style={{ fontSize: '20px' }}>계정설정</h1>
      </div>
      {userData ? (
        // userData가 null이 아니면(서버에서 데이터를 받은 경우)
        isModifyClicked ? (
          <AccountSettingModify
            setIsModifyClicked={setIsModifyClicked}
            userData={userData}
            setIsComplete={setIsComplete}
          />
        ) : (
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
            <button
              onClick={() => {
                setIsModifyClicked(true);
              }}
            >
              계정변경
            </button>
          </div>
        )
      ) : (
        // userData가 null인 경우(서버에서 데이터를 아직 받지 않은 경우)
        <p>Loading...</p>
      )}
    </>
  );
};

export default AccountSetting;
