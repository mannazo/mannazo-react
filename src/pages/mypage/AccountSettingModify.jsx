import {useState} from 'react';
import axios from 'axios';
import {API_SERVER} from '../../constants/paths.js';
import {INTERESTS, LANGUAGE, MBTI, NATIONALITY} from '../../constants/inputvalues.jsx';

const AccountSettingModify = ({ setIsModifyClicked, userData, setIsComplete }) => {
  const [formData, setFormData] = useState({
    ...userData,
    name: userData.name || '', // 기본값으로 빈 문자열 설정
    email: userData.email || '',
    nickname: userData.nickname || '',
    nationality: userData.nationality || '',
    language: userData.language || '',
    introduction: userData.introduction || '',
    city: userData.city || '',
    gender: userData.gender || '',
    mbti: userData.mbti || '',
    interests: userData.interests || '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSave = async () => {
    try {
    // 서버 API 엔드포인트
      const apiUrl = API_SERVER + '/api/v1/user';
      console.log('보내는 데이터:', formData);

      // API 요청 보낼 데이터
      const response = await axios.put(apiUrl, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // 요청이 성공적으로 처리된 경우
      console.log('서버 응답:', response.data);
      // 완료 상태 관리 (필요에 따라 setIsComplete 사용)
      setIsModifyClicked(false);
      setIsComplete(true); // 필요에 따라 설정
    } catch (error) {
      // 요청이 실패한 경우
      console.error('서버 요청 중 오류 발생:', error);

      if (error.response) {
        console.error('서버 응답 데이터:', error.response.data);
      }
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    onChange(value);
    setIsOpen(false); // 선택 후 드롭다운 닫기
  };

  return (
    <div className='p-4'>
      <div className='relative mb-4'>
        <label htmlFor='nickname' className='text-gray-700'>
          닉네임
        </label>
        <input
          type='text'
          id='nickname'
          className='w-full flex-1 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600'
          value={formData.nickname}
          onChange={handleChange}
        />
      </div>
      <div className='relative mb-4'>
        <label htmlFor='nationality' className='mb-2 block'>
          국적
        </label>
        <select
          name='nationality'
          onChange={handleChange}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        >
          {NATIONALITY.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>

      <div className='relative inline-block text-left'>
        <label htmlFor='nationality' className='mb-2 block'>
          국적
        </label>
        <div>
          <button
            type='button'
            className='flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-500'
            id='options-menu'
          >
            국적을 고르세요
            <svg
              width='20'
              height='20'
              fill='currentColor'
              viewBox='0 0 1792 1792'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z'></path>
            </svg>
          </button>
        </div>
        <div className='absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800'>
          <div
            className='py-1'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='options-menu'
          >
            <a
              href='#'
              className='text-md block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              role='menuitem'
            >
              <span className='flex flex-col'>
                <span>Stripe</span>
              </span>
            </a>
            <a
              href='#'
              className='text-md block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              role='menuitem'
            >
              <span className='flex flex-col'>
                <span>Mastercard</span>
              </span>
            </a>
            <a
              href='#'
              className='text-md block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              role='menuitem'
            >
              <span className='flex flex-col'>
                <span>Paypal</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className='relative mb-4'>
        <label htmlFor='city' className='text-gray-700'>
          거주지
        </label>
        <input
          type='text'
          id='city'
          className='w-full flex-1 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600'
          value={formData.city}
          onChange={handleChange}
        />
      </div>
      <div className='relative mb-4'>
        <label htmlFor='language' className='mb-2 block'>
          언어
        </label>
        <select
          name='language'
          onChange={handleChange}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        >
          {LANGUAGE.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className='relative mb-4'>
        <label htmlFor='mbti' className='mb-2 block'>
          MBTI
        </label>
        <select
          name='mbti'
          onChange={handleChange}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        >
          {MBTI.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>흥미</label>
        <div>
          {INTERESTS.map((value, index) => (
            // <label key={index}>
            //   <input type='checkbox' name='interests' value={value} />
            //   {value}
            // </label>
            //         DB interests 가 list type 으로 바뀌었을때 아래 코드로 변환 그리고 div 에 onChange 지움.
            <label key={index}>
              <input
                type='checkbox'
                name='interests'
                value={value}
                onChange={(event) => {
                  if (event.target.checked) {
                    setStoredUserInfo({
                      ...storedUserInfo,
                      interests: [...(storedUserInfo.interests || []), value],
                    });
                  } else {
                    setStoredUserInfo({
                      ...storedUserInfo,
                      interests: storedUserInfo.interests.filter((item) => item !== value),
                    });
                  }
                }}
              />
              {value}
            </label>
          ))}
        </div>
      </div>
      <div className='relative mb-4'>
        <label htmlFor='introduction' className='text-gray-700'>
          소개
        </label>
        <textarea
          id='introduction'
          rows='5' // 여기서 rows 속성을 추가하여 높이를 조절할 수 있습니다.
          className='w-full flex-1 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600'

          value={formData.introduction}
          onChange={handleChange}
        />
      </div>
      <div className='flex justify-end'>
        <button
          onClick={handleSave}
          className='mt-4 rounded-lg bg-purple-600 px-4 py-2 text-white shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50'
        >
          완료
        </button>
      </div>
    </div>
  );
};

export default AccountSettingModify;
