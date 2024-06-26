import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { API_SERVER } from '../constants/paths.js';

const Redirection = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.toString()).searchParams.get('code');
  console.log(code);
  useEffect(() => {
    axios
      .get(API_SERVER + '/login/kakao/callback?code=' + code)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem('fetchCodeResponse', JSON.stringify(response.data));
          navigate('/pages/Signup2Screen');
        // if (response.data.firstTimeUser === true) {
        //   navigate('/pages/Signup2Screen');
        // } else {
        //   navigate('/');
        // }
      })
      .catch((error) => {
        console.error('로그인 실패', error);
      });
  }, [code, navigate]);

  return <div>로그인 중입니다.</div>;
};

export default Redirection;
