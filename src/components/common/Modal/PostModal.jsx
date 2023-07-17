import React, { useState } from 'react';
import Alert from '../Alert/Alert';
import {Container, ButtonContainer} from '../Modal/PostModalStyle'

const PostModal = ({ text }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertDone, setAlertDone] = useState('');

  const handleClick = () => {
    if (text === '삭제') {
      setAlertMessage('게시물을 삭제하시겠습니까?');
      setShowAlert(true); // 알림(Alert) 띄우기
      setAlertDone("게시물이 삭제되었습니다.")
    } else if (text === '신고하기') {
      setAlertMessage('게시물을 신고하시겠습니까?');
      setShowAlert(true);
      setAlertDone("게시물이 신고되었습니다.")
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false); // 알림(Alert) 닫기
  };

  return (
    <>
          <Container>
            <ButtonContainer>
              <button onClick={handleClick}>{text}</button>
            </ButtonContainer>
          </Container>
      {showAlert && <Alert message={alertMessage} onClose={handleAlertClose} done={alertDone}/>}
    </>
  );
};

export default PostModal;
