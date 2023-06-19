import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import TimePicker from "rc-time-picker";
import moment from 'moment';
import styled from 'styled-components';
import { ko } from 'date-fns/esm/locale';
import "rc-time-picker/assets/index.css"
import "react-datepicker/dist/react-datepicker.css"
import TopUploadHeader from '../../components/Header/TopUploadHeader'

// date-picker 설치
// npm install react-datepicker
// time-picker 설치
// npm install rc-time-picker
// moment 설치
// npm install moment
// date-fns 설치
// npm install date-fns

const UploadPage = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
    <TopUploadHeader text={'업로드'}/>

    <Container>
      <h1>게시글 정보를 입력해주세요.</h1>
      <DateTime>
        <div>
          <p>일시</p>
          <DatePicker locale={ko} dateFormat="EEEE, MM/dd" selected={startDate} onChange={(date) => setStartDate(date)}/>
        </div>
        <div>
          <p>시간</p>
          <TimePicker defaultValue={moment()} showSecond={false} minuteStep={15}/>
        </div>
      </DateTime>

      <TextContainer>
        <p>참여 상세 글</p>
        <textarea placeholder="참여 인원을 모집할 수 있는 홍보 문구를 작성해주세요."></textarea>
      </TextContainer>

      <p>러닝 코스 만들기</p>
      <MakeCourse>
        <p>나만의 러닝 코스를 그려보세요!</p>
        <button>러닝 코스 그리기</button>
      </MakeCourse>
    </Container>
    </>
  );
}
// styled-component 적용
const Container = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    font-weight: bold;
  }
  p {
    margin-bottom: 0.8rem;
  }
  section {
    margin-bottom: 2.4rem;
  }
  input {
  width: 14.7rem;
  height: 2.8rem;
  padding-left: 1.2rem;
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  color: ${({ theme }) => theme.colors.textColor};
  border: none;
  }
  textarea, input {
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.uploadBoxColor};
  }
  width: 39rem;
  color: ${({ theme }) => theme.colors.textColor};
  padding: 4.1rem 3.2rem;
`
const DateTime = styled.section`
  display: flex;
  gap: 3.2rem;
  margin-top: 4.6rem;
`

const TextContainer = styled.section`
textarea{
  width: 32.6rem;
  height: 10rem;
  padding: 1rem 1.2rem;
}
`

const MakeCourse = styled.div`
  button {
  width: 9rem;
  height: 2rem;
  color: ${({ theme }) => theme.colors.mainColor};
  background-color: ${({ theme }) => theme.colors.whiteText};
  border: 0.1rem solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 2.5rem;
}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32.6rem;
  background-color: ${({ theme }) => theme.colors.uploadBoxColor};
  padding: 2.3rem 9.8rem 3.3rem;
`

export default UploadPage