import '../styles/MypageScreen.css';
import Nav from './mypage/Nav.jsx';
import ProfilePhoto from '/profile-photo.png';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const MypageScreen = () => {
  // 유저의 데이터를 로컬스토리지에서 가져와서 초기화
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('fetchCodeResponse')));

  return (
    <>
      <div id='mypage-h1'>
        <h1>마이페이지</h1>
      </div>
      <div id='mypage-profile'>
        <div id='mypage-profile-photo'>
          <img src={ProfilePhoto} alt='profile-photo' />
        </div>
        <div id='mypage-profile-content'>
          <div>{userData.name}</div>
          <div>{userData.email}</div>
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
