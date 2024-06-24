import axios from 'axios';

export const fetchRandomUser = () => {
  return axios
    .get('https://randomuser.me/api/')
    .then(function (response) {
      return response.data.results[0];
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
};
