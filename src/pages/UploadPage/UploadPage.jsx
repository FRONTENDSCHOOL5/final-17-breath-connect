import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import 'moment/locale/ko';
import { ko } from 'date-fns/esm/locale';
import 'rc-time-picker/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';
import TopUploadHeader from '../../components/Header/TopUploadHeader';
import MapDrawingManager from '../../components/Map/MapDrawingManager';
import FeedMap from '../../components/Map/FeedMap';
import { postContentUpload, putEditPost } from '../../utils/Apis';
import TabMenu from '../../components/Footer/TabMenu';
import { useNavigate } from 'react-router-dom';
import { tokenAtom } from '../../atoms/UserAtom';
import { useRecoilValue } from 'recoil';
import {
  Container,
  DateSection,
  TextSection,
  Counter,
  MapSection,
  CompleteMapSection,
  Button,
  ManualSection,
  ManualContents,
} from './UploadPageStyle';

import { ThemeProvider } from 'styled-components';
import { isDarkModeState } from '../../atoms/StylesAtom';
import Theme, { darkColors } from '../../styles/Theme';

const UploadPage = ({ editData, theme }) => {
  const isDarkMode = useRecoilValue(isDarkModeState);
  const userToken = useRecoilValue(tokenAtom);
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState(moment());
  const [text, setText] = useState('');
  const [map, setMap] = useState(true);
  const [pathProcess, setPathProcess] = useState('');
  const [enableUpload, setEnableUpload] = useState(false);
  const [isMapDrawingComplete, setIsMapDrawingComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (editData) {
      const timeString = JSON.parse(editData.content)[1].toString();
      const dateString = JSON.parse(editData.content)[0].toString();
      const dateArray = dateString.split(',');
      const dateInfo = dateArray[1].trim();
      const [month, day] = dateInfo
        .split('/')
        .map((item) => parseInt(item.trim(), 10));
      const year = dateArray[dateArray.length - 1];
      const date = new Date(year, month - 1, day);
      const timeMoment = moment(timeString, 'HH:mm');

      setTime(timeMoment);
      setStartDate(date);
      setText(JSON.parse(editData.content)[2]);
      setPathProcess(editData.image);
      setEnableUpload(true);
      setIsMapDrawingComplete(true);
    }
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
    setEnableUpload(true);
  };

  const handleTimeChange = (event) => {
    console.log('event', event);
    setTime(event);
  };

  const handleTestClick = () => {
    setMap(!map);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (enableUpload) {
      const mapData = {
        post: {
          content: JSON.stringify(contentArray),
          image: pathProcess,
        },
      };
      const data = editData
        ? await putEditPost(userToken, mapData, editData.id)
        : await postContentUpload(userToken, mapData);
      editData
        ? navigate(`/profile/${editData.author.accountname}`)
        : navigate(`/profile/${data.post.author.accountname}`);
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
  const year = startDate.toLocaleDateString('en-US', { year: 'numeric' });
  const dateString = `${day}, ${month}/${date}, ${year}`;

  const characterCount = text.length;
  const contentArray = [
    [dateString],
    [time.hour() + ':' + time.minute()],
    [text],
  ];

  const handleActivateButton = () => {
    return enableUpload && isMapDrawingComplete;
  };

  return (
    <ThemeProvider
      theme={theme || (isDarkMode ? { colors: darkColors } : Theme)}
    >
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
                    // onChange={handleDateChange}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div>
                  <p>시간</p>
                  <TimePicker
                    onChange={handleTimeChange}
                    value={time}
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
                  <Button onClick={handleTestClick}>러닝 코스 그리기</Button>
                </MapSection>
              ) : (
                <CompleteMapSection>
                  <FeedMap data={pathProcess} />
                  <Button onClick={handleTestClick}>다시 그리기</Button>
                </CompleteMapSection>
              )}
              <ManualSection>
                <h2>Map 그리는 방법</h2>
                <ManualContents>
                  <li>✔ 지도를 드래그하여 이동할 수 있습니다.</li>
                  <li>✔ 지도를 클릭하면 거리 그리기가 시작됩니다.</li>
                  <li>
                    ✔ 지도를 드래그하며 이동하고 경유할 지점을 클릭합니다.
                  </li>
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
    </ThemeProvider>
  );
};

export default UploadPage;
