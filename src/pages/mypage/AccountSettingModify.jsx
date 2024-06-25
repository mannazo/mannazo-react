import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const AccountSettingModify = () => {
    // 로컬 스토리지에서 사용자 정보 가져오기
    let userinfo = JSON.parse(localStorage.getItem('fetchCodeResponse'));
    console.log(userinfo);

    const navigate = useNavigate();

    // 변경된 사용자 정보를 서버에 변경 요청
    const handleSubmit = async () => {

        // 로컬 스토리지에 변경된 정보 저장 (예시)
        localStorage.setItem('fetchCodeResponse', JSON.stringify(updatedUserInfo));

        // 여기에서 실제로 사용자 정보를 업데이트하는 로직 추가
        try {
            const response = await axios.put('https://mannazo.diligentp.com/api/v1/user', updatedUserInfo, {
                headers: {
                    'Content-Type': 'application/json',
                },
                body
            });

            console.log('서버 응답:', response.data);
            console.log('사용자 정보가 성공적으로 업데이트 되었습니다.');

            // 페이지 이동 등 추가 작업 수행
            navigate('../AccountSetting');
        } catch (error) {
            console.error('서버 요청 중 오류가 발생했습니다:', error.message);
            // 오류 처리 (예: 사용자에게 오류 메시지 표시 등)
        }

        // 서버 응답 처리 (예: 성공 메시지 표시 등)
        console.log('사용자 정보가 성공적으로 업데이트 되었습니다.');

        // // 페이지 이동 등 추가 작업 수행
        // navigate('../AccountSetting');

        // } catch (error) {
        //     console.error('서버 요청 중 오류가 발생했습니다:', error.message);
        //     // 오류 처리 (예: 사용자에게 오류 메시지 표시 등)
        // }
        //
        // // 예를 들어, navigate를 사용하여 다른 페이지로 이동할 수 있음
        // navigate('../AccountSetting');
    };

    return (
        <>
            <div>
                <div>
                    <label htmlFor='name'>이름: </label>
                    <input
                        id='name'
                        type='name'
                        placeholder={userinfo.name}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='email'>이메일: </label>
                    <input
                        id='email'
                        type='email'
                        placeholder={userinfo.email}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password'>비밀번호: </label>
                    <input
                        id='password'
                        type='password'
                        // placeholder='example@soongo.com'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='nickname'>닉네임: </label>
                    <input
                        id='nickname'
                        type='nickname'
                        placeholder={userinfo.nickname}
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='nationality'>국적: </label>
                    <input
                        id='nationality'
                        type='nationality'
                        placeholder={userinfo.nationality}
                        value={nationality}
                        onChange={(e) => setNationality(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='language'>언어: </label>
                    <input
                        id='language'
                        type='language'
                        placeholder={userinfo.language}
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='introduction'>소개: </label>
                    <input
                        id='introduction'
                        type='introduction'
                        placeholder={userinfo.introduction}
                        value={introduction}
                        onChange={(e) => setIntroduction(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='city'>거주지: </label>
                    <input
                        id='city'
                        type='city'
                        placeholder={userinfo.city}
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='gender'>성별: </label>
                    <input
                        id='gender'
                        type='gender'
                        placeholder={userinfo.gender}
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='mbti'>MBTI: </label>
                    <input
                        id='mbti'
                        type='mbti'
                        placeholder={userinfo.mbti}
                        value={mbti}
                        onChange={(e) => setMbti(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='interests'>흥미: </label>
                    <input
                        id='interests'
                        type='interests'
                        placeholder={userinfo.interests}
                        value={interests}
                        onChange={(e) => setInterests(e.target.value)}
                    />
                </div>
            </div>

            <button onClick={handleSubmit}>변경완료</button>
        </>

    )
}

export default AccountSettingModify;