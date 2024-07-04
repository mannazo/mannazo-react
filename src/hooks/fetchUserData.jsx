
// src/hooks/useFetchUserData.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_SERVER } from '../constants/paths';

const useFetchUserData = (userIdKey) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const userId = localStorage.getItem(userIdKey);
        if (!userId) {
          throw new Error('No user ID found in local storage');
        }

        const response = await axios.get(`${API_SERVER}/api/v1/user/${userId}`);
        setData(response.data);
      } catch (error) {
        setError(error);
        console.error('Failed to fetch user data', error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [userIdKey]);

  return { data, loading, error };
};

export default useFetchUserData;