import React from 'react';
// import GoogleLogin from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import Logo from '/vite.svg';

const LoginScreen = () => {
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
      <div className='shadow-2xl'>
        <button type='button' className='bg-mainColor flex justify-items-center p-3 rounded-lg'>
          <FcGoogle className='mr-4' />
          Sign in
        </button>
      </div>
      <button>이메일로 로그인</button>
      <button>카카오로 시작</button>
      <button>네이버로 시작</button>
      <button>구글로 시작</button>
    </div>
  );
};

export default LoginScreen;
