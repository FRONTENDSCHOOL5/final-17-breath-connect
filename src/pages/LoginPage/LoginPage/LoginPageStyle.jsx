import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  margin: 0 auto;
`;

export const LoginTitle = styled.h1`
  padding-top: 2.7rem;
  color: ${({ theme }) => theme.colors.blackText};
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  text-align: center;
  margin-bottom: 4.5rem;
`;

export const Form = styled.form`
  .input-wrapper {
    margin-bottom: 3rem;
  }
`;

export const SignupLink = styled(Link)`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.textColor};
  display: block;
  padding-top: 1.9rem;
`;

export const ErrorMsg = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.errorText};
    font-size: ${theme.fontSize.small};
    margin-top: -0.9rem;
  `}
`;