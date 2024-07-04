import React, { useState } from 'react';
import axios from 'axios';
import { API_SERVER } from '../../constants/paths.js';

const AccountSettingModify = ({ setIsModifyClicked, userData, setIsComplete }) => {
  const [formData, setFormData] = useState({
    ...userData,
    // name: userData.name || '', // 기본값으로 빈 문자열 설정
    // email: userData.email || '',
    // password: userData.password || '',
    // nickname: userData.nickname || '',
    // nationality: userData.nationality || '',
    // language: userData.language || '',
    // introduction: userData.introduction || '',
    // city: userData.city || '',
    // gender: userData.gender || '',
    // mbti: userData.mbti || '',
    // interests: userData.interests || '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    // 새로운 객체를 생성하여 userData 상태를 업데이트
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSave = async () => {
    try {
      // 서버 API 엔드포인트
      const apiUrl = API_SERVER + '/api/v1/user';

      console.log('보내는 데이터:', formData);

      // API 요청 보낼 데이터
      const response = await axios.put(apiUrl, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // 요청이 성공적으로 처리된 경우
      console.log('서버 응답:', response.data);

      // 완료 상태 관리 (필요에 따라 setIsComplete 사용)
      setIsModifyClicked(false);
      setIsComplete(true);
    } catch (error) {
      // 요청이 실패한 경우
      console.error('서버 요청 중 오류 발생:', error);
      // 오류 처리 (예: 사용자에게 알림 등)
      if (error.response) {
        console.error('서버 응답 데이터:', error.response.data);
      }
    }
  };

  return (
    <>
      <div>
        <label htmlFor='name'>이름: </label>
        <input type='text' id='name' value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='email'>이메일: </label>
        <input type='email' id='email' value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='password'>비밀번호: </label>
        <input type='password' id='password' value={formData.password} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='nickname'>닉네임: </label>
        <input type='text' id='nickname' value={formData.nickname} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='nationality'>국적: </label>
        <input type='text' id='nationality' value={formData.nationality} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='language'>언어: </label>
        <input type='text' id='language' value={formData.language} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='introduction'>소개: </label>
        <input
          type='text'
          id='introduction'
          value={formData.introduction}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='city'>거주지: </label>
        <input type='text' id='city' value={formData.city} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='gender'>성별: </label>
        <input type='text' id='gender' value={formData.gender} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='mbti'>MBTI: </label>
        <input type='text' id='mbti' value={formData.mbti} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='interests'>흥미: </label>
        <input type='text' id='interests' value={formData.interests} onChange={handleChange} />
      </div>
      <button onClick={handleSave}>완료</button>
    </>
  );
};

export default AccountSettingModify;
