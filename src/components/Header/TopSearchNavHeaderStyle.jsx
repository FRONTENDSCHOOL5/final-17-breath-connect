import styled from "styled-components";

export const Form = styled.form`
  padding: 0.7rem;
  margin-right: 1.9rem;
`;

export const Input = styled.input`
  width: 31rem;
  height: 3.2rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.inputColor};
  color: ${({ theme }) => theme.colors.blackText};
  border-radius: 3.2rem;
  padding-left: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.uploadPlaceholderColor};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.inputColor};
    box-shadow: 0.2rem 0.2rem 0.1rem 0.1rem
      ${({ theme }) => theme.colors.mainColor};
    outline: 0.2rem solid ${({ theme }) => theme.colors.mainColor};
    transition: 0.3s;
  }
`;