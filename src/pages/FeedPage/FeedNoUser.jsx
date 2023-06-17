import React from 'react';
import styled from 'styled-components';
import ButtonContainer from '../../components/common/Button/ButtonContainer';
import HomeLogo from '../../assets/images/home-logo.svg';
import { Link } from 'react-router-dom';

const FeedNoUser = () => {
  return (
    <Container>
      <Image src={HomeLogo} alt="" />
      <FollowText>유저를 검색해 팔로우 해보세요!</FollowText>
      <Link to={'/Search'}>
        <ButtonContainer type={'ML'} text={'검색하기'} />
      </Link>
    </Container>
  );
};

export default FeedNoUser;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 4.8rem - 8.5rem);
  gap: 2rem;
  padding-bottom: 15rem;
`;

const FollowText = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textColor};
`;

const Image = styled.img`
  width: 13.5rem;
  height: 17.5rem;
`;
