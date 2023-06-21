import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TopSearchNavHeader from '../../components/Header/TopSearchNavHeader';
import TabMenu from '../../components/Footer/TabMenu';
import profileImg from '../../assets/images/basic-profile-m.svg';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { tokenAtom } from '../../atoms/UserAtom';

const SearchPage = () => {
  const navigate = useNavigate();
  const userToken = useRecoilValue(tokenAtom);
  const url = 'https://api.mandarin.weniv.co.kr';
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getSearchResult = async () => {
    const req = await fetch(`${url}/user/searchuser/?keyword=${search}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    });

    const res = await req.json();
    console.log(res);
    setData(res.slice(0, 10));
    setIsLoading(false);
  };

  console.log(data);

  const handleProfileClick = (e) => {
    navigate(`/profile/${data[0].accountname}`, {
      state: { data: data[0] },
    });
  };

  useEffect(() => {
    setIsLoading(true);
    if (search === '') {
      setIsLoading(false);
      return setData([]);
    }
    getSearchResult();
  }, [search]);

  console.log(data);

  return (
    <>
      <TopSearchNavHeader value={search} setValue={setSearch} />

      <SearchContainer>
        {data.length === 0 ? (
          <NoResultsText>검색 결과가 없습니다.</NoResultsText>
        ) : (
          data.map((item) => (
            <SearchResultItem key={item.id} onClick={handleProfileClick}>
              <ProfileImage src={profileImg} alt="프로필 이미지" />
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
  margin-bottom: 1rem;
`;

const ProfileImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Username = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0.6rem;
  color: ${({ theme }) => theme.colors.blackText};
`;

const HighlightedText = styled.span`
  color: ${({ theme }) => theme.colors.mainColor};
  font-weight: bold;
`;

const Nickname = styled.p`
  font-size: 1.2rem;
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
