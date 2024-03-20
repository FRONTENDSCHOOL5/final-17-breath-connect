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
  opacity: 1;
  pointer-events: auto;
  z-index: 99999;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25.2rem;
  background-color: ${({ theme }) => theme.colors.whiteText};
  border: 0.1rem solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 1rem;
`;

export const Message = styled.p`
  padding: 2rem 0rem;
  color: ${({ theme }) => theme.colors.blackText};
  font-size: ${({ theme }) => theme.fontSize.large};
  text-align: center;
`;

export const ButtonContainer = styled.div`
  color: ${({ theme }) => theme.colors.blackText};
  border-top: 0.05rem solid ${({ theme }) => theme.colors.borderColor};
  font-size: ${({ theme }) => theme.fontSize.medium};
  
  button {
    padding: 1.3rem 0;
    width: 12.5rem;
  }
`;

export const DeleteButton = styled.button`
  color: ${({ theme }) => theme.colors.mainColor};
  border-right: 0.05rem solid ${({ theme }) => theme.colors.borderColor};
  `;

export const CancelButton = styled.button``;