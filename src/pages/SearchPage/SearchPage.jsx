import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TopSearchNavHeader from '../../components/Header/TopSearchNavHeader';
import TabMenu from '../../components/Footer/TabMenu';
import profileImg from '../../assets/images/basic-profile-m.svg';
import Loading from '../../components/common/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { tokenAtom } from '../../atoms/UserAtom';
import { getSearchResult } from '../../utils/Apis';

const SearchPage = () => {
  const navigate = useNavigate();
  const token = useRecoilValue(tokenAtom);
  const url = 'https://api.mandarin.weniv.co.kr';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const numberRegex = /^https:\/\/api\.mandarin\.weniv\.co\.kr\/[\w.]*$/;

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

    fetchData();
  }, [search, token]);

  const handleProfileClick = (index) => {
    if (data && data[index]) {
      navigate(`/profile/${data[index].accountname}`, {
        state: { data: data[index] },
      });
    }
  };

  if(!data) return <Loading />
  else {
return (
    <>
      <TopSearchNavHeader value={search} setValue={setSearch} />
      <SearchContainer>
          {data.length === 0 ? (
          <NoResultsText>검색 결과가 없습니다.</NoResultsText>
        ) : (
          data.map((item, index) => (
            <SearchResultItem
              key={item._id}
              onClick={() => {
                handleProfileClick(index);
              }}
            >
              <ProfileImage
                src={numberRegex.test(item.image) ? item.image : profileImg}
                alt="프로필 이미지"
              />
              <UserInfo>
                <Username>{highlightText(item.username, search)}</Username>
                <Nickname>{'@' + item.accountname}</Nickname>
              </UserInfo>
            </SearchResultItem>
          ))
        )}
      </SearchContainer>
      <TabMenu />
    </>
  );
};
  }

  

const SearchContainer = styled.div`
  height: 100vh;
  margin-top: 2rem;
  margin-left: 1.6rem;
  color: ${({ theme }) => theme.colors.textColor};
`;

const NoResultsText = styled.p`
  font-size: 1.4rem;
`;

const SearchResultItem = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ProfileImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-right: 1.2rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`;

const Username = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  margin-bottom: 0.6rem;
  color: ${({ theme }) => theme.colors.blackText};
`;

const HighlightedText = styled.span`
  color: ${({ theme }) => theme.colors.mainColor};
  font-weight: bold;
`;

const Nickname = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
`;

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

export default SearchPage;
