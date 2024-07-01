import {useEffect, useState} from 'react';
import axios from 'axios';
import {API_SERVER} from '../../constants/paths.js';
import AccountSettingModify from './AccountSettingModify.jsx';

const AccountSetting = () => {
  // 사용자가 계정 변경 버튼 눌렀는지에 대한 상태
  const [isModifyClicked, setIsModifyClicked] = useState(false);

  // 유저의 데이터를 서버에서 가져와서 초기화
  const [userData, setUserData] = useState(null); // 초기값 null로 설정

  useEffect(() => {
    // 로컬스토리지에서 uuid 값을 가져옵니다.
    const userId = JSON.parse(localStorage.getItem('uuid'));

    // 여기서 서버에서 데이터를 가져옵니다.
    const fetchUserData = async () => {
      if (userId !== null) {
        try {
          const response = await axios.get(`${API_SERVER}/api/v1/user/${userId}`);
          setUserData(response.data); // 서버에서 받은 데이터를 상태에 저장합니다.
        } catch (error) {
          console.error('서버에서 사용자 데이터를 가져오는 중 오류 발생:', error);
        }
      }
    };

    fetchUserData(); // 데이터 가져오기 함수 호출
  }, []);

  // AccountSetting 컴포넌트를 렌더링하는 함수
  const renderAccountSetting = () => (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='mb-8 text-center text-4xl font-bold'>계정설정</h1>
      {userData ? (
        <div>
          <div className='mb-4'>
            <div className='mb-2 flex items-center justify-between'>
              <label htmlFor='name' className='font-semibold text-gray-700'>
                이름:
              </label>
              <p className='text-gray-900'>{userData.name}</p>
            </div>
            <div className='mb-2 flex items-center justify-between'>
              <label htmlFor='email' className='font-semibold text-gray-700'>
                이메일:
              </label>
              <p className='text-gray-900'>{userData.email}</p>
            </div>
            <div className='mb-2 flex items-center justify-between'>
              <label htmlFor='nickname' className='font-semibold text-gray-700'>
                닉네임:
              </label>
              <p className='text-gray-900'>{userData.nickname}</p>
            </div>
            <div className='mb-2 flex items-center justify-between'>
              <label htmlFor='nationality' className='font-semibold text-gray-700'>
                국적:
              </label>
              <p className='text-gray-900'>{userData.nationality}</p>
            </div>
            <div className='mb-2 flex items-center justify-between'>
              <label htmlFor='city' className='font-semibold text-gray-700'>
                거주지:
              </label>
              <p className='text-gray-900'>{userData.city}</p>
            </div>
            <div className='mb-2 flex items-center justify-between'>
              <label htmlFor='language' className='font-semibold text-gray-700'>
                언어:
              </label>
              <p className='text-gray-900'>{userData.language}</p>
            </div>
            <div className='mb-2 flex items-center justify-between'>
              <label htmlFor='mbti' className='font-semibold text-gray-700'>
                MBTI:
              </label>
              <p className='text-gray-900'>{userData.mbti}</p>
            </div>
            <div className='mb-2 flex items-center justify-between'>
              <label htmlFor='interests' className='font-semibold text-gray-700'>
                흥미:
              </label>
              <p className='text-gray-900'>{userData.interests}</p>
            </div>
            <div className='mb-2 flex items-center justify-between'>
              <label htmlFor='introduction' className='font-semibold text-gray-700'>
                소개:
              </label>
              <p className='text-gray-900'>{userData.introduction}</p>
            </div>
          </div>
          <div className='flex justify-end'>
            <button
              onClick={() => setIsModifyClicked(true)}
              className='mt-4 rounded-lg bg-purple-600 px-4 py-2 text-white shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50'
            >
              계정 변경
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );

  return (
    // isModifyClicked 상태에 따라 다른 컴포넌트를 렌더링
    isModifyClicked ? (
      <AccountSettingModify
        setIsModifyClicked={setIsModifyClicked}
        userData={userData}
        setIsComplete={true}
      />
    ) : (
      renderAccountSetting()
    )
  );
};

export default AccountSetting;
