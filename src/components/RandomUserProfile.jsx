// src/components/UserProfileCard.jsx
import React from 'react';
import { Card, CardBody, CardFooter, Image, Button } from '@nextui-org/react';

function UserProfileCard({ user }) {
  if (!user) return <div>No user data available</div>;

  return (
    <Card className='max-w-[300px]'>
      <CardBody className='p-0'>
        <div className='relative'>
          <Image
            isBlurred
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            className='m-5'
          />
          <div className='absolute inset-0 flex items-end bg-black bg-opacity-30 p-4'>
            <div className='rounded bg-white bg-opacity-30 p-2 text-lg font-bold text-white backdrop-blur-sm'>
              {user.name.first} {user.name.last}, {user.dob.age}
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className='flex flex-col items-start'>
        <p className='text-sm'>
          <strong>Email:</strong> {user.email}
        </p>
        <p className='text-sm'>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p className='text-sm'>
          <strong>Location:</strong> {user.location.city}, {user.location.state},{' '}
          {user.location.country}
        </p>
        <p className='text-sm'>
          <strong>Username:</strong> {user.login.username}
        </p>
        <Button color='primary' className='mt-4'>
          Contact
        </Button>
      </CardFooter>
    </Card>
  );
}

export default UserProfileCard;
