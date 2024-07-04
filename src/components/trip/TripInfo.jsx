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
      <div className='w-1/4 p-4'>
        <h2 className='mb-4 text-lg font-semibold'>검색 조건</h2>
        <div className='mb-4'>
          <label htmlFor='location' className='mb-1 block'>
            위치
          </label>
          <input
            type='text'
            id='location'
            className='w-full rounded border border-gray-300 px-2 py-1'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='mb-1 block'>성향</label>
          <div className='flex flex-wrap'>
            {personalityTags.map((tag) => (
              <span
                key={tag}
                className={`mb-2 mr-2 cursor-pointer rounded px-2 py-1 ${
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
          className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
          onClick={handleSearch}
        >
          검색
        </button>
      </div>

      {/* 메인 컨텐츠 */}
      <div className='w-3/4 p-4'>
        <h1 className='mb-4 text-2xl font-semibold'>여행자 검색 결과</h1>
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
    itinerary: '한국 -> 일본 -> 중국 -> 태국 -> 호주',
  },
  // 다른 여행자 데이터...
];

const TravelerCard = ({ traveler }) => {
  return (
    <div className='mb-4 rounded-lg p-4 shadow-md'>
      <div className='flex items-center'>
        <img src={traveler.photo} alt={traveler.name} className='mr-4 h-16 w-16 rounded-full' />
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
