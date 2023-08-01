import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { accountAtom } from '../../../../atoms/UserAtom';
import { isDarkModeState } from '../../../../atoms/StylesAtom';
import Button from '../../Button/ButtonContainer';
import basicImg from '../../../../assets/images/basic-profile-s.svg';
import basicDarkImg from '../../../../assets/images/basic-profile-s-dark.svg';
import {
  Container,
  Image,
  UserContainer,
  ButtonContainer,
  UserName,
  Intro,
} from './FollowStyle.jsx';

const Follow = ({ user }) => {
  const { username, accountname, intro, image, isfollow } = user;
  const [isFollow, setIsFollow] = useState(isfollow);
  const account = useRecoilValue(accountAtom);
  const isDarkMode = useRecoilValue(isDarkModeState);
  const handleClick = () => {
    setIsFollow(!isFollow);
  };
  const numberRegex =
    /^https:\/\/api\.mandarin\.weniv\.co\.kr\/(?:(?!null|undefined)[\w.]*)$/;

  return (
    <Container>
      <Image
        src={numberRegex.test(image) ?
              image
              : isDarkMode ? basicDarkImg : basicImg}
        alt="프로필 이미지"
        width="50"
      />
      <UserContainer>
        <Link to={`/profile/${accountname}`} key={accountname}>
          <UserName>{username}</UserName>
          <Intro>{intro}</Intro>
        </Link>
      </UserContainer>
      {account !== accountname && isFollow === true && (
        <ButtonContainer>
          <Button
            type={'S'}
            text={'취소'}
            isClicked={isFollow}
            handleClick={handleClick}
          />
        </ButtonContainer>
      )}
      {account !== accountname && isFollow === false && (
        <ButtonContainer>
          <Button
            type={'S'}
            text={'팔로우'}
            isClicked={!!isFollow}
            handleClick={handleClick}
          />
        </ButtonContainer>
      )}
    </Container>
  );
};
export default Follow;
