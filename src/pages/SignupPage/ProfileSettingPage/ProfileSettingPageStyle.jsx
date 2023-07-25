import styled, { css } from 'styled-components';
import AddImg from '../../../assets/sprite/img-btn.svg';

export const Container = styled.main`
margin: 0 auto;
.profileSetting-description {
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
}
`

export const Title = styled.h1`
color: ${({theme}) => theme.colors.blackText};
font-size: ${({theme}) => theme.fontSize.xxlarge};
padding-top: 2.7rem;
text-align: center;
`

export const ImageWrap = styled.div`
  label {
    position: relative;
    display: block;
    width: 11rem;
    height: 11rem;
    margin: 3.5rem auto 5.5rem;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.colors.placeHolderColor};
    &::after {
    content: '';
    display: block;
    background: url(${AddImg}) no-repeat center / 3.6rem 3.6rem;
    width: 3.6em;
    height: 3.6rem;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
}
  }
`

export const Form = styled.form`
.button-margin {
  margin-bottom: 3rem;
}
`

export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 50%;
`

export const ImageInput = styled.input`
width: 0.1rem;
height: 0.1rem;
position: absolute;
z-index: -1000rem;
`

export const ErrorMsg = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.errorText};
    font-size: ${theme.fontSize.small};
    margin-top: -0.9rem;
  `}
`;
