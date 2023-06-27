import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import styled from 'styled-components';
import { ko } from 'date-fns/esm/locale';
import 'rc-time-picker/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';
import TopUploadHeader from '../../components/Header/TopUploadHeader';
import MapDrawingManager from '../../components/Map/MapDrawingManager';
import FeedMap from '../../components/Map/FeedMap';
import { postContentUpload } from '../../utils/Apis';
import TabMenu from '../../components/Footer/TabMenu'
import { useNavigate } from 'react-router-dom';

const UploadPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState(moment());
  const [text, setText] = useState('');

  const [map, setMap] = useState(true);
  const [pathProcess, setPathProcess] = useState('');

  const [enableUpload, setEnableUpload] = useState(false);
  const [isMapDrawingComplete, setIsMapDrawingComplete] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
    setEnableUpload(true);
  };

  const handleTimeChange = (event) => {
    setTime(event);
    setEnableUpload(true);
  };

  const handleTestClick = () => {
    setMap(!map);
    }

  const handleUpload = async (e) => {
    e.preventDefault();
    if (enableUpload) {
      const mapData = {
        post: {
          content: contentArray.toString(),
          image: pathProcess,
        },
      };
      const data = await postContentUpload(mapData);
      console.log(data.message);
      navigate(`/profile/${data.post.author.username}`)
    }
  };


  const handlePathProcess = (path) => {
    setPathProcess(path);
    setIsMapDrawingComplete(path !== '');
    setEnableUpload(true);
  };

  /* 일시 시간 */
  const day = startDate.toLocaleDateString('ko-KR', { weekday: 'short' });
  const month = startDate.toLocaleDateString('en-US', { month: 'numeric' });
  const date = startDate.toLocaleDateString('en-US', { day: 'numeric' });
  const dateString = `${day}, ${month}/${date}`;

  const timeString = time._d.toString().substring(15, 21);
  const textString = text;

  const characterCount = text.length;
  const contentArray = [dateString, timeString, textString];

  const handleActivateButton = () => {
    return enableUpload && isMapDrawingComplete;
  }

  return (
    <>
      <TopUploadHeader
        text={map ? '업로드' : '완료'}
        handleClick={map ? handleUpload : handleTestClick }
        isDisabled={!handleActivateButton()}
      />
      {map ? (
        <>
          <Container>
            <h1>게시글 정보를 입력해주세요.</h1>
            <DateTime>
              <div>
                <p>일시</p>
                <DatePicker
                  locale={ko}
                  dateFormat="EEEE, MM/dd"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div>
                <p>시간</p>
                <TimePicker
                  onChange={handleTimeChange}
                  defaultValue={moment()}
                  showSecond={false}
                  minuteStep={15}
                />
              </div>
            </DateTime>
            <TextContainer>
              <p>참여 상세 글</p>
              <textarea
                placeholder="참여 인원을 모집할 수 있는 홍보 문구를 작성해주세요."
                maxLength={100}
                value={text}
                onChange={handleChange}
              ></textarea>
              <SCount>({characterCount} / 100)</SCount>
            </TextContainer>
            {!pathProcess ? (
              <MakeCourse>
                <p>나만의 러닝 코스를 그려보세요!</p>
                <MakeCourseBtn onClick={handleTestClick}>
                  러닝 코스 그리기
                </MakeCourseBtn>
              </MakeCourse>
            ) : (
              <CompleteCourse>
                <FeedMap data={pathProcess} />
                <MakeCourseBtn onClick={handleTestClick}>
                  다시 그리기
                </MakeCourseBtn>
              </CompleteCourse>
            )}
            <ManualContainer>
              <Title>Map 그리는 방법</Title>
              <Content>
                <Text>지도를 드래그하여 이동할 수 있습니다.</Text>  
                <Text>지도를 클릭하면 거리 그리기가 시작됩니다.</Text>
                <Text>지도를 드래그하며 이동하고 경유할 지점을 클릭합니다.</Text>
                <Text>마지막으로 도착지점을 클릭합니다.</Text> 
                <Text>두 손가락으로 클릭하면 경로 그리기가 종료됩니다. </Text>        
              </Content>
            </ManualContainer>
          </Container>
        </>
      ) : (
        <>
          <MapDrawingManager getpath={handlePathProcess} />
        </>
      )}
      <TabMenu/>
    </>
  );
};

export default UploadPage;

const Container = styled.form`
  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxlarge};
    font-weight: bold;
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.medium};
    margin-bottom: 0.8rem;
  }
  section {
    margin-bottom: 2.4rem;
  }
  input {
    width: 14.7rem;
    height: 2.8rem;
    padding-left: 1.2rem;
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.colors.textColor};
    border: none;
  }
  textarea,
  input {
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.uploadBoxColor};
  }
  width: 39rem;
  color: ${({ theme }) => theme.colors.textColor};
  padding: 4.1rem 3.2rem;
`;
const DateTime = styled.section`
  display: flex;
  gap: 3.2rem;
  margin-top: 4.6rem;
`;

const TextContainer = styled.section`
  textarea {
    font-size: 1.2rem;
    width: 32.6rem;
    height: 10rem;
    padding: 1rem 1rem;
    position: relative;
  }
  textarea::placeholder {
    color: ${({ theme }) => theme.colors.uploadPlaceholderColor};
  }
`;

const SCount = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.mainColor};
  position: absolute;
  top: 33.9rem;
  right: 3.7rem;
`;

const MakeCourse = styled.section`
  p {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32.6rem;
  background-color: ${({ theme }) => theme.colors.uploadBoxColor};
  padding: 2.3rem 8rem 3.3rem;
  border-radius: 0.5rem;
`;

const CompleteCourse = styled.div`
  div {
    border-radius: 0.5rem;
  }
`

const MakeCourseBtn = styled.button`
  width: 8rem;
  height: 2rem;
  float: right;
  text-align: center;
  margin-top: 0.4rem;
  padding-top: 0.2rem;
  /* font-weight: bold; */
  color: ${({ theme }) => theme.colors.mainColor};
  background-color: ${({ theme }) => theme.colors.whiteText};
  border: 0.1rem solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 2.5rem;
`;

const Title = styled.h2`
  font-size: 14px;
  margin-bottom: 0.8rem;
`
const ManualContainer = styled.div`
  display: flex;
  flex-direction  : column;
`
const Content = styled.div`
  display: flex;
  flex-direction  : column;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.uploadBoxColor};
  padding: 1rem 1rem 0;
`
const Text = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.small};
  margin-bottom: 1rem;

  &:before {
    content: '✔';
    margin-right: 0.3rem;
  }
`
