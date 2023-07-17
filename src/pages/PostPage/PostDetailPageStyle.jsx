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
