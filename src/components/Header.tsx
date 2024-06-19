import React from 'react';
import '../style/Header.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <>
      <header>
        <nav className='bg-white dark:bg-gray-800  '>
          <div className='px-8 mx-auto max-w-7xl'>
            <div className='flex items-center justify-between h-16'>
              <div className=' flex items-center'>
                <a className='flex-shrink-0' href='/'>
                  <img className='w-8 h-8' src='../assets/react.svg' alt='Workflow' />
                </a>
                <Menus />
              </div>
              <div className='block'>
                <div className='flex items-center ml-4 md:ml-6'></div>
              </div>
              <div className='flex -mr-2 md:hidden'>
                <button className='text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none'>
                  <svg
                    width='20'
                    height='20'
                    fill='currentColor'
                    className='w-8 h-8'
                    viewBox='0 0 1792 1792'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z'></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              <a
                className='text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                href='/#'
              >
                Home
              </a>
              <a
                className='text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium'
                href='/#'
              >
                Gallery
              </a>
              <a
                className='text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                href='/#'
              >
                Content
              </a>
              <a
                className='text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                href='/#'
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      <header className='bg-gray-900 text-white py-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='text-2xl font-bold'>{/* <a href="#">프로필</a> */}</div>
        </div>
      </header>
    </>
  );
};

const Menus: React.FC = () => {
  return (
    <div className='hidden md:block'>
      <div className='flex items-baseline ml-10 space-x-4'>
        <Link to='/'>Home/로고</Link>
        <a href='#'>Safety</a>
        <Link to='/Pages/TravelSubmissionScreen'>여행자</Link>
        <Link to='trip'>쭈니</Link>
        <a href='#'>채팅방</a>
        <Link to='/Pages/LoginScreen'>로그인</Link>
        <Link to='/Pages/SignupScreen'>회원가입</Link>
      </div>
    </div>
  );
};

export default Header;
