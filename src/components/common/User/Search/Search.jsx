import React from 'react';
import PROFILEIMAGE from '../../../../assets/Img/basic-profile-img.png';
import {
  Container,
  Image,
  UserContainer,
  UserName,
  UserId,
} from './SearchStyle';

const Search = () => {
  return (
    <Container>
      <Image
        src={PROFILEIMAGE}
        alt="weniv_Mandarin님의 프로필 사진"
        width="50"
      />
      <UserContainer>
        <UserName>애월읍 위니브 감귤농장</UserName>
        <UserId>weniv_Madarin</UserId>
      </UserContainer>
    </Container>
  );
};
export default Search;
