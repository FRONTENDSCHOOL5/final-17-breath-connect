import React from 'react';
import styled from 'styled-components';
import FollowCount from './FollowCount';
import basicProfile from '../../assets/images/basic-profile-l.svg';
import ButtonContainer from '../../components/common/Button/ButtonContainer';

const UserInfo = ({ data }) => {
  // 본인 개정인지 확인하는 방법이 필요함.
  return (
    <Container>
      <InfoHeader>
        <FollowCount follow={'Follower'} data={data} />
        <div>
          {data.image ? (
            <img src={data.profile.image} alt="유저 이미지" />
          ) : (
            <img src={basicProfile} alt="유저 기본 이미지" />
          )}
        </div>
        <FollowCount follow={'Following'} data={data} />
      </InfoHeader>
      <UserProfile>
        <BoldText>{data.profile.username}</BoldText>
        <UsetNcikName>@ {data.profile.accountname}</UsetNcikName>
        <UserIntoroduce>{data.profile.intro}</UserIntoroduce>
      </UserProfile>
      <UserInteraction>
        {false ? (
          <ButtonContainer
            type={'M'}
            text={data.profile.isfollow ? '언팔로우' : '팔로우'}
          />
        ) : (
          <>
            <ButtonContainer type={'M'} text={'러닝 등록'} isClicked={'true'} />
            <ButtonContainer
              type={'M'}
              text={'프로필 수정'}
              isClicked={'true'}
            />
          </>
        )}
      </UserInteraction>
      {/* 본인 개정이면 내가 올린글 아니면 확인후 해당하는 author의 이름을 적는다. */}
      <SelectionBox>내가 올린 글</SelectionBox>
    </Container>
  );
};

export default UserInfo;

const Container = styled.div`
  text-align: center;
`;

const InfoHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1.4rem;
  padding: 1.6rem;
`;
const UserProfile = styled.div`
  text-align: center;
`;
const BoldText = styled.div`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.large};
`;

const UsetNcikName = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.2rem;
  margin-top: 0.6rem;
`;
const UserIntoroduce = styled.div`
  margin-top: 1.6rem;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.textColor};
`;
const UserInteraction = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.4rem;
  gap: 1rem;
  margin-bottom: 2.6rem;
`;

const SelectionBox = styled.div`
  background-color: #f6f5f6;
  box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.2);
  color: #6521d3;
  height: 3.4rem;
  text-align: center;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  padding-top: 1.1rem;
`;
