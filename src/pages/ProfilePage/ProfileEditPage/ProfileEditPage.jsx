import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useQuery, useMutation } from 'react-query';
import { postAccountnameDuplicate } from '../../../api/auth';
import { getMyInfo, editProfile } from '../../../api/profile';
import ProfileForm from '../../../components/Profile/ProfileForm';
import { userInfoAtom } from '../../../atoms/UserAtom';

const ProfileEditPage = () => {
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);

  const { data: myInfo, isLoading } = useQuery('getProfile', getMyInfo);

  const { mutate: accountname } = useMutation('accountnameValid', postAccountnameDuplicate, {
    onSuccess: (res) => {
      if (res.message === "이미 가입된 계정ID 입니다.") {
        setIsError(true);
        setMessage(res.message);
      } else {
        setIsError(false);
        setMessage(res.message)
      }
    },
    onError: (error) => {
      console.log(error);
    }
  }) 

  const { mutate: edit } = useMutation('edit', editProfile, {
    onSuccess: (res) => {
      if (res.status === 200) {
        setUserInfo({
          ...userInfo,
        account: res.user.accountname,
        profileImg: res.user.image,
        username: res.user.username,
        intro: res.user.intro,
        })
        navigate(`/profile/${accountname}`);
      } else {
        setIsError(true);
      }
    }
  })

  if (isLoading) {
    return <p>Loading...</p>; 
  }
  return (
    <Container>
    <Title>프로필 수정</Title>
      <ProfileForm myInfo={myInfo} accountname={accountname} isError={isError} message={message} edit={edit} />
        </Container>
    )
  }

export default ProfileEditPage;

const Container = styled.main`
  margin: 0 auto;
`
const Title = styled.h1`
  padding-top: 2.7rem;
  color: ${({theme}) => theme.colors.blackText};
  font-size: ${({theme}) => theme.fontSize.xxlarge};
  text-align: center;
`