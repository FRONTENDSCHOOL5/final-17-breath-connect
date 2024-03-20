import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  color: ${({ theme }) => theme.colors.blackText};
  box-shadow: rgba(217, 217, 217, 0.5) 0px 0.1rem 0px;
`;

export const CommentSection = styled.section`
  display: flex;
`

export const Image = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  object-fit: cover;
`

export const Contents = styled.div`
  padding: 10px;
`;

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
`;

export const UserName = styled.span`
  display: inline-block;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 15px;
`;

export const Time = styled.span`
  color: ${({ theme }) => theme.colors.textColor};
  padding: 0.4rem 0.7rem;
`;

export const Comment = styled.div`
  font-weight: 400;
  font-size: 14px;
  width: 28rem;
  word-break: break-all;
`;

export const Button = styled.button`
  float:right;
  padding-bottom: 3rem;
`