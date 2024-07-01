import Logo from '/vite.svg';
import axios from 'axios';
import {API_SERVER} from '../constants/paths.js';

const LoginScreen = () => {
  const onKakaoButtonClick = async () => {
    const url = await fetchData();
    window.location.href = url;
  };

  // const onNaverButtonClick = async () => {
  //     const url = await fetchData();
  //     window.location.href = url;
  // };

  const fetchData = async () => {
    try {
      const response = await axios.get(API_SERVER + '/login/kakao/auth');
      return response.data;
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
    }
  };

  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <div className='p-5'>
        <img src={Logo} />
      </div>

      <div className='p-5'>
        <label htmlFor='email'>이메일</label>
        <input id='email' name='email' type='email' placeholder='example@soongo.com' />
      </div>

      <div>
        <label htmlFor='password'>비밀번호</label>
        <input id='password' name='password' type='password' />
      </div>
      {/*<button>이메일로 로그인</button>*/}

      <button
        type='button'
        className='bg-mainColor flex justify-items-center rounded-lg p-3'
        onClick={onKakaoButtonClick}
      >
        KaKao로 시작
      </button>
      {/*<button type='button' className='bg-mainColor flex justify-items-center p-3 rounded-lg' onClick={onNaverButtonClick}>네이버로 시작</button>*/}
    </div>
  );
};

export default LoginScreen;
