import styled, { css } from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;
`

export const Title = styled.h1`
  padding-top: 2.7rem;
  margin-bottom: 4.5rem;
  color: ${({ theme }) => theme.colors.blackText};
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  text-align: center;
`

export const Form = styled.form`
  input {
    background-color: ${({ theme }) => theme.colors.whiteText};
  }
`

export const Section = styled.section`
  margin-bottom: 3rem;
`

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
  margin-top: -0.9rem;
    color: ${theme.colors.errorText};
    font-size: ${theme.fontSize.small};
  `}

  &.password-msg {
    margin: -2.4rem 0 3rem;
  }

  &.success-msg {
    color: ${({ theme }) => theme.colors.successText};
  }
`;