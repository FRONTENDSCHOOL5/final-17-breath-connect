import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 8px;
  transform: translate(-50%, -50%);
  border: 2px solid red;
  border-radius: 9999px;
  z-index: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 4px;
  left: 0;
  width: 100%;
  gap: 8px;
  z-index: 1;
`;

export const Button = styled.button`
  padding: 0.5rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.whiteText};
  color: ${({ theme }) => theme.colors.mainColor};
  border: ${({ theme }) => `0.15rem solid ${theme.colors.mainColor}`};
  border-radius: 1rem;
`;