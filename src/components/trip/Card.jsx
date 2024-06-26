import styled from 'styled-components';
import ReactCountryFlag from 'react-country-flag';

const CardWrapper = styled.div`
  width: 300px;
  height: 450px;
  perspective: 1000px;
  cursor: pointer;
`;

const FlagContainer = styled.span`
  margin-right: 5px;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.isFlipped ? 'rotateY(180deg)' : 'none')};
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
`;

const CardBack = styled(CardSide)`
  transform: rotateY(180deg);
`;

const CardBackground = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.image});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${(props) =>
    props.isBack &&
    `
    filter: blur(5px) brightness(0.7);
  `}
`;

const CardSection = styled.div`
  height: 15%;
  margin: 5% 0;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px) saturate(70%);
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ChatButton = styled(Button)`
  margin: auto;
`;

const CardContent = styled.div`
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Card = ({ card, isFlipped, onFlip, onLike, onChat }) => {
  //example
  card.image = 'https://thispersondoesnotexist.com/';

  return (
    <CardWrapper onClick={onFlip}>
      <CardInner isFlipped={isFlipped}>
        <CardSide>
          <CardBackground image={card.image}>
            <CardSection as='header'>{/* 헤더 내용 */}</CardSection>
            <CardSection as='footer'>
              <CardInfo>
                <span>
                  <FlagContainer>
                    <ReactCountryFlag countryCode={card.countryCode} svg />
                  </FlagContainer>
                  {card.nationality}
                </span>
                <span>
                  `{card.name}({card.age})`
                </span>
              </CardInfo>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  onLike();
                }}
              >
                ❤️ {card.likes}
              </Button>
            </CardSection>
          </CardBackground>
        </CardSide>
        <CardBack>
          <CardBackground image={card.image} isBack>
            <CardSection as='header'>{/* 뒷면 헤더 내용 */}</CardSection>
            <CardContent>{/* 추가 정보 */}</CardContent>
            <CardSection as='footer'>
              <ChatButton
                onClick={(e) => {
                  e.stopPropagation();
                  onChat();
                }}
              >
                Chat
              </ChatButton>
            </CardSection>
          </CardBackground>
        </CardBack>
      </CardInner>
    </CardWrapper>
  );
};

export default Card;
