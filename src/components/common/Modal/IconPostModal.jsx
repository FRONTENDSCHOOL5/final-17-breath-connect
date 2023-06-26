import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import Alert from '../../common/Alert/Alert';
import LogOut from '../Alert/LogOut';
import { useNavigate } from 'react-router-dom';
import { deletePost } from '../../../utils/Apis';
import { tokenAtom } from '../../../atoms/UserAtom';

const IconPostModal = ({ topText, btmText, accountName, data, key, setIsPostDeleted,
comment, onClick }) => {

  console.log(comment);
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertDone, setAlertDone] = useState('');
  const [postDelete, setPostDelete] = useState(false);
  const navigate = useNavigate();
  const url = window.location.href;

  const token = useRecoilValue(tokenAtom);
  // console.log(data);

  const deleteClick = async () => {
    if (topText === '삭제') {
      setAlertMessage('게시물을 삭제하시겠습니까?');
      setShowAlert(true);
      setPostDelete(true);
      await fetchDeletePost();
      setAlertDone("게시물이 삭제되었습니다.");
      setShowModal(false);
      navigate(`/profile/${accountName}`); 
    } else if (topText === '설정 및 개인정보') {
      // setShowModal(false); // Close the modal
      navigate(`/profile/${accountName}/editProfile`)
    } else if (topText === '신고하기') {
      setAlertMessage('게시물을 신고하시겠습니까?');
      setShowAlert(true);
      setAlertDone("게시물이 신고되었습니다.")
    }
  };


  const fetchDeletePost = async (e) => {
    const response = await deletePost(data.id, token);
  }

  const modifyClick = () => {
    if (btmText === '수정') {
      // console.log(accountName)
      navigate(`/post/upload/map`)
    } else if (btmText === '로그아웃') {
      setAlertMessage('계정을 로그아웃 하시겠습니까?');
      setShowLogOut(true);
      setAlertDone("계정이 로그아웃 되었습니다.")
    } else if (btmText === '공유하기'){
      navigator.clipboard.writeText(url);
      alert('✨ 주소가 복사되었습니다 오예~!✨');
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const handleLogOutClose = () => {
    setShowLogOut(false);
  }

  return (
    <>
        <div>
          <Separator />
          <ModalButtons>
            <button onClick={deleteClick}>{topText}</button>
            <button onClick={modifyClick}>{btmText}</button>
          </ModalButtons>
        </div>
        {showAlert && <Alert message={alertMessage} setIsPostDeleted={setIsPostDeleted}
onClose={handleAlertClose} done={alertDone} text={topText.replace("하기","")} />}
        {showLogOut && <LogOut message={alertMessage} onClose={handleLogOutClose} done={alertDone}/>}
    </>
  );
};

export default IconPostModal;

const Separator = styled.div`
  width: 5rem;
  height: 0.4rem;
  background: ${({ theme }) => theme.colors.borderColor};
  margin: 1.6rem 17rem;
  border-radius: 0.5rem;
`;

const ModalButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  button{
    text-align: left;
    font-size: 14px;
    padding: 1.3rem 0rem 1.4rem 2.6rem;
  }
`;
