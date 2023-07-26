import styled, { css } from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;
`

export const Title = styled.h1`
padding-top: 2.7rem;
  color: ${({ theme }) => theme.colors.blackText};
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  text-align: center;
  margin-bottom: 4.5rem;
`

export const Form = styled.form`
   .input-wrapper {
    margin-bottom: 3rem; 
  }
  input {
    background-color: ${({ theme }) => theme.colors.whiteText};
  }
`

export const ErrorMsg = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.errorText};
    font-size: ${theme.fontSize.small};
    margin-top: -0.9rem;
  `}
  &.password-msg {
    margin: -2.4rem 0 3rem;
  }
  &.success-msg {
    color: blue;
  }
`;