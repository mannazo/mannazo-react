import React from 'react';

const MainScreen = () => {
  return (
    <div>
      {newFunction()}
      <div>
        <h2>쭈니를 찾으러 가볼까요?</h2>
        <button>여행자</button>
        <button>쭈니</button>
      </div>
      <div>{/* 이미지 컨테이너 */}</div>
    </div>
  );
};

export default MainScreen;
function newFunction() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home/로고</a>
        </li>
        <li>
          <a href="#">Safety</a>
        </li>
        <li>
          <a href="#">여행자</a>
        </li>
        <li>
          <a href="#">쭈니</a>
        </li>
        <li>
          <a href="#">채팅방</a>
        </li>
        <li>
          <a href="#">로그인</a>
        </li>
        {/* <li>
          <a href="#">프로필</a>
        </li> */}
      </ul>
    </nav>
  );
}
