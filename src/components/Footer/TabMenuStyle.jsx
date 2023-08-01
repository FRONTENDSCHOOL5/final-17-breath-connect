import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 39rem;
  background-color: ${({ theme }) => theme.colors.footerColor};
  border-top: 0.1rem solid ${({ theme }) => theme.colors.borderColor};
  z-index: 99;
`;