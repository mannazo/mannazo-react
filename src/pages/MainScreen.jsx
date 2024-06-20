import { useNavigate } from 'react-router-dom';

const MainScreen = () => {
  const navigate = useNavigate();

  const goToTravelSubmissionScreen = () => {
    navigate('../Pages/TravelSubmissionScreen');
  };

  return (
    <>
      <div>
        {/*{newFunction()}*/}
        <div>
          <h2>쭈니를 찾으러 가볼까요?</h2>
          <button onClick={goToTravelSubmissionScreen}>여행자</button>
          <button>쭈니</button>
        </div>
        <div>{/* 이미지 컨테이너 */}</div>
      </div>
    </>
  );
};

export default MainScreen;
