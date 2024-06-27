import { useState } from 'react';

const SafetyTip = ({ icon, title, description }) => (
  <div className='rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white shadow-xl transition-all duration-300 hover:shadow-2xl'>
    <div className='mb-4 text-4xl'>{icon}</div>
    <h3 className='mb-3 text-2xl font-bold'>{title}</h3>
    <p className='text-lg'>{description}</p>
  </div>
);

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4'>
      <div className='w-full max-w-md rounded-lg bg-white p-6'>
        <h2 className='mb-4 text-2xl font-bold text-gray-800'>mannazu에 신고하기</h2>
        <input
          type='email'
          placeholder='답변받을 이메일'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='mb-4 w-full rounded border p-2 text-gray-800'
        />
        <textarea
          placeholder='상황을 설명해주세요'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='mb-4 w-full rounded border p-2 text-gray-800'
          rows='4'
        />
        <div className='flex justify-end'>
          <button onClick={onClose} className='mr-2 rounded bg-gray-300 px-4 py-2 text-gray-800'>
            취소
          </button>
          <button
            onClick={() => onSubmit(email, message)}
            className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
          >
            전송
          </button>
        </div>
      </div>
    </div>
  );
};

const SafetyPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const safetyTips = [
    {
      icon: '🛡️',
      title: '직감을 신뢰하세요',
      description:
        '불편함을 느낀다면 주저하지 말고 만남을 취소하세요. 여러분의 안전이 최우선입니다.',
    },
    {
      icon: '💬',
      title: '충분한 대화',
      description:
        '만남 전 충분히 대화를 나누세요. 상대방에 대해 잘 알수록 안전한 만남이 가능합니다.',
    },
    {
      icon: '🏠',
      title: '만남 장소 주의',
      description:
        '처음 만날 때는 공공장소를 선택하세요. 개인 주거지나 한적한 곳은 피하는 것이 좋습니다.',
    },
    {
      icon: '🍽️',
      title: '안전한 식사',
      description:
        '초기 만남에서는 공개된 식당에서의 식사를 권장합니다. 안전과 편안함을 동시에 얻을 수 있습니다.',
    },
    {
      icon: '📱',
      title: '연락망 유지',
      description:
        '만남 일정과 장소를 친구나 가족에게 알려두세요. 정기적으로 연락하는 것도 좋은 방법입니다.',
    },
    {
      icon: '🚨',
      title: '긴급 상황 대비',
      description:
        '현지 긴급 연락처를 미리 저장해두세요. mannazu 긴급 지원팀 연락처도 항상 확인하세요.',
    },
    {
      icon: '🔒',
      title: '개인정보 보호',
      description:
        '초기에는 과도한 개인정보 공유를 피하세요. 신뢰가 쌓인 후 단계적으로 공유하는 것이 안전합니다.',
    },
    {
      icon: '🗣️',
      title: '의사소통 명확히',
      description:
        '경계와 기대사항을 명확히 전달하세요. 오해를 줄이고 상호 존중의 문화를 만들어갑시다.',
    },
  ];

  const handleSubmit = async (email, message) => {
    // 여기에 이메일 전송 또는 DB 저장 로직을 구현합니다.
    // 예시: API 호출
    try {
      const response = await fetch('/api/safety-support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        alert('메시지가 성공적으로 전송되었습니다.');
        setIsModalOpen(false);
      } else {
        alert('메시지 전송에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <div className='container mx-auto px-4 py-16'>
        <h1 className='mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-center text-5xl font-black text-transparent'>
          mannazu와 함께하는 안전한 여행
        </h1>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {safetyTips.map((tip, index) => (
            <SafetyTip key={index} {...tip} />
          ))}
        </div>

        <div className='mt-16 text-center'>
          <h2 className='mb-6 text-4xl font-bold'>여러분의 안전이 우리의 최우선 가치입니다</h2>
          <p className='mx-auto mb-8 max-w-3xl text-xl leading-relaxed'>
            mannazu는 여러분의 안전한 여행과 문화 교류를 위해 최선을 다하고 있습니다. 하지만 개인의
            주의와 안전 수칙 준수가 가장 중요합니다. 도움이 필요할 때는 주저하지 말고 연락주시길
            바랍니다.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className='transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 px-8 py-3 text-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:from-green-500 hover:to-blue-600'
          >
            MANNAZU에 신고하기
          </button>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default SafetyPage;
