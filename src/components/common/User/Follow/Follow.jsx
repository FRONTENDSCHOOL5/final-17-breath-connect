import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Button from '../../Button/ButtonContainer';
import basicImg from '../../../../assets/images/basic-profile-s.svg';
import { accountAtom } from '../../../../atoms/UserAtom';

import {
  UserItem,
  Image,
  Container,
  UserName,
  Intro,
  ButtonWrapper,
} from './FollowStyle.jsx';

const Follow = ({ user }) => {
  const { username, accountname, intro, image, isfollow } = user;

  const [isFollow, setIsFollow] = useState(isfollow);
  const account = useRecoilValue(accountAtom);

  const handleClick = () => {
    setIsFollow(!isFollow);
  };

  const numberRegex =
    /^https:\/\/api\.mandarin\.weniv\.co\.kr\/(?:(?!null|undefined)[\w.]*)$/;

  return (
    <UserItem>
      <Image
        src={numberRegex.test(image) ? image : basicImg}
        alt="프로필 이미지"
        width="50"
      />
      <Container>
        <Link to={`/profile/${accountname}`} key={accountname}>
          <UserName>{username}</UserName>
          <Intro>{intro}</Intro>
        </Link>
      </Container>
      {account !== accountname && isFollow === true && (
        <ButtonWrapper>
          <Button
            type={'S'}
            text={'취소'}
            isClicked={isFollow}
            handleClick={handleClick}
          />
        </ButtonWrapper>
      )}
      {account !== accountname && isFollow === false && (
        <ButtonWrapper>
          <Button
            type={'S'}
            text={'팔로우'}
            isClicked={!!isFollow}
            handleClick={handleClick}
          />
        </ButtonWrapper>
      )}
    </UserItem>
  );
};
export default Follow;
