import { useState } from 'react';

const TripInfo = () => {
  const [location, setLocation] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const personalityTags = ['활발한', '차분한', '친절한', '독립적인', '유연한', '계획적인'];
  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  const handleSearch = () => {
    // 검색 로직 구현
    console.log('검색 조건:', location, personality);
  };

  return (
    <div className='flex'>
      {/* 레프트 사이드바 */}
      <div className='w-1/4'>
        <h2 className='text-lg font-semibold mb-4'>검색 조건</h2>
        <div className='mb-4'>
          <label htmlFor='location' className='block mb-1'>
            위치
          </label>
          <input
            type='text'
            id='location'
            className='w-full px-2 py-1 border border-gray-300 rounded'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-1'>성향</label>
          <div className='flex flex-wrap'>
            {personalityTags.map((tag) => (
              <span
                key={tag}
                className={`mr-2 mb-2 px-2 py-1 rounded cursor-pointer ${
                  selectedTags.includes(tag) ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <button
          className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'
          onClick={handleSearch}
        >
          검색
        </button>
      </div>

      {/* 메인 컨텐츠 */}
      <div className='w-3/4 p-4'>
        <h1 className='text-2xl font-semibold mb-4'>여행자 검색 결과</h1>
        {travelersData.map((traveler) => (
          <TravelerCard key={traveler.id} traveler={traveler} />
        ))}
      </div>
    </div>
  );
};

// 여행자 데이터 예시
const travelersData = [
  {
    id: 1,
    name: '홍길동',
    age: 25,
    photo: 'https://picsum.photos/50/50',
    description: '안녕하세요! 저는 홍길동입니다. 세계 일주를 꿈꾸며 여행 중입니다.',
    itinerary: '한국 -> 일본 -> 한국',
  },
  // 다른 여행자 데이터...
];

const TravelerCard = ({ traveler }) => {
  return (
    <div className='shadow-md rounded-lg p-4 mb-4'>
      <div className='flex items-center'>
        <img src={traveler.photo} alt={traveler.name} className='w-16 h-16 rounded-full mr-4' />
        <div>
          <h3 className='text-lg font-semibold'>{traveler.name}</h3>
          <p className='text-gray-600'>{traveler.age}세</p>
        </div>
      </div>
      <p className='mt-4'>{traveler.description}</p>
      <p className='mt-2 text-gray-600'>{traveler.itinerary}</p>
    </div>
  );
};

export default TripInfo;
