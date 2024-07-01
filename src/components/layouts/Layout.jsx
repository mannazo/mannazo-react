import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header.jsx';

const Layout = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const fetchCodeResponse = JSON.parse(localStorage.getItem('fetchCodeResponse'));
    setLoggedIn(fetchCodeResponse !== null);
  }, []);

  return (
    <div className='flex h-screen flex-col'>
      <Header isLoggedIn={loggedIn} />
      <main className='flex-grow pt-8'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
