import { useState } from 'react';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

function FlippableCard({ user }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      onClick={handleFlip}
      className='h- w-96'
      style={{
        width: '300px',
        height: '400px',
        perspective: '1000px',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transition: 'transform 0.6s',
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* 카드 앞면 */}
        <Card
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backfaceVisibility: 'hidden',
          }}
        >
          <CardBody className='p-0'>
            <Image
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />
          </CardBody>
          <CardFooter
            style={{
              position: 'absolute',
              bottom: 0,
              zIndex: 1,
              backdropFilter: 'blur(10px)',
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <p className='text-lg font-bold'>
              {user.name.first} {user.name.last}
            </p>
          </CardFooter>
        </Card>

        {/* 카드 뒷면 */}
        <Card
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <CardBody>
            <h4 className='mb-2 text-lg font-bold'>
              {user.name.first} {user.name.last}
            </h4>
            <p>Age: {user.dob.age}</p>
            <p>Email: {user.email}</p>
            <p>
              Location: {user.location.city}, {user.location.country}
            </p>
            <p>Phone: {user.phone}</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default FlippableCard;
