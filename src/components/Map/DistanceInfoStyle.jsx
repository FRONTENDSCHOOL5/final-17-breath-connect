import styled, { keyframes } from "styled-components";

const redChange = keyframes`
  50% {
    color: red;
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-radius: 2rem;
  padding: 0.7rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: ${({ theme }) => theme.fontSize.small};
  div:first-child {
    margin-bottom: 0.5rem;
  }
`;

export const Distance = styled.div`
`

export const Amount = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.mapColor};
  animation: ${redChange} 2s infinite;
`;

export const Text = styled.span`
`;

export const Time = styled.div`
`

export const Hour = styled.span`
`