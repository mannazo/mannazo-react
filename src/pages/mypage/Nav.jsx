import { Link, Outlet } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='Sumgocash'>숨고캐시</Link>
        </li>
        <li>
          <Link to='AccountSetting'>계정설정</Link>
        </li>
        <li>충전/사용내역</li>
        <li>예약내역</li>
        <li>찜목록</li>
        <li>설정</li>
        <li>알림</li>
        <li>숨고안내</li>
      </ul>
    </div>
  );
};

export default Nav;
