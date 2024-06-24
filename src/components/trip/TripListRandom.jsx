import React from 'react';
import { Card, Image } from '@nextui-org/react';

function RandomUserProfile({ user }) {
  if (!user) return null;

  return (
    <Card css={{ w: '100%', h: '200px', marginBottom: '20px' }}>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={user.picture.large}
          objectFit='cover'
          width='200px'
          height='100%'
          alt={`${user.name.first} ${user.name.last}`}
        />
        <div
          style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            width: 'calc(100% - 200px)',
            position: 'absolute',
            right: 0,
          }}
        >
          <div style={{ position: 'relative' }}>
            <Image
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              width={80}
              height={80}
              css={{ borderRadius: '40px' }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 90,
                background: 'rgba(0,0,0,0.6)',
                padding: '10px',
                borderRadius: '10px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <h4 style={{ margin: 0, color: 'white' }}>
                {user.name.first} {user.name.last}, {user.dob.age}
              </h4>
            </div>
          </div>
          <div>
            <p style={{ color: '$accents7', margin: '5px 0' }}>
              Location: {user.location.city}, {user.location.country}
            </p>
            <p style={{ color: '$accents7', margin: '5px 0' }}>Email: {user.email}</p>
            {/* 추가 정보를 여기에 넣을 수 있습니다 */}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default RandomUserProfile;
