import { Outlet } from 'react-router-dom';
import Header from '../Header.tsx';
import Footer from '../Footer.tsx';

const Layout: React.FC = () => {
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
