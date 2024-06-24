import React, { useEffect, useState } from 'react';
import { Card } from '@nextui-org/react';
import { fetchRandomUser } from '../../utils/fetchRandomUser.js';
import RandomUserProfile from '../RandomUserProfile.jsx';
import FlippableCard from './FlippableCard.jsx';

const TripList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const newUsers = await Promise.all(
        Array(10)
          .fill()
          .map(() => fetchRandomUser()),
      );
      setUsers(newUsers);
    };
    fetchUsers();
  }, []);

  return (
    <Card>
      <h1>여행 목록을 출력하기 위한 컴포넌트</h1>
      <h2>랜덤으로 생성된 프로필입니다.</h2>
      {users.map((user, index) => (
        <RandomUserProfile key={index} user={user} />
      ))}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          padding: '20px',
        }}
      >
        {users.map((user, index) => (
          <FlippableCard key={index} user={user} />
        ))}
      </div>
    </Card>
  );
};

export default TripList;
