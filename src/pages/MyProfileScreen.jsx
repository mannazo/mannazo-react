import { useState, useEffect } from 'react';
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://mannazo.diligentp.com/login/kakao');
    console.log(response.data.body);
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
};
function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get('https://mannazo.diligentp.com/api/v1/user/c0564f5b-9db4-4e3a-86ee-939a508fad73')
      .then((response) => setUser(response.data))
      .catch((error) => console.error('Error:', error));
  }, []);
  return !user ? (
    'Loading...'
  ) : (
    <div className='flex flex-col'>
      <div className='flex flex-row'>
        <img
          src='https://picsum.photos/200'
          alt='User Avatar'
          className='rounded-full w-20 h-20 mr-4'
        />
        <div>
          <h1>{user.name}</h1>
          <ul>
            <li>{user.nationality}</li>
            <li>{user.lastLoginAt}</li>
          </ul>
        </div>
      </div>

      <Overview user1={user}></Overview>
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
  const [mode, setMode] = useState('Overview');
  let content = null;
  if (mode === 'Overview') {
    content = <Overview></Overview>;
  } else if (mode === 'Feedback') {
    content = <Feedback></Feedback>;
  }

  return (
    <div>
      <div>
        <Profile></Profile>
      </div>
      <div>
        <div>
          <h1>ad</h1>
        </div>
      </div>
    </div>
  );
};

export default MyProfileScreen;
