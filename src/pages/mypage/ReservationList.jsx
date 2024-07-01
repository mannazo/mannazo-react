import React, {useEffect, useState} from 'react';

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [pastReservations, setPastReservations] = useState([]);
  const [futureReservations, setFutureReservations] = useState([]);

  useEffect(() => {
    // 하드코딩된 샘플 데이터
    const sampleReservations = [
      {
        id: '1',
        user: '여행객 A',
        role: '대한민국, 서울',
        startDate: '2023-06-25',
        endDate: '2023-07-05',
        status: '여행종료',
      },
      {
        id: '2',
        user: '가이드 B',
        role: '미국, 뉴욕',
        startDate: '2024-01-15',
        endDate: '2024-01-25',
        status: '매칭중',
      },
      {
        id: '3',
        user: '여행객 C',
        role: '프랑스, 파리',
        startDate: '2022-11-10',
        endDate: '2022-11-20',
        status: '여행종료',
      },
      {
        id: '4',
        user: '가이드 D',
        role: '일본, 도쿄',
        startDate: '2023-09-01',
        endDate: '2023-09-10',
        status: '여행종료',
      },
      {
        id: '5',
        user: '여행객 E',
        role: '호주, 시드니',
        startDate: '2025-03-05',
        endDate: '2025-03-15',
        status: '등록',
      },
    ];

    const now = new Date();
    const past = sampleReservations.filter((res) => new Date(res.endDate) < now);
    const future = sampleReservations.filter((res) => new Date(res.endDate) >= now);

    setReservations(sampleReservations);
    setPastReservations(past);
    setFutureReservations(future);
  }, []);

  return (
    <div className='p-6'>
      <h2 className='mb-4 text-2xl font-bold'>과거 예약 내역</h2>
      <div className='mb-8'>
        {pastReservations.map((res) => (
          <div key={res.id} className='mb-4 flex justify-between rounded border bg-gray-50 p-4'>
            <span className='w-1/4 text-center'>{res.user}</span>
            <span className='w-1/4 text-center'>{res.role}</span>
            <span className='w-1/4 text-center'>{`${new Date(res.startDate).toLocaleDateString()} - ${new Date(res.endDate).toLocaleDateString()}`}</span>
            <span className='w-1/4 text-center'>{res.status}</span>
          </div>
        ))}
      </div>

      <h2 className='mb-4 text-2xl font-bold'>미래 예약 내역</h2>
      <div>
        {futureReservations.map((res) => (
          <div key={res.id} className='mb-4 flex justify-between rounded border bg-gray-50 p-4'>
            <span className='w-1/4 text-center'>{res.user}</span>
            <span className='w-1/4 text-center'>{res.role}</span>
            <span className='w-1/4 text-center'>{`${new Date(res.startDate).toLocaleDateString()} - ${new Date(res.endDate).toLocaleDateString()}`}</span>
            <span className='w-1/4 text-center'>{res.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservationList;
