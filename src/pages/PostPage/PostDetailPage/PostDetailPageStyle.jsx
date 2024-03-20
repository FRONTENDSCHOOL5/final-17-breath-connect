import styled from 'styled-components';

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
  display: flex;
  position: fixed;
  bottom: 0;
  width: 39rem;
  height: 6.1rem;
  padding: 0 1.6rem;
  background-color: ${({ theme }) => theme.colors.whiteText};
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  font-size: ${({ theme }) => theme.fontSize.medium};
  `;

export const CommentInput = styled.div`
  display: flex;
  align-items: center;
  `;

export const Image = styled.img`
  margin-right: 1.2rem;
  width: 3.6rem;
  height: 3.6rem;
  `

export const Input = styled.input`
  width: 27rem;
  margin-right: 1rem;
  color: ${({ theme }) => theme.colors.blackText};
  background-color: ${({ theme }) => theme.colors.whiteText};
  border: none;
  outline: none;

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