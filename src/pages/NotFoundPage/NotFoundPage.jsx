import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import icon404 from '../../assets/Img/icon-404.svg';

const NotFound=()=> {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <Page404Container className="page-404">
      <Icon404 src={icon404} alt="404 로고" className="icon-404" />
      <ErrorMessage>페이지를 찾을 수 없습니다. :(</ErrorMessage>
      <PreviousButton onClick={handleGoBack} className="M-button btn">
        이전 페이지
      </PreviousButton>
    </Page404Container>
  );
}
export default NotFound;

 const Page404Container = styled.article`
  background-color: white;
  position: relative;
  margin: 200px auto;
  width: 148px;
  height: 200px;
  text-align: center;
`;
const Icon404 = styled.img`
  /* icon-404에 대한 스타일 작성 */  
`;
const ErrorMessage = styled.p`
  color: #767676;
  margin-top : 26px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  width: 120px;
  height: 44px;
  font-weight: 500;
`;
const PreviousButton = styled(Button)`
  background-color: #6521D3;
  border-radius: 44px;
  color: #FFFFFF;
  font-size: 14px;
  line-height: 17.53px;
`;
