import React from 'react';
import { useNavigate } from 'react-router-dom';
import icon404 from '../../assets/images/icon-404.svg';
import Button from '../../components/common/Button/ButtonContainer';
import { Section, Image, ErrorMessage } from './NotFoundPageStyle';

const NotFound = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <Section className="page-404">
      <Image src={icon404} alt="404 로고" className="icon-404" />
      <ErrorMessage>페이지를 찾을 수 없습니다.</ErrorMessage>
      <Button text={'이전 페이지'} type={'ML'} handleClick={handleGoBack} />
    </Section>
  );
};
export default NotFound;
