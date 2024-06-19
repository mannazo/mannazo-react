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
                    <Link to="/Pages/TravelSubmissionScreen">여행자</Link>
                    <a href="#">쭈니</a>
                    <a href="#">채팅방</a>
                    <Link to="/Pages/LoginScreen">로그인</Link>
                    <Link to="/Pages/SignupScreen">회원가입</Link>
                    {/* <a href="#">프로필</a> */}
                </div>
            </div>
        </header>

    );
}

export default Header;