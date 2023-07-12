import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import { ko } from 'date-fns/esm/locale';
import 'rc-time-picker/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';
import TopUploadHeader from '../../components/Header/TopUploadHeader';
import MapDrawingManager from '../../components/Map/MapDrawingManager';
import FeedMap from '../../components/Map/FeedMap';
import { postContentUpload } from '../../utils/Apis';
import TabMenu from '../../components/Footer/TabMenu';
import { useNavigate } from 'react-router-dom';
import { tokenAtom } from '../../atoms/UserAtom';
import { useRecoilValue } from 'recoil';
import { Container, DateSection, TextSection, Counter, MapSection, CompleteMapSection, Button, ManualSection, ManualContents } from './UploadPageStyle';

const UploadPage = () => {
  const userToken = useRecoilValue(tokenAtom);
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
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (enableUpload) {
      const mapData = {
        post: {
          content: contentArray.toString(),
          image: pathProcess,
        },
      };
      const data = await postContentUpload(userToken, mapData);
      navigate(`/profile/${data.post.author.accountname}`);
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
  };

  return (
    <>
      <TopUploadHeader
        text={map ? '업로드' : '완료'}
        handleClick={map ? handleUpload : handleTestClick}
        isDisabled={!handleActivateButton()}
      />
      {map ? (
        <main>
          <Container>
            <h1>게시글 정보를 입력해주세요.</h1>
            <DateSection>
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
            </DateSection>
            <TextSection>
              <p>참여 상세 글</p>
              <textarea
                placeholder="참여 인원을 모집할 수 있는 홍보 문구를 작성해주세요."
                maxLength={100}
                value={text}
                onChange={handleChange}
              ></textarea>
              <Counter>({characterCount} / 100)</Counter>
            </TextSection>
            {!pathProcess ? (
              <MapSection>
                <p>나만의 러닝 코스를 그려보세요!</p>
                <Button onClick={handleTestClick}>
                  러닝 코스 그리기
                </Button>
              </MapSection>
            ) : (
              <CompleteMapSection>
                <FeedMap data={pathProcess} />
                <Button onClick={handleTestClick}>
                  다시 그리기
                </Button>
              </CompleteMapSection>
            )}
            <ManualSection>
              <h2>Map 그리는 방법</h2>
              <ManualContents>
                <li>✔ 지도를 드래그하여 이동할 수 있습니다.</li>
                <li>✔ 지도를 클릭하면 거리 그리기가 시작됩니다.</li>
                <li>✔ 지도를 드래그하며 이동하고 경유할 지점을 클릭합니다.</li>
                <li>✔ 마지막으로 도착지점을 클릭합니다.</li>
                <li>✔ 두 손가락으로 클릭하면 경로 그리기가 종료됩니다.</li>
              </ManualContents>
            </ManualSection>
          </Container>
        </main>
      ) : (
        <>
          <MapDrawingManager getpath={handlePathProcess} />
        </>
      )}
      <TabMenu />
    </>
  );
};

export default UploadPage;