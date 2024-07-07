import apiconfig from './apiconfig.jsx';

export const getUser = (userId) => {
  return apiconfig.get(`/api/v1/user/${userId}`);
};
