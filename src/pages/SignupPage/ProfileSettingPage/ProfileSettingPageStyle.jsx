import styled, { css } from 'styled-components';
import AddImg from '../../../assets/sprite/img-btn.svg';
import AddDarkImg from '../../../assets/sprite/img-btn-dark.svg';

export const Container = styled.main`
  margin: 0 auto;
`

export const Title = styled.h1`
  padding-top: 2.7rem;
  color: ${({theme}) => theme.colors.blackText};
  font-size: ${({theme}) => theme.fontSize.xxlarge};
  text-align: center;
`

export const SubTitle = styled.p`
  margin-top: 1.4rem;
  color: ${({theme}) => theme.colors.textColor};
  font-size: ${({theme}) => theme.fontSize.medium};
  text-align: center;

  .spriteImg-wrapper {
    position: absolute;
    bottom: 0;
  }

  .upload-button {
    position: absolute;
    left: 0;
  }
`

export const ImageSection = styled.section`
`

export const Label = styled.label`
  display: block;
  position: relative;
  width: 11rem;
  height: 11rem;
  margin: 3.5rem auto 5.5rem;
  border: 1px solid ${({theme}) => theme.colors.placeHolderColor};
  border-radius: 50%;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 3.6em;
    height: 3.6rem;
    background: url(${AddImg}) no-repeat center / 3.6rem 3.6rem;
    z-index: 2;
    ${({ isDarkMode }) => isDarkMode && css`
      background: url(${AddDarkImg}) no-repeat center / 3.6rem 3.6rem;
    `}
  }
`

export const Form = styled.form`
  input {
    background-color: ${({ theme }) => theme.colors.whiteText};
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`

export const ImageInput = styled.input`
  position: absolute;
  width: 0.1rem;
  height: 0.1rem;
  z-index: -1000rem;
`

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.errorText};
    font-size: ${theme.fontSize.small};
    margin-top: -0.9rem;
  `}
`;

export const TextSection = styled.section`
  margin-bottom: 3rem;
`
