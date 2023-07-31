import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  margin: 0 auto;
`;

export const Title = styled.h1`
  padding-top: 2.7rem;
  margin-bottom: 4.5rem;
  color: ${({ theme }) => theme.colors.blackText};
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  text-align: center;
`;

export const Form = styled.form`
`;

export const Section = styled.section`
  margin-bottom: 3rem;
`

export const SignupLink = styled(Link)`
  display: block;
  padding-top: 1.9rem;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.fontSize.small};
  text-align: center;
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    margin-top: -0.9rem;
    color: ${theme.colors.errorText};
    font-size: ${theme.fontSize.small};
  `}
`;