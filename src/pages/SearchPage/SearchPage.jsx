import React, { useState, useEffect } from 'react';
import TopSearchNavHeader from '../../components/Header/TopSearchNavHeader';
import TabMenu from '../../components/Footer/TabMenu';
import profileImg from '../../assets/images/basic-profile-m.svg';
import profileDarkImg from '../../assets/images/basic-profile-m-dark.svg';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { tokenAtom } from '../../atoms/UserAtom';
import { getSearchResult } from '../../utils/Apis';
import {
  Main,
  NoResultsText,
  Button,
  Image,
  Section,
  HighlightedText,
  UserName,
  NickName,
} from './SearchPageStyle';
import { isDarkModeState } from '../../atoms/StylesAtom';
import { ThemeProvider } from 'styled-components';
import Theme, { darkColors } from '../../styles/Theme';

const SearchPage = ({theme}) => {
  const navigate = useNavigate();
  const token = useRecoilValue(tokenAtom);
  const url = 'https://api.mandarin.weniv.co.kr';
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const numberRegex =
    /^https:\/\/api\.mandarin\.weniv\.co\.kr\/(?:(?!null|undefined)[\w.]*)$/;

function debounce(func, delay) {
  let timerId;
  function debounced(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => func.apply(this, args), delay);
  }
  debounced.cancel = () => clearTimeout(timerId);
  return debounced;
}

  useEffect(() => {
    const fetchData = async () => {
      if (search === '') {
        setData([]);
        return;
      }
      try {
        const result = await getSearchResult(url, search, token);
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    const debounceFetchData = debounce(fetchData, 500); 

    debounceFetchData(); 

    return () => {
      debounceFetchData.cancel(); 
    };
  }, [search, token]);

  const handleProfileClick = (index) => {
    if (data && data[index]) {
      navigate(`/profile/${data[index].accountname}`, {
        state: { data: data[index] },
      });
    }
  };

  const highlightText = (text, search) => {
    const regex = new RegExp(`(${search})`, 'gi');
    return text
      .split(regex)
      .map((part, index) =>
        part.toLowerCase() === search.toLowerCase() ? (
          <HighlightedText key={index}>{part}</HighlightedText>
        ) : (
          part
        )
      );
  };

  const isDarkMode = useRecoilValue(isDarkModeState);

  return (
    <ThemeProvider theme={theme || (isDarkMode ? { colors: darkColors } : Theme)}>
    <>
      <TopSearchNavHeader value={search} setValue={setSearch} />
      <Main>
      {/* <button onClick={toggleDarkMode}>젠장</button> */}
        {data.length === 0 ? (
          <NoResultsText>검색 결과가 없습니다.</NoResultsText>
        ) : (
          data.map((item, index) => (
            <Button
              key={item._id}
              onClick={() => {
                handleProfileClick(index);
              }}
            >
              <Image
                src={numberRegex.test(item.image) ? item.image : isDarkMode ? profileDarkImg : profileImg}
                alt="프로필 이미지"
              />
              <Section>
                <UserName>{highlightText(item.username, search)}</UserName>
                <NickName>{'@' + item.accountname}</NickName>
              </Section>
            </Button>
          ))
        )}
      </Main>
      <TabMenu />
    </>
    </ThemeProvider>
  );
};

export default SearchPage;
