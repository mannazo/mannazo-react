import TestCard from './TravellerCard.jsx';
import SnapScrollContainer from './SnapScroll.jsx';

const TravellerCardFeed = () => {
  const userData = {
    id: 1,
    name: 'Yuki',
    age: 32,
    gender: 'F',
    country: 'JP',
    rating: 4.3,
    destination: 'KR',
    destinationDate: '2024.04.22',
    destinationCity: 'Seoul',
    message:
      "Hello, remote buddy! I'm talkative Yuki 🙂 It's my first time to go S.Korea! 안녕하세요! I'd like to have some local food and go to K-POP concert! Anyone friendly welcome. Only chat also OK.",
    interests: [
      '맛집',
      'K-POP',
      '콘서트',
      '익스트림',
      '쇼핑',
      '길거리음식',
      '도시여행',
      '사람이 많은 곳',
      '로컬푸드',
    ],
    languages: ['KOR', 'ENG', 'JPN'],
  };

  return (
    <div className='mx-auto mt-10 max-w-md'>
      <div className='h-screen'>
        <SnapScrollContainer>
          <TestCard userData={userData} />
          <TestCard userData={userData} />
          <TestCard userData={userData} />
          <TestCard userData={userData} />
        </SnapScrollContainer>
      </div>
    </div>
  );
};

export default TravellerCardFeed;
