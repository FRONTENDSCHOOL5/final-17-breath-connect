import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import AddImg from '../../../assets/sprite/img-btn.svg';
import {
  accountAtom,
  profileImgAtom,
  usernameAtom,
  introAtom,
  tokenAtom,
} from '../../../atoms/UserAtom';
import Input from '../../../components/common/Input/Input';
import TopUploadHeader from '../../../components/Header/TopUploadHeader';

import {
  getMyInfo,
  postAccountnameDuplicate,
  postUploadProfile,
  editProfile,
} from '../../../utils/Apis';
import { useRecoilValue } from 'recoil';

const ProfileEditPage = () => {
  const URL = 'https://api.mandarin.weniv.co.kr';
  const userToken = useRecoilValue(tokenAtom);

  const navigate = useNavigate();
  const fileInputRef = useRef();
  const formData = new FormData();

  const [username, setUsername] = useState('');
  const [accountname, setAccountname] = useState('');
  const [intro, setIntro] = useState('');
  const [image, setImage] = useState('');
  const [usernameErrorMsg, setUsernameErrorMsg] = useState('');
  const [accountnameErrorMsg, setAccountnameErrorMsg] = useState('');
  const [usernameValid, setUsernameValid] = useState(false);
  const [accountnameValid, setAccountnameValid] = useState(false);
  const [userIntro, setUserIntro] = useRecoilState(introAtom);

  const setAtomAccount = useSetRecoilState(accountAtom);
  const setAtomIntroAtom = useSetRecoilState(introAtom);
  const setAtomProfileImgAtom = useSetRecoilState(profileImgAtom);
  const setAtomUsernameAtom = useSetRecoilState(usernameAtom);

  /* 기존 프로필 정보 불러오기 */
  useEffect(() => {
    const fetchMyInfo = async () => {
      const response = await getMyInfo(userToken);
      setUsername(response.user.username);
      setAccountname(response.user.accountname);
      setIntro(response.user.intro);
      setImage(response.user.image);
    };
    fetchMyInfo();
  }, []);

  /* 이미지 업로드 */
  const handleInputImage = async (e) => {
    const file = e.target.files[0];
    formData.append('image', file);
    const imgData = await postUploadProfile(formData);
    setImage(URL + '/' + imgData.filename);
  };

  // username 유효성 검사
  const handleInputUsername = (e) => {
    const usernameInp = e.target.value;
    const usernameRegex = /^[a-zA-Z0-9]{2,10}$/;
    if (usernameInp === '') {
      setUsernameErrorMsg('*입력해주세요');
    } else if (!usernameRegex.test(usernameInp)) {
      setUsernameErrorMsg('*영문 2~10자 이내로 입력해주세요');
    } else {
      setUsernameErrorMsg('');
      setUsernameValid(true);
      setUsername(usernameInp);
    }
  };

  // accountname 유효성 검사
  const handleInputAccountname = async (e) => {
    const accountnameInp = e.target.value;
    const accountnameRegex = /^[a-zA-Z0-9._]+$/;
    const checkAccountname = await postAccountnameDuplicate(accountnameInp);
    if (accountnameInp === '') {
      setAccountnameErrorMsg('*입력해주세요');
      setAccountnameValid(false);
    } else if (!accountnameRegex.test(accountnameInp)) {
      setAccountnameErrorMsg('*영문, 숫자, 특수문자 ., _ 만 입력해주세요');
      setAccountnameValid(false);
    } else if (checkAccountname.message === '이미 가입된 계정ID 입니다.') {
      setAccountnameErrorMsg('*이미 존재하는 계정ID 입니다 😥');
      setAccountnameValid(false);
    } else {
      setAccountnameValid(true);
      setAccountnameErrorMsg('');
      setAccountname(accountnameInp);
    }
  };

  const handleInputIntro = (e) => {
    const inputValue = e.target.value;
    const maxLength = 25;

    if (inputValue.length <= maxLength) {
      setIntro(inputValue);
    } else {
      e.target.value = inputValue.slice(0, maxLength);
    }
  };

  /* 버튼 활성화 */
  const handleActivateButton = () => {
    return usernameValid && accountnameValid;
  };

  /* 에러 메시지 초기화 */
  useEffect(() => {
    setUsernameErrorMsg();
  }, [username]);

  useEffect(() => {
    setAccountnameErrorMsg();
  }, [accountname]);

  /* 프로필 수정 */
  const handleProfileEdit = async (e) => {
    e.preventDefault();
    if (usernameValid && accountnameValid) {
      await editProfile({
        username,
        accountname,
        intro,
        image,
      });
      setUserIntro(intro);
      setAtomAccount(accountname);
      setAtomIntroAtom(intro);
      setAtomProfileImgAtom(image);
      setAtomUsernameAtom(username);

      alert('프로필 수정이 완료되었습니다 🌬️');
      navigate(`/profile/${accountname}`);
    }
  };

  return (
    <>
      <TopUploadHeader
        text="저장"
        isDisabled={!handleActivateButton()}
        handleClick={handleProfileEdit}
      />
      <ProfileEditContainer>
        <UploadForm onSubmit={handleProfileEdit}>
          <ImageWrap>
            <label htmlFor="upload-image">
              <ProfileImage src={image} alt="사용자 프로필 이미지" />
            </label>
            <ProfileImageInput
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              id="upload-image"
              ref={fileInputRef}
              onChange={handleInputImage}
            />
          </ImageWrap>
          <Input
            label="사용자 이름"
            placeholder="2~10자 이내여야 합니다."
            id="username"
            type="text"
            name="username"
            onChange={handleInputUsername}
            required
          />
          {usernameErrorMsg && <ErrorMsg>{usernameErrorMsg}</ErrorMsg>}
          <Input
            label="계정 ID"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            id="accountname"
            type="text"
            name="accountname"
            onChange={handleInputAccountname}
            required
          />
          {accountnameErrorMsg && <ErrorMsg>{accountnameErrorMsg}</ErrorMsg>}
          <div className="button-margin">
            <Input
              label="소개"
              placeholder="자신에 대해 소개해 주세요!"
              id="intro"
              type="text"
              name="intro"
              onChange={handleInputIntro}
              required
            />
          </div>
        </UploadForm>
      </ProfileEditContainer>
    </>
  );
};

export default ProfileEditPage;

const ProfileEditContainer = styled.main`
  margin: 0 auto;
  .spriteImg-wrapper {
    position: absolute;
    bottom: 0;
  }
  .upload-button {
    position: absolute;
    left: 0;
  }
`;

const ImageWrap = styled.div`
  label {
    position: relative;
    display: block;
    width: 11rem;
    height: 11rem;
    margin: 3.5rem auto 5.5rem;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.placeHolderColor};
    &::after {
      content: '';
      display: block;
      background: url(${AddImg}) no-repeat center / 3.6rem 3.6rem;
      width: 3.6em;
      height: 3.6rem;
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 2;
    }
  }
`;

const UploadForm = styled.form`
  .button-margin {
    margin-bottom: 3rem;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
`;

const ProfileImageInput = styled.input`
  width: 0.1rem;
  height: 0.1rem;
  position: absolute;
  z-index: -1000rem;
`;

const ErrorMsg = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.errorText};
    font-size: ${theme.fontSize.small};
    margin-top: -0.9rem;
  `}
`;
