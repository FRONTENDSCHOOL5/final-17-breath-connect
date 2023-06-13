import React from "react";
import UserInfo from '../UserInfo/UserInfo';
//import Button from '../../common/Button';
import styled from 'styled-components';
import profileimg from '../../../assets/Img/basic-profile-img.png';
import  { useState } from "react";
import { Link } from "react-router-dom";


   function UserFollow({user}) {
    const [isFollowing, setIsFollowing] = useState(false);
    
    return (
        
      <FollowWrapper>
       <StyledLink to={`/profile/${user.accountname}`}></StyledLink>
        <ImageBox src={profileimg}  alt="프로필 이미지" />
        <UserInfo userName={user.userName} userIntroduce={user.userIntroduce} />
        <Button
          size="small"
          label={isFollowing ? "취소" : "팔로우"}
          active={true}
          primary={isFollowing ? false : true}
          onClick={() => setIsFollowing(!isFollowing)}
        />
      </FollowWrapper>
    );
  };
  
  export default UserFollow;
  
  const FollowWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: 358px;
    margin: 0px auto;
    
  `;
  
  const ImageBox = styled.img`
    width: 50px;
    height: 50px;
    max-width: 50px;
    min-height: 50px;
  `;
  
  const Button = styled.button`
    width: 56px;
    justify-self: end;
    margin-left: auto;
  `;
    const StyledLink = styled(Link)`
      display: flex;
      justify-content: flex-start;
    `


