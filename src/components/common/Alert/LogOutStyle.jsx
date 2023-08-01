import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 1;
  pointer-events: auto;
`;
export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 25.2rem;
  background-color: ${({ theme }) => theme.colors.whiteText};
  border-radius: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.borderColor};
`;

export const Message = styled.p`
  text-align: center;
  padding: 2rem 0rem;
  font-size: ${({ theme }) => theme.fontSize.large};
`;

export const ButtonContainer = styled.div`
  border-top: 0.05rem solid ${({ theme }) => theme.colors.borderColor};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const CancelButton = styled.button`
  width: 12.3rem;
  padding: 1.3rem 1rem;
`;

export const LogOutButton = styled.button`
  padding: 1.3rem 3.7rem;
  border-left: 0.05rem solid ${({ theme }) => theme.colors.borderColor};
  color: ${({ theme }) => theme.colors.mainColor};
`;
