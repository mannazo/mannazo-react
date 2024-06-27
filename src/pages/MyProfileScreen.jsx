import { useState, useEffect } from 'react';

function TopProfile({ user1 }) {
  return (
    <div className='flex flex-row'>
      <img
        src={user1.profileImage}
        alt='User Avatar'
        className='rounded-full w-20 h-20 mr-4'
      />
      <div>
        <h1>{user1.name}</h1>
        <ul>
          <li>{user1.nationality}</li>
          <li>{user1.lastLoginAt}</li>
        </ul>
      </div>
    </div>
  );
}

function Overview({ user1 }) {
  return (
    <div>
      <h1>Overview</h1>
      <p>Name: {user1.name}</p>
      <p>1. 거주지역: {user1.nationality}</p>
      <p>2. 나이: {user1.gender}</p>
      <p>3. MBTI: {user1.mbti}</p>
      <p>4. 언어: {user1.language}</p>
      <p> 5. 흥미: {user1.interests}</p>
      <p> 6.소개글: {user1.introduction}</p>
    </div>
  );
}

function Feedback() {
  return (
    <div>
      <h1>Feedback</h1>
      <h2>Name</h2>
      <p>It was amazing!</p>
    </div>
  );
}

const MyProfileScreen = () => {
  const userinfo = JSON.parse(localStorage.getItem('fetchCodeResponse'));
  return (
    <div className='flex flex-col'>
      <TopProfile user1={userinfo}></TopProfile>
      <Overview user1={userinfo}></Overview>
    </div>
  );
};

export default MyProfileScreen;
