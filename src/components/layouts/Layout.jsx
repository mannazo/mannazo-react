import { Outlet } from 'react-router-dom';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

const Layout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header></Header>
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
