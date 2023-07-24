import styled from 'styled-components';

export const UserItem = styled.li`
  display: flex;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;

export const UserName = styled.strong`
  display: block;
  margin-bottom: 0.6rem;
  font-size: ${({theme}) => theme.fontSize.medium};
  font-weight: 500;
`;

export const UserId = styled.strong`
  display: block;
  font-size:  ${({theme}) => theme.fontSize.small};
  color: ${({theme}) => theme.colors.textColor};
  ::before {
    content: '@ ';
  }
`;

export const Image = styled.img`
  width: 50px;
  height: auto;
  border-radius: 50%;
`;