import React from 'react';
import '../styles/MypageScreen.css';
import MypageSidebar from '../components/MypageSidebar.tsx';
import MypageContent from '../components/MypageContent.tsx';

const MypageScreen: React.FC = () => {
  return (
    <>
      <h1>마이페이지</h1>
      <div id='mypageScreen-grid'>
        <p>사진</p>
        <ul>
          <p>이효정 고객님</p>
          <p>이메일</p>
        </ul>
      </div>
      <MypageSidebar />
      <MypageContent />
    </>
  );
};

export default MypageScreen;
