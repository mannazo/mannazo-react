import '../styles/MypageScreen.css';
import Nav from '../components/Nav';

const MypageScreen = () => {
  return (
    <>
      <div id='mypage-h1'>
        <h1>마이페이지</h1>
      </div>
      <div id='mypage-grid1'>
        <div id='mypage-nav'>
          <Nav />
        </div>
        <div id='mypage-content'>
          <p>content</p>
        </div>
      </div>
    </>
  );
};

export default MypageScreen;
