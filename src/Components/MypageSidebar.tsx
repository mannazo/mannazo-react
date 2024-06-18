import React from 'react';
import { Link } from 'react-router-dom';

const MypageSidebar: React.FC = () => {
    return <>
        <div style={{width: '200px', float: 'left', borderRight: '1px solid #ccc', padding: '10px'}}>
            <ul>
                <li>
                    <Link to="/item1">숨고캐시</Link>
                </li>
                <li>
                    <Link to="/item2">계정설정</Link>
                </li>
                <li>
                    <Link to="/item3">충전/사용내역</Link>
                </li>
                <li>
                    <Link to="/item4">예약내역</Link>
                </li>
                <li>
                    <Link to="/item5">찜목록</Link>
                </li>
                <li>
                    <Link to="/item6">설정</Link>
                </li>
                <li>
                    <Link to="/item7">알림</Link>
                </li>
                <li>
                    <Link to="/item8">숨고안내</Link>
                </li>
            </ul>
        </div>
    </>
}

export default MypageSidebar;