import {Link} from 'react-router-dom';
import * as PATHS from '../../constants/paths.js';

const Nav = () => {
  return (
    <div className='fixed bottom-0 left-0 w-full'>
      <nav className='z-10 flex justify-center bg-white shadow-lg dark:bg-gray-800'>
        <Link
          to={PATHS.ACCOUNT}
          className='flex w-1/4 items-center justify-center p-2 text-gray-600 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white'
        >
          <span className='text-lg font-normal'>계정설정</span>
        </Link>
        <a
          className='flex w-1/4 items-center justify-center p-2 text-gray-800 transition-colors duration-200 hover:text-gray-800 dark:text-gray-100 dark:hover:text-white'
          href='#'
        >
          <span className='text-lg font-normal'>채팅</span>
        </a>
        <a
          className='flex w-1/4 items-center justify-center p-2 text-gray-600 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white'
          href=''
        >
          <span className='text-lg font-normal'>예약내역</span>
        </a>
        <a
          className='flex w-1/4 items-center justify-center p-2 text-gray-600 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white'
          href='#'
        >
          <span className='text-lg font-normal'>Navigation</span>
        </a>
      </nav>
    </div>
  );
};

export default Nav;
