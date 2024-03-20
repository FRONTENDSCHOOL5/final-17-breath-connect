import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 4.8rem - 8.5rem);
  padding-bottom: 15rem;
  gap: 2rem;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 400;
  font-size: 1.4rem;
`;

export const Image = styled.img`
  width: 13.5rem;
  height: 17.5rem;
`;
