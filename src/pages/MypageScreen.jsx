import '../styles/MypageScreen.css';
import Nav from './mypage/Nav.jsx';
import ProfilePhoto from '/profile-photo.png';
import { Outlet } from 'react-router-dom';

const MypageScreen = () => {
  return (
    <>
      <div id='mypage-h1'>
        <h1>마이페이지</h1>
      </div>
      <div id='mypage-profile'>
        <div>
          <img src={ProfilePhoto} alt='profile-photo' />
        </div>
        <div>
          <p>이효정고객님</p>
          <p>lilylee215@gmail.com</p>
        </div>
      </div>
      <div id='mypage-grid1'>
        <div id='mypage-nav'>
          <Nav />
        </div>
        <div id='mypage-content'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MypageScreen;
