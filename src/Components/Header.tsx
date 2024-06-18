import React from 'react';
import '../style/Header.css';
import {Link} from "react-router-dom";


const Header: React.FC = () => {
    return (
        <header>
            <div id="header-container">
                <div id="header-grid">
                    <Link to="/">Home/로고</Link>
                    <a href="#">Safety</a>
                    <a href="#">여행자</a>
                    <a href="#">쭈니</a>
                    <a href="#">채팅방</a>
                    <a href="#">로그인</a>
                    <Link to="/Pages/SignupScreen">회원가입</Link>
                    {/* <a href="#">프로필</a> */}
                </div>
            </div>
        </header>

    );
}

export default Header;