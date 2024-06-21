import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import Logo from '/vite.svg';
import axios from 'axios';
import { API_SERVER } from '../constants/paths.js';

const LoginScreen = () => {
  const openPopup = (url) => {
    window.open(url, 'newWindow', 'width=800, height=600');
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(API_SERVER + '/login/kakao');
      return response.data;
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
    }
  };

  const onKakaoButtonClick = async () => {
    const url = await fetchData();
    openPopup(url);
  };
  return (
    <div className='flex justify-center items-center flex-col h-screen'>
      <div className='p-5'>
        <img src={Logo} />
      </div>

      <div className='p-5'>
        <label htmlFor='email'>이메일</label>
        <input id='email' name='email' type='email' placeholder='example@soongo.com' />
      </div>

      <div>
        <label htmlFor='password'>비밀번호</label>
        <input id='password' name='password' type='password' />
      </div>
      <button>이메일로 로그인</button>
      <div className='shadow-2xl'>
        <button type='button' className='bg-mainColor flex justify-items-center p-3 rounded-lg'>
          <FcGoogle className='mr-4' />
          Sign in
        </button>
      </div>

      <button onClick={onKakaoButtonClick}>KaKao</button>
      <button>네이버로 시작</button>
    </div>
  );
};

export default LoginScreen;
