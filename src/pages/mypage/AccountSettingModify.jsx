import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const AccountSettingModify = ({setIsModifyClicked, userData, setIscomplite}) => {
    return(
        <>
            <div>
                <label htmlFor='name'>이름: </label>
                <input type='text' id='name' value={userData.name}
                    onChange={(e) => {
                        userData.name = e.target.value;
                    }}
                />
            </div>
            <div>
                <label htmlFor='email'>이메일: </label>
                <input type='email' id='email' value={userData.email}
                    onChange={(e) => {
                        userData.email = e.target.value;
                    }}
                />
            </div>
            <div>
                <label htmlFor='password'>비밀번호: </label>
                <input type='password' id='password' value={userData.password}
                    onChange={(e) => {
                        userData.password = e.target.value;
                    }}
                />
            </div>
            <div>
                <label htmlFor='nickname'>닉네임: </label>
                <input type='text' id='nickname' value={userData.nickname}
                    onChange={(e) => {
                        userData.nickname = e.target.value;
                    }}
                />
            </div>
            <div>
                <label htmlFor='nationality'>국적: </label>
                <input type='text' id='nationality' value={userData.nationality}
                    onChange={(e) => {
                        userData.nationality = e.target.value;
                    }}
                />
            </div>
            <div>
                <label htmlFor='language'>언어: </label>
                <input type='text' id='language' value={userData.language}
                    onChange={(e) => {
                        userData.language = e.target.value;
                    }}
                />
            </div>
            <div>
                <label htmlFor='introduction'>소개: </label>
                <input type='text' id='introduction' value={userData.introduction}
                    onChange={(e) => {
                        userData.introduction = e.target.value;
                    }}
                />
            </div>
            <div>
                <label htmlFor='city'>거주지: </label>
                <input type='text' id='city' value={userData.city}
                    onChange={(e) => {
                        userData.city = e.target.value;
                    }}
                />
            </div>
            <div>
                <label htmlFor='gender'>성별: </label>
                <input type='text' id='gender' value={userData.gender}
                    onChange={(e) => {
                        userData.gender = e.target.value;
                    }}
                />
            </div>
            <div>
                <label htmlFor='mbti'>MBTI: </label>
                <input type='text' id='mbti' value={userData.mbti}
                    onChange={(e) => {
                        userData.mbti = e.target.value;
                    }}
                />
            </div>
            <div>
                <label htmlFor='interests'>흥미: </label>
                <input type='text' id='interests' value={userData.interests}
                    onChange={(e) => {
                        userData.interests = e.target.value;
                    }}
                />
            </div>
            <button onClick={() => {
                setIsModifyClicked(false);
                setIscomplite(true);
            }}>완료
            </button>
        </>
    )
}

export default AccountSettingModify;