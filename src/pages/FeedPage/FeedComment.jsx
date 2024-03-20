import React from 'react';
import { useRecoilValue } from 'recoil';
import { isDarkModeState } from '../../atoms/StylesAtom';
import BasicProfile from '../../assets/images/basic-profile-xs.svg';
import BasicDarkProfile from '../../assets/images/basic-profile-xs-dark.svg';
import GlobalSprite from '../../assets/sprite/GlobalSprite';
import { Container, Image, CommentSection, Contents, UserInfo, UserName, Time, Comment, Button } from "./FeedCommentStyle";

const FeedComment = ({ user, content, image, time, handleCommentClick }) => {
  const isDarkMode = useRecoilValue(isDarkModeState);
  const createdTime = () => {
    const year = time.slice(0, 4) + '년 ';
    const month = time.slice(5, 7) + '월 ';
    const date = time.slice(8, 10) + '일';
    return year + month + date;
  }

  return (
    <Container>
      <CommentSection>
        <Image src={isDarkMode ? BasicDarkProfile : BasicProfile } alt="유저 프로필 이미지" />
        <Contents>
          <UserInfo>
            <UserName>{user}</UserName>
            <Time>{createdTime()}</Time>
          </UserInfo>
          <Comment>{content}</Comment>
        </Contents>
      </CommentSection>
      <Button onClick={handleCommentClick}>
        <GlobalSprite id={'s-icon-more-vertical'} color={'white'} size={16}/>
      </Button>
    </Container>
  );
};

export default FeedComment;
