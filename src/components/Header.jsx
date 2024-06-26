import '../styles/Header.css';
import { NavLink } from 'react-router-dom';
import * as PATHS from '../constants/paths';
import Logo from '/vite.svg';

const Header = () => {
  return (
    <>
      <header>
        <nav className='bg-white dark:bg-gray-800'>
          <div className='mx-auto max-w-7xl px-8'>
            <div className='flex h-16 items-center justify-between'>
              <div className='flex items-center'>
                <a className='flex-shrink-0' href='/'>
                  <img className='h-8 w-8' src={Logo} alt='Workflow' />
                </a>
                <Menus />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

const Menus = () => {
  return (
    <div className='ml-10 flex items-baseline space-x-4'>
      <NavLink to={PATHS.HOME}>Home</NavLink>
      <NavLink to={PATHS.SAFETY}>Safety</NavLink>
      <NavLink to={PATHS.TRIP}>여행자</NavLink>
      <NavLink to={PATHS.LOCAL}>쭈니</NavLink>
      <NavLink to={PATHS.CHAT}>채팅방</NavLink>
      <NavLink to={PATHS.AUTH_SIGN_IN}>로그인</NavLink>
      <NavLink to={PATHS.AUTH_SIGN_UP_FORM}>회원가입</NavLink>
    </div>
  );
};

export default Header;
