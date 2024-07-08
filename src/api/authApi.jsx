import apiconfig from './apiconfig.jsx';

export const getKakaoAuthUrl = () => {
  return apiconfig.get('/login/kakao/auth');
};

export const getKakaoAuthCallback = (code) => {
  return apiconfig.get(`/login/kakao/callback?code=${code}`);
};
