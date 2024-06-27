import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../ResponsiveHeader.jsx';

const Layout = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const fetchCodeResponse = JSON.parse(localStorage.getItem('fetchCodeResponse'));
    setLoggedIn(fetchCodeResponse !== null);
  }, []);

  return (
    <div className='flex min-h-screen flex-col py-8'>
      <Header isLoggedIn={loggedIn}></Header>
      <main className='flex-grow'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
