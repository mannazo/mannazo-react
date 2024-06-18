import React from 'react';
import '../style/MypageScreen.css';
import { BrowserRouter as Router } from "react-router-dom";
import MypageSidebar from "../Components/MypageSidebar.tsx";
import MypageContent from "../Components/MypageContent.tsx";

const MypageScreen: React.FC = () => {
    return <>
        <h1>마이페이지</h1>
        <div id="mypageScreen-grid">
            <p>사진</p>
            <ul>
                <p>이효정 고객님</p>
                <p>이메일</p>
            </ul>
        </div>
        <Router>
        <div>
            <MypageSidebar/>
            <MypageContent/>
        </div>
        </Router>
    </>;
};

export default MypageScreen;