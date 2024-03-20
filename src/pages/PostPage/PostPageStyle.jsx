import styled from "styled-components";

export const Container = styled.div`
  padding: 1.6rem;
  color: ${({ theme }) => theme.colors.blackText};
  background-color: ${({theme}) => theme.colors.backgroundColor};
  border: 0.01rem solid rgba(217, 217, 217, 0.5);

  div button {
    text-align: start;
  }

  .post-modal {
    float: right;
  }

  .go-to-post-detail {
    width: 30rem;
  }
  `;

export const Title = styled.h1`
  display: none;
`

export const Post = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const Image = styled.img`
  width: 4.2rem;
  height: 4.2rem;
  margin-right: 1.2rem;
  border-radius: 50%;
`;

export const Contents = styled.div`
`

export const ProfileButton = styled.button`
`

export const ModalButton = styled.button`
`

export const DetailButton = styled.button`
  pointer-events: ${(props) => (props.detail ? 'none' : 'auto')};
  cursor: ${(props) => (props.detail ? 'not-allowed' : 'pointer')};
  `;

export const UserName = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  `;

export const UserAccountName = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 1.6rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  `;

export const ScheduleSection = styled.section`
  margin-bottom: 0.5rem;
  `;

export const Text = styled.span`
    width: 30rem;
    margin-left: 0.4rem;
    color: ${({ theme }) => theme.colors.textColor};
    vertical-align: 0.2rem;
    `;

export const LocationSection = styled.section`
  margin-bottom: 0.5rem;
  `;

export const MapSection = styled.section`
  width: 30.4rem;
  margin: 1.2rem 0rem;
  border-radius: 1rem;
  overflow: hidden;
  `;

export const ContentsSection = styled.section`
  display: -webkit-box;
  margin-bottom: 1.6rem;
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
  gap: 1rem;
`;

export const Participation = styled.div`
  padding: 0.5rem 1rem 0rem;
  color: ${({ theme }) => theme.colors.mainColor};
  background-color: rgba(101, 33, 211, 0.043);
  border-radius: 1rem;
  z-index: 1;
`;

export const Comment = styled.div`
  padding-top: 0.4rem;
  `;