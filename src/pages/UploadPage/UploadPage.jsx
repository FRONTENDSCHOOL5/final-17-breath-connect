import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import 'moment/locale/ko';
import { ko } from 'date-fns/esm/locale';
import { ThemeProvider } from 'styled-components';
import MapDrawingManager from '../../components/Map/MapDrawingManager';
import Map from '../../components/Map/FeedMap';
import Header from '../../components/Header/TopUploadHeader';
import Footer from '../../components/Footer/TabMenu';
import { tokenAtom } from '../../atoms/UserAtom';
import { isDarkModeState } from '../../atoms/StylesAtom';
import Theme, { darkColors } from '../../styles/Theme';
import { postContentUpload, putEditPost } from '../../utils/Apis';
import {
  Container,
  Main,
  Form,
  Title,
  Text,
  TextArea,
  DateSection,
  TextSection,
  Counter,
  MapSection,
  CompleteMapSection,
  Button,
  ManualSection,
  ManualTitle,
  ManualLists,
  List,
} from './UploadPageStyle';

const UploadPage = ({ editData, theme }) => {
  const navigate = useNavigate();
  const isDarkMode = useRecoilValue(isDarkModeState);
  const userToken = useRecoilValue(tokenAtom);
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState(moment());
  const [text, setText] = useState('');
  const [map, setMap] = useState(true);
  const [pathProcess, setPathProcess] = useState('');

  const [enableUpload, setEnableUpload] = useState(false);
  const [isMapDrawingComplete, setIsMapDrawingComplete] = useState(false);

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
    setTime(event);
  };

  const handleTestClick = () => {
    setMap(!map);
  };

  const handleUpload = async (e) => {
    if (!checkTime(time, startDate)) {
      alert('현재 시간 이후의 시간을 선택하셔야합니다');
      return;
    }
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
    console.log(path);
    setPathProcess(path);
    setIsMapDrawingComplete(path !== '');
  };

  useEffect(() => {
    console.log(isMapDrawingComplete);
  }, [isMapDrawingComplete]);

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

  const checkTime = (time, date) => {
    const comDate1 = date;
    const comDate2 = new Date();

    comDate1.setHours(0, 0, 0, 0);
    comDate2.setHours(0, 0, 0, 0);

    if (comDate1 < comDate2) return false;
    else if (comDate1 > comDate2) return true;
    else {
      const comTime1 = time;
      const comTime2 = moment();
      if (comTime1.isAfter(comTime2)) return true;
      else return false;
    }
  };

  return (
    <ThemeProvider
      theme={theme || (isDarkMode ? { colors: darkColors } : Theme)}
    >
      <Container>
        <Header
          text={map ? '업로드' : '완료'}
          handleClick={map ? handleUpload : handleTestClick}
          isDisabled={map ? !isMapDrawingComplete : !handleActivateButton()}
        />
        {map ? (
          <Main>
            <Form>
              <Title>게시글 정보를 입력해주세요.</Title>
              <DateSection>
                <div>
                  <Text>일시</Text>
                  <DatePicker
                    locale={ko}
                    dateFormat="EEEE, MM/dd"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div>
                  <Text>시간</Text>
                  <TimePicker
                    onChange={handleTimeChange}
                    value={time}
                    showSecond={false}
                    minuteStep={15}
                  />
                </div>
              </DateSection>
              <TextSection>
                <Text>참여 상세 글</Text>
                <TextArea
                  placeholder="참여 인원을 모집할 수 있는 홍보 문구를 작성해주세요."
                  maxLength={100}
                  value={text}
                  onChange={handleChange}
                ></TextArea>
                <Counter>({characterCount} / 100)</Counter>
              </TextSection>
              {!pathProcess ? (
                <MapSection>
                  <Text>나만의 러닝 코스를 그려보세요!</Text>
                  <Button onClick={handleTestClick}>러닝 코스 그리기</Button>
                </MapSection>
              ) : (
                <CompleteMapSection>
                  <Map data={pathProcess} />
                  <Button onClick={handleTestClick}>다시 그리기</Button>
                </CompleteMapSection>
              )}
              <ManualSection>
                <ManualTitle>Map 그리는 방법</ManualTitle>
                <ManualLists>
                  <List>✔ 지도를 드래그하여 이동할 수 있습니다.</List>
                  <List>✔ 지도를 클릭하면 거리 그리기가 시작됩니다.</List>
                  <List>
                    ✔ 지도를 드래그하며 이동하고 경유할 지점을 클릭합니다.
                  </List>
                  <List>✔ 마지막으로 도착지점을 클릭합니다.</List>
                  <List>
                    ✔ 두 손가락으로 클릭하면 경로 그리기가 종료됩니다.
                  </List>
                </ManualLists>
              </ManualSection>
            </Form>
          </Main>
        ) : (
          <>
            <MapDrawingManager getpath={handlePathProcess} />
          </>
        )}
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default UploadPage;
