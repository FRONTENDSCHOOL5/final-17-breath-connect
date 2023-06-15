import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import icon404 from '../../assets/images/icon-404.svg';
import ButtonContainer from '../../components/common/Button/ButtonContainer';

const NotFound=()=> {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <Page404Container className="page-404">
      <Icon404 src={icon404} alt="404 로고" className="icon-404" />
      <ErrorMessage>페이지를 찾을 수 없습니다.</ErrorMessage>
      <ButtonContainer text={'이전 페이지'} type={'ML'} handleClick={handleGoBack} />
    </Page404Container>
  );
}
export default NotFound;

 const Page404Container = styled.article`
  background-color: ${({theme}) => theme.colors.whiteText};
  position: relative;
  margin: 200px auto;
  width: 148px;
  height: 200px;
  text-align: center;
`;
const Icon404 = styled.img`
  width: 100%;
`;
const ErrorMessage = styled.p`
  color: ${({theme}) => theme.colors.textColor};
  margin-top : 26px;
  margin-bottom: 20px;
  font-size: ${({theme}) => theme.fontSize.small};
`;

