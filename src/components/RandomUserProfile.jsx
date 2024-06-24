// src/components/RandomUserProfile.jsx
import React, { useState, useEffect } from 'react';
import { fetchRandomUser } from '../utils/fetchRandomUser';

function RandomUserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRandomUser()
      .then((userData) => {
        setUser(userData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user data available</div>;

  return (
    <div className='user-profile'>
      <h2>User Profile</h2>
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
      <p>
        Name: {user.name.title} {user.name.first} {user.name.last}
      </p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>
        Location: {user.location.city}, {user.location.state}, {user.location.country}
      </p>
      <p>Age: {user.dob.age}</p>
      <p>Username: {user.login.username}</p>
    </div>
  );
}

export default RandomUserProfile;
