import React from 'react';
import styled from 'styled-components';

const ErrorPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #6366f1;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23f0b608' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23e6d710' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23e7af05' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23e7d808' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d8a408' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23f1e213' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23f0b607' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23e4d506' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23eab822' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23e8da14' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23e8b008' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23edde14' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  background-position: bottom;
`;

const ContentContainer = styled.div`
  text-align: center;
  color: #f9fafb;
  margin-top: -13rem;
`;

const Title = styled.h1`
  font-size: 9rem;
  font-weight: bold;
  font-family: sans-serif;
  letter-spacing: -0.75rem;
  text-shadow: -8px 0 0 rgb(102 123 242);
  position: relative;
`;

const Subtitle = styled.h5`
  color: #d1d5db;
  font-weight: 600;
  margin-right: -2.5rem;
  margin-top: -0.75rem;
`;

const Description = styled.p`
  color: #f3f4f6;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;

const HomeButton = styled.a`
  background-color: #4ade80;
  padding: 0.75rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #f9fafb;
  border-radius: 9999px;
  text-decoration: none;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <ContentContainer>
        <div>
          <Title>
            <span>ON DEV...</span>
          </Title>
          <Subtitle>Page not found</Subtitle>
          <Description>we are sorry, but the page you requested was not found</Description>
          <HomeButton href='/'>Go to Home</HomeButton>
        </div>
      </ContentContainer>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
