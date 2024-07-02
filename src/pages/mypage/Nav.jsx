import * as PATHS from '../../constants/paths.js';

const Nav = () => {
  return (
    <>
      <div className='relative bg-white dark:bg-gray-800'>
        <div className='flex flex-col sm:flex-row sm:justify-around'>
          <div className='h-screen w-72'>
            <nav className='mt-10 px-6'>
              <a
                className='my-6 flex items-center rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
                href={PATHS.ACCOUNT}
              >
                <span className='mx-4 text-lg font-normal'>계정설정</span>
                <span className='flex-grow text-right'></span>
              </a>
              <a
                className='my-6 flex items-center rounded-lg p-2 text-gray-800 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800 dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                href='#'
              >
                <span className='mx-4 text-lg font-normal'>Form</span>
                <span className='flex-grow text-right'></span>
              </a>
              <a
                className='my-6 flex items-center rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
                href='#'
              >
                <span className='mx-4 text-lg font-normal'>Commerce</span>
                <span className='flex-grow text-right'></span>
              </a>
              <a
                className='my-6 flex items-center rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
                href='#'
              >
                <span className='mx-4 text-lg font-normal'>Navigation</span>
                <span className='flex-grow text-right'></span>
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/*<div>*/}
      {/*  <ul>*/}
      {/*    <li>*/}
      {/*      <Link to='Sumgocash'>숨고캐시</Link>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      */}
      {/*    </li>*/}
      {/*    <li>충전/사용내역</li>*/}
      {/*    <li>예약내역</li>*/}
      {/*    <li>찜목록</li>*/}
      {/*    <li>설정</li>*/}
      {/*    <li>알림</li>*/}
      {/*    <li>숨고안내</li>*/}
      {/*  </ul>*/}
      {/*</div>*/}
    </>
  );
};

export default Nav;
