import styled from 'styled-components';
import Card from './Card';
import { useState } from 'react';

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const cardData = [
  {
    id: 1,
    name: 'John Doe',
    age: 28,
    countryCode: 'US',
    nationality: 'USA',
    image: 'https://example.com/john.jpg',
    likes: 150,
    bio: 'Passionate traveler and photography enthusiast. Love to explore new cultures and capture moments.',
  },
  {
    id: 2,
    name: 'Maria Garcia',
    age: 32,
    countryCode: 'KR',
    nationality: 'Korea',
    image: 'https://example.com/maria.jpg',
    likes: 200,
    bio: 'Food lover and aspiring chef. I believe that cooking is an art that brings people together.',
  },
  {
    id: 3,
    name: 'Yuki Tanaka',
    age: 25,
    countryCode: 'JP',
    nationality: 'Japan',
    image: 'https://example.com/yuki.jpg',
    likes: 180,
    bio: 'Tech enthusiast and software developer. Always excited to learn about new technologies.',
  },
  // 더 많은 카드 데이터를 추가할 수 있습니다.
];

const CardGallery = () => {
  const [cards, setCards] = useState(cardData);
  const [flippedCardId, setFlippedCardId] = useState(null);

  const handleFlip = (id) => {
    setFlippedCardId(flippedCardId === id ? null : id);
  };

  const handleLike = (id) => {
    setCards(cards.map((card) => (card.id === id ? { ...card, likes: card.likes + 1 } : card)));
  };

  const handleChat = (id) => {
    console.log(`Chatting with user ${id}`);
    // 여기에 채팅 기능을 구현할 수 있습니다.
  };

  return (
    <CardsContainer>
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          isFlipped={flippedCardId === card.id}
          onFlip={() => handleFlip(card.id)}
          onLike={() => handleLike(card.id)}
          onChat={() => handleChat(card.id)}
        />
      ))}
    </CardsContainer>
  );
};

export default CardGallery;
