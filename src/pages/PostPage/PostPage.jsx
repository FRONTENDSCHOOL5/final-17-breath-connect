import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import TimePicker from "rc-time-picker";
import moment from 'moment';
import { ko } from 'date-fns/esm/locale';
import "rc-time-picker/assets/index.css"
import styled from 'styled-components';
import TopUploadHeader from '../../components/Header/TopUploadHeader'
import "react-datepicker/dist/react-datepicker.css"

// date-picker 설치
// npm install react-datepicker
// time-picker 설치
// npm install rc-time-picker
// moment 설치
// npm install moment
// date-fns 설치
// npm install date-fns

const PostPage = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
    <TopUploadHeader text={'업로드'}/>

    <Container>
      <h1>게시글 정보를 입력해주세요.</h1>
    <DateTime>
        <DateContainer>
          <p>일시</p>
          <SDatePicker locale={ko} dateFormat="EEEE, MM/dd" selected={startDate} onChange={(date) => setStartDate(date)}/>
        </DateContainer>

        <TimeContainer>
        <p>시간</p>
          <STimePicker defaultValue={moment()} showSecond={false} minuteStep={15}/>
        </TimeContainer>
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

const Container = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    font-weight: bold;
  }
  p {
    margin-bottom: 0.8rem;
  }

  section{
    margin-bottom: 2.4rem;
  }

  width: 39rem;
  color: ${({ theme }) => theme.colors.textColor};
  padding-top: 4.1rem;
  padding-bottom: 4.1rem;
  padding-left: 3.2rem ;
  padding-right: 3.2rem;
`
const DateTime = styled.section`
  display: flex;
  gap: 3.2rem;
  margin-top: 4.6rem;
`

const DateContainer = styled.div`
`

const SDatePicker = styled(DatePicker)`
width: 14.7rem;
height: 2.8rem;
color: ${({ theme }) => theme.colors.textColor};
background-color: ${({ theme }) => theme.colors.uploadBoxColor};
border: none;
border-radius: 0.5rem;
padding-left: 1.2rem;
`

const TimeContainer = styled.div`
`

const STimePicker = styled(TimePicker)`
width: 14.7rem;
border: none;
 input {
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme }) => theme.colors.uploadBoxColor};
  border: none;
  border-radius: 0.5rem;
 }

`

const TextContainer = styled.section`
textarea{
  width: 32.6rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.uploadBoxColor};
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 1.2rem;
  
}
`

const MakeCourse = styled.div`
  button {
  color: ${({ theme }) => theme.colors.mainColor};
  border: 0.1rem solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 2.5rem;
  background-color: ${({ theme }) => theme.colors.whiteText};
  width: 9rem;
  height: 2rem;
  font-size: 3px;
  /* font-size 적용 안됨 */
}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32.6rem;
  background-color: ${({ theme }) => theme.colors.uploadBoxColor};
  border-radius: 0.5rem;
  padding: 2.3rem 9.8rem 3.3rem;
`

export default PostPage