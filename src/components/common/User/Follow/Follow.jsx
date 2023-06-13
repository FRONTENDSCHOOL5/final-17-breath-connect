import React from 'react';
import styled from 'styled-components';
import PROFILEIMAGE  from '../../../../assets/Img/basic-profile-img.png';
//import Button from '../../Button/ButtonContainer';

const Follow = () => {
  return (
    <UserItem>
      <ProfileImage src={PROFILEIMAGE} alt='weniv_Mandarin님의 프로필 사진' width='50' />
      <Wrapper>
        <UserName>애월읍 위니브 감귤농장</UserName>
        <UserId>weniv_Madarin</UserId>
      </Wrapper>
      <button>팔로우</button>
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
  margin-left: 12px;
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
  width: 50px;
  height: auto;
  border-radius: 50%;
`;