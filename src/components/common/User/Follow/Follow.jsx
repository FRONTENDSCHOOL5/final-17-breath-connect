import React from 'react';
import styled from 'styled-components';
import profileImage  from '../../../../assets/images/basic-profile-m.svg';
import ButtonContainer from '../../Button/ButtonContainer';

const Follow = () => {
  return (
    <UserItem>
      <ProfileImage src={profileImage} alt='유저님의 프로필 사진' width='50' />
      <Wrapper>
        <UserName>애월읍 위니브 감귤농장</UserName>
        <UserId>weniv_Madarin</UserId>
      </Wrapper>
      <ButtonWrapper>
      <ButtonContainer type={'S'} text={'팔로우'}></ButtonContainer>
      </ButtonWrapper>

     </UserItem>
  );
};

export default Follow;

const UserItem = styled.li`
  display: flex;
`;
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.2rem;
`;

const UserName = styled.strong`
  display: block;
  margin-bottom: 0.6rem;
  font-size: ${({theme}) => theme.fontSize.medium};
  font-weight: 500;
`;

const UserId = styled.strong`
  display: block;
  font-size: ${({theme}) => theme.fontSize.small};
  color: ${({theme}) => theme.colors.textColor};
  ::before {
    content: '@ ';
  }
`;

const ProfileImage = styled.img`
  width: 5rem;
  height: auto;
  border-radius: 50%;
`;

const ButtonWrapper = styled.button`
  margin-top: 1rem;
`