import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

// Flag 컴포넌트
const Flag = ({ country }) => (
  <div className='flex h-6 w-8 items-center justify-center bg-gray-300 text-xs'>{country}</div>
);

// Rating 컴포넌트
const Rating = ({ value }) => (
  <div className='flex items-center'>
    <span className='text-yellow-400'>★</span>
    <span className='ml-1 text-sm text-yellow-400'>{value.toFixed(1)}</span>
  </div>
);

// PersonalInfo 컴포넌트
const PersonalInfo = ({ name, age, gender }) => (
  <div className='text-center text-large text-white'>
    {name} ({age}, {gender})
  </div>
);

// MenuIcon 컴포넌트
const MenuIcon = () => (
  <div className='flex h-full w-6 flex-col items-center justify-center'>
    <div className='mb-1 h-1 w-1 rounded-full bg-white'></div>
    <div className='mb-1 h-1 w-1 rounded-full bg-white'></div>
    <div className='h-1 w-1 rounded-full bg-white'></div>
  </div>
);

// DropdownMenu 컴포넌트
const DropdownMenu = ({ onReport }) => (
  <div className='absolute right-0 top-full z-10 mt-2 w-auto rounded-md bg-white shadow-lg'>
    <div className='py-1'>
      <button
        className='block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
        onClick={onReport}
      >
        신고하기
      </button>
    </div>
  </div>
);

// ChatModal 컴포넌트
const ChatModal = ({ onClose, onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    onSend(message);
    setMessage('');
  };

  return (
    <div className='chat-modal fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='w-80 rounded-lg bg-white p-4'>
        <textarea
          className='mb-2 w-full rounded border p-2'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Say Hello to Your Local Friend!'
        />
        <div className='flex justify-end'>
          <button className='mr-2 rounded bg-blue-500 px-4 py-2 text-white' onClick={handleSend}>
            보내기
          </button>
          <button className='rounded bg-gray-300 px-4 py-2' onClick={onClose}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

// ScrollableTags 컴포넌트 (태그들을 수평으로 스크롤하여 추가정보 조회하기 위함)
const ScrollableTags = ({ interestTags, languageTags }) => (
  <>
    <div className='mb-4 flex justify-center overflow-x-auto whitespace-nowrap scrollbar-hide'>
      <div className='inline-flex space-x-2'>
        {interestTags.map((tag, index) => (
          <span
            key={`interest-${index}`}
            className='rounded-full bg-gray-200 px-2 py-1 text-sm text-gray-700'
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className='scrollbar-thin mb-4 flex justify-center overflow-x-auto whitespace-nowrap'>
      <div className='inline-flex space-x-2'>
        {languageTags.map((lang, index) => (
          <span
            key={`lang-${index}`}
            className='rounded-full bg-blue-200 px-2 py-1 text-sm text-blue-700'
          >
            {lang}
          </span>
        ))}
      </div>
    </div>
  </>
);

// 신고하기 모달 컴포넌트
const ReportModal = ({ onClose, onSubmit }) => {
  const [report, setReport] = useState('');

  const handleSubmit = () => {
    onSubmit(report);
    setReport('');
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className='report-modal fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
      onClick={handleModalClick}
    >
      <div className='w-80 rounded-lg bg-white p-4'>
        <h2 className='mb-4 text-center text-lg font-bold'>신고하기</h2>
        <textarea
          className='mb-2 w-full rounded border p-2'
          value={report}
          onChange={(e) => setReport(e.target.value)}
          placeholder='무엇이 문제인가요?'
          rows={4}
        />
        <div className='flex justify-end'>
          <button className='mr-2 rounded bg-red-500 px-4 py-2 text-white' onClick={handleSubmit}>
            제출
          </button>
          <button className='rounded bg-gray-300 px-4 py-2' onClick={onClose}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

const Card = ({ userData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatRequested, setIsChatRequested] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  const navigate = useNavigate();

  const handleCardClick = (e) => {
    if (!e.target.closest('.action-button') && !e.target.closest('.chat-modal')) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProfileClick = (e) => {
    e.stopPropagation();
    navigate(`/profile/${userData.id}`);
  };

  const handleChatClick = (e) => {
    e.stopPropagation();
    setShowChatModal(true);
  };

  const handleChatRequest = (message) => {
    setIsChatRequested(true);
    setShowChatModal(false);
    // 여기에 채팅 요청 로직 추가
  };

  const handleReportClick = (e) => {
    e.stopPropagation();
    setIsMenuOpen(false);
    setShowReportModal(true);
  };

  const handleReportSubmit = (report) => {
    // 여기에 신고 처리 로직을 추가합니다.
    console.log('신고 내용:', report);
    setShowReportModal(false);
  };

  return (
    <div
      className='relative h-[600px] w-full cursor-pointer overflow-hidden rounded-lg'
      onClick={handleCardClick}
    >
      <div
        className='absolute inset-0 bg-cover bg-center transition-opacity duration-300'
        style={{
          backgroundImage: `url(https://thispersondoesnotexist.com/)`,
        }}
      />
      {isExpanded && <div className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm' />}

      <div className='relative flex h-full flex-col justify-between p-4'>
        <CardHeader
          userData={userData}
          onMenuClick={handleMenuClick}
          isMenuOpen={isMenuOpen}
          onReport={handleReportClick}
        />
        <CardFooter userData={userData} />

        {isExpanded && (
          <CardContent
            userData={userData}
            onProfileClick={handleProfileClick}
            onChatClick={handleChatClick}
            isChatRequested={isChatRequested}
          />
        )}
      </div>

      {showChatModal && (
        <ChatModal onClose={() => setShowChatModal(false)} onSend={handleChatRequest} />
      )}

      {showReportModal && (
        <ReportModal onClose={() => setShowReportModal(false)} onSubmit={handleReportSubmit} />
      )}
    </div>
  );
};

const CardHeader = ({ userData, onMenuClick, isMenuOpen, onReport }) => (
  <div className='relative flex items-center justify-between rounded bg-black bg-opacity-50 p-2'>
    <div className='flex content-center items-center'>
      <Flag country={userData.country} />
    </div>
    <div className='ml-2'>
      <Rating value={userData.rating} />
      <PersonalInfo name={userData.name} age={userData.age} gender={userData.gender} />
    </div>
    <button onClick={onMenuClick} className='h-full text-white'>
      <MenuIcon />
    </button>
    {isMenuOpen && <DropdownMenu onReport={onReport} />}
  </div>
);

const CardFooter = ({ userData }) => (
  <div className='flex items-center rounded bg-black bg-opacity-50 p-2'>
    <Flag country={userData.destination} />
    <div className='ml-4 flex-grow items-center text-center text-white'>
      {userData.destinationDate} / {userData.destinationCity}
    </div>
  </div>
);

const CardContent = ({ userData, onProfileClick, onChatClick, isChatRequested }) => (
  <div className='flex flex-grow flex-col text-white'>
    <p className='mb-4 flex-grow content-center'>{userData.message}</p>
    <ScrollableTags interestTags={userData.interests} languageTags={userData.languages} />
    <div className='flex items-end justify-between'>
      <button onClick={onProfileClick} className='action-button'>
        <img src='https://placehold.co/40x40' alt='Profile' className='h-10 w-10 rounded-full' />
      </button>
      <button
        onClick={onChatClick}
        disabled={isChatRequested}
        className={`action-button rounded px-4 py-2 ${
          isChatRequested ? 'bg-gray-500' : 'bg-blue-500'
        }`}
      >
        CHAT
      </button>
    </div>
  </div>
);

export default Card;
