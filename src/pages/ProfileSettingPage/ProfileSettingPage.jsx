import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import BasicProfileImg from '../../assets/images/basic-profile-l.svg'
import GlovalSprite from '../../assets/sprite/GlovalSprite.jsx';

import Input from '../../components/common/Input/Input';
import ButtonContainer from '../../components/common/Button/ButtonContainer';

import {
  postAccountnameDuplicate,
  postUserSignup,
  postUploadProfile,
} from '../../utils/Apis'

const ProfileSettingPage = () => {

  const URL = 'https://api.mandarin.weniv.co.kr/';

  const navigate = useNavigate();
  const fileInputRef = useRef();
  const location = useLocation();
  const userEmail = location.state.email;
  const userPassword = location.state.password;

  const [username, setUsername] = useState('');
  const [accountname, setAccountname] = useState('');
  const [intro, setIntro] = useState('');
  const [image, setImage] = useState('');
  const [usernameErrorMsg, setUsernameErrorMsg] = useState('');
  const [accountnameErrorMsg, setAccountnameErrorMsg] = useState('');
  const [usernameValid, setUsernameValid] = useState(false);
  const [accountnameValid, setAccountnameValid] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

 const formData = new FormData();

 const handleInputImage = async (e) => {
  const file = e.target.files[0];
  formData.append("image", file);
  const imgData = await postUploadProfile(formData);
  console.log(imgData);
  setImage(URL + '/' + imgData[0].filename);
  };

  // username 유효성 검사
  const handleInputUsername = (e) => {
    const username = e.target.value;
    const usernameRegex = /^[a-zA-Z0-9]{2,10}$/;
    if(username === '') {
      setUsernameErrorMsg('* 입력해주세요');
    } else if (!usernameRegex.test(username)) {
      setUsernameErrorMsg('* 2~10자 이내로 입력해주세요');    
  } else {
    setUsernameErrorMsg('');
    setUsernameValid(true);
    setUsername(username);
  }
}

// accountname 유효성 검사
const handleInputAccountname = async (e) => {
  const accountname = e.target.value;
  const accountnameRegex = /^[a-zA-Z0-9._]+$/;
  const checkAccountname = await postAccountnameDuplicate(accountname);
  if(accountname === '') {
    setAccountnameErrorMsg('* 입력해주세요');
    setAccountnameValid(false);
  } else if (!accountnameRegex.test(accountname)) {
    setAccountnameErrorMsg('* 영문, 숫자, 특수문자 ., _ 만 입력해주세요');
    setAccountnameValid(false);
  } else if (checkAccountname.message === '이미 가입된 계정ID 입니다.') {
    setAccountnameErrorMsg('* 이미 존재하는 계정ID 입니다.');
    setAccountnameValid(false);
  } else {
    setAccountnameValid(true);
    setAccountnameErrorMsg('');
    setAccountname(accountname);
  }
}

  /* 버튼 활성화 */
  const handleActivateButton = () => {
    return usernameValid && accountnameValid;
  };

const handleProfileSignup = async (e) => {
  e.preventDefault();
    if(usernameValid && accountnameValid) {
      const signupData = await postUserSignup (
      username,
      userEmail,
      userPassword,
      accountname,
      intro,
      image
      )
      setIsComplete(true);
      console.log(signupData);
      navigate('/login');
    } else {
      setIsComplete(false);
    }
}

  return (
    <>
    <ProfileSettingSection>
    <ProfileSettingTitle>프로필 설정</ProfileSettingTitle>
    <p className="profileSetting-description">나중에 언제든지 변경할 수 있습니다.</p>
    <UploadForm onSubmit={handleProfileSignup}>   
     <ImageWrap> 
      <label htmlFor="upload-image">
      <ProfileImage src={image ? image : BasicProfileImg} alt="사용자 프로필 이미지" />
      </label>
      <ProfileImageInput 
      type="file" 
      accept="image/png, image/jpg, image/jpeg" 
      id="upload-image"
      ref={fileInputRef}
      onChange={handleInputImage} />
        {/* <GlovalSprite id="upload-file" size="3.6rem"/> */}
     </ImageWrap>
     <Input
          label='사용자 이름'
          placeholder='2~10자 이내여야 합니다.'
          id='username'
          type='text'
          name='username'
          onChange={handleInputUsername}
          required
        />
        {usernameErrorMsg && <ErrorMsg>{usernameErrorMsg}</ErrorMsg>}
     <Input
          label='계정 ID'
          placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
          id='accountname'
          type='text'
          name='accountname'
          onChange = {handleInputAccountname}
          required
        />
        {accountnameErrorMsg && <ErrorMsg>{accountnameErrorMsg}</ErrorMsg>}
     <Input
          label='소개'
          placeholder='자신에 대해 소개해 주세요!'
          id='intro'
          type='text'
          name='intro'
          required
        />
        <ButtonContainer type={'L'} text={'들숨날숨 시작하기'} isDisabled = {!handleActivateButton()} 
        handleClick={handleProfileSignup}/>
        </UploadForm>
         </ProfileSettingSection>
        </>
    )
  }

export default ProfileSettingPage;

const ProfileSettingSection = styled.section`
margin: 0 auto;
.profileSetting-description {
  margin-top: 1.4rem;
  color: ${({theme}) => theme.colors.textColor};
  font-size: ${({theme}) => theme.fontSize.medium};
  text-align: center;
  .spriteImg-wrapper {
    position: absolute;
    bottom: 0;
  }
  .upload-button {
    position: absolute;
    left: 0;
  }
}
`

const ProfileSettingTitle = styled.h1`
color: ${({theme}) => theme.colors.blackText};
font-size: ${({theme}) => theme.fontSize.xxlarge};
padding-top: 2.7rem;
text-align: center;
`

const ImageWrap = styled.div`
width: 11rem;
height: 11rem;
margin: 2.9rem auto 10rem;
  label {
    display: block;
    width: 11rem;
    height: 11rem;
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;
  }
`

const UploadForm = styled.form`
`

const ProfileImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
position: relative;
`
const ProfileImageInput = styled.input`
width: 0.1rem;
height: 0.1rem;
position: absolute;
z-index: -1000rem;
`

const ErrorMsg = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.errorText};
    font-size: ${theme.fontSize.small};
    /* margin-top: 0.4rem; */
  `}
`;
