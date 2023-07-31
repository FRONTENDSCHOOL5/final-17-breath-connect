import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button/ButtonContainer';
import HomeLogo from '../../assets/images/home-logo.svg';
import { Container, Text, Image } from './FeedNoUserStyle'

const FeedNoUser = () => {
  return (
    <Container>
      <Image src={HomeLogo} alt="" />
        <Text>유저를 검색해 팔로우 해보세요!</Text>
      <Link to={'/search'}>
        <Button type={'ML'} text={'검색하기'} />
      </Link>
    </Container>
  );
};

export default FeedNoUser;
