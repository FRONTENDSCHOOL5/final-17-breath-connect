import styled, { css } from "styled-components";
import AddImg from '../../../assets/sprite/img-btn.svg';

export const Container = styled.main`
  margin: 0 auto;

  .spriteImg-wrapper {
    position: absolute;
    bottom: 0;
  }

  .upload-button {
    position: absolute;
    left: 0;
  }
`;

export const ImageSection = styled.section`
`;

export const Label = styled.label`
  display: block;
  position: relative;
  width: 11rem;
  height: 11rem;
  margin: 3.5rem auto 5.5rem;
  background-color: white;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.placeHolderColor};
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
    }
`

export const Form = styled.form`
  &:last-child {
    margin-bottom: 3rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
`;

export const ImageInput = styled.input`
  width: 0.1rem;
  height: 0.1rem;
  position: absolute;
  z-index: -1000rem;
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.errorText};
    font-size: ${theme.fontSize.small};
    margin-top: -0.9rem;
  `}
`;
