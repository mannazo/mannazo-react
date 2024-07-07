import { useNavigate } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
import axios from 'axios';
import { API_SERVER } from '../constants/paths.js';
import { getUser } from '../api/userapi.js';
import { userService } from '../services/userService.jsx';

const Redirection = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.toString()).searchParams.get('code');

  const fetchData = useCallback(async () => {
    try {
      // const userId = localStorage.getItem('uuid');
      const response = await userService.getUser(localStorage.getItem('uuid'));
      // const response = await axios.get(API_SERVER + '/api/v1/user/' + localStorage.getItem('uuid'));
      console.log('success');
      console.log(response.data);
      if (response.data.firstTimeUser === true) {
        navigate('/pages/Signup2Screen');
        console.log('firstimeuser');
      } else {
        navigate('/pages/Signup2Screen');
        console.log('passed');
      }
    } catch (error) {
      console.error('로그인 실패', error);
    }
  }, [navigate]);

  useEffect(() => {
    console.log(code);
    const login = async () => {
      try {
        const response = await axios.get(API_SERVER + '/login/kakao/callback?code=' + code);
        console.log(response.data);
        localStorage.setItem('uuid', response.data);
        console.log(localStorage.getItem('uuid'));
        await fetchData();
      } catch (error) {
        console.error('로그인 실패', error);
      }
    };
    login();
  }, [code, fetchData]);

  return <div>로그인 중입니다.</div>;
};

export default Redirection;
