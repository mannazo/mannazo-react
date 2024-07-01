import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Link } from 'react-router-dom';

const ChatHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className='relative mb-4 flex items-center justify-between'>
      <div className='flex items-center'>
        <Link to='/chat/list'>
          <button className='mr-2 text-gray-600'>
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 19l-7-7m0 0l7-7m-7 7h18'
              />
            </svg>
          </button>
        </Link>
        <div className='mr-2 h-10 w-10 rounded-full bg-gray-300'></div>
        <div className='flex flex-col'>
          <div className='flex items-center'>
            <h1 className='mr-2 text-xl font-bold'>상대방 이름</h1>
            <ReactCountryFlag countryCode='US' />
          </div>
          <span className='text-sm text-gray-600'>상태 메시지</span>
        </div>
      </div>
      <div className='flex items-center'>
        <button className='mx-2 text-gray-600' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <svg
            className='h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className='absolute right-0 top-full mt-2 w-48 rounded-md bg-white shadow-lg'>
            <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
              피드백 남기기
            </a>
            <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
              차단하기
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatHeader;
