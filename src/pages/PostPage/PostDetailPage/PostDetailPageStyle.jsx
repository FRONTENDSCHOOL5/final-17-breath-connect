import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  height: 100%;
  padding: 0rem 0rem 6rem;
`;

export const NoComment = styled.p`
  margin-top: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.blackText};
`;

export const Form = styled.form`
  width: 39rem;
  padding: 0 1.6rem;
  position: fixed;
  bottom: 0;
  display: flex;
  height: 6.1rem;
  background-color: ${({ theme }) => theme.colors.whiteText};
  font-size: ${({ theme }) => theme.fontSize.medium};
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const StyledComment = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 3.6rem;
    height: 3.6rem;
    margin-right: 1.2rem;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 27rem;
  margin-right: 1rem;
  background-color: ${({ theme }) => theme.colors.whiteText};
  color: ${({ theme }) => theme.colors.blackText};
  &::placeholder {
    color: ${({ theme }) => theme.colors.placeHolderColor};
  }
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.placeHolderColor};
  ${({ theme }) =>
    theme.colors.mainColor &&
    `
    &:not([disabled]) {
      color: ${theme.colors.mainColor};
      font-weight: 500;
    }
  `}

  ${({ active }) =>
    !active &&
    `
    pointer-events: none;
    opacity: 0.5;
  `}
`;

export const slideUpAnimation = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  height: 85rem;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 99999;
  animation: ${({ isOpen }) =>
    isOpen &&
    css`
      ${slideUpAnimation} 0.5s ease-in-out forwards;
    `};
`;

export const ModalContent = styled.div`
  position: fixed;
  bottom: 0;
  height: 9.2rem;
  background-color: white;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
`;

export const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

//
export const PostContainer = styled.div`
  padding: 1.6rem;
  border: 0.01rem solid rgba(217, 217, 217, 0.5);
  /* box-shadow: 0 0.1rem 0 rgba(217, 217, 217, 0.5); */
  div button {
    text-align: start;
  }
  .post-modal {
    float: right;
  }
  .go-to-post-detail {
    width: 30rem;
  }
  background-color: ${({theme}) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.blackText};
`;

export const UserProfileImg = styled.img`
  width: 4.2rem;
  height: 4.2rem;
  margin-right: 1.2rem;
  border-radius: 50%;
`;

export const UserAccountName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 1.6rem;
`;

export const ScheduleInfo = styled.p`
  margin-bottom: 0.5rem;
`;

export const LocationInfo = styled.p`
  margin-bottom: 0.5rem;
`;

export const CommentContainer = styled.div`
  padding-top: 0.4rem;
`;

export const FeedInfo = styled.span`
  width: 30rem;
  margin-left: 0.4rem;
  vertical-align: 0.2rem;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const UserName = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
`;

export const UserFeedText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: nowrap;
  font-size: 1.2rem;
  margin-bottom: 1.6rem;
`;

export const AppendAndComment = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const AppendButton = styled.div`
  background-color: rgba(101, 33, 211, 0.043);
  color: ${({ theme }) => theme.colors.mainColor};
  padding: 0.5rem 1rem 0rem;
  border-radius: 1rem;
  z-index: 1;
`;

export const MapContents = styled.div`
  width: 30.4rem;
  /* height: 80px; */
  border-radius: 1rem;
  overflow: hidden;
  margin: 1.2rem 0rem;
`;

export const PostContents = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const DetailButton = styled.button`
  pointer-events: ${(props) => (props.detail ? 'none' : 'auto')};
  cursor: ${(props) => (props.detail ? 'not-allowed' : 'pointer')};
`;
