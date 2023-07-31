import styled from 'styled-components';

export const Container = styled.div`
`

export const Main = styled.main`
`

export const Form = styled.form`
  width: 39rem;
  padding: 4.1rem 3.2rem;
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  section {
    margin-bottom: 2.4rem;
  }

  input {
    width: 14.7rem;
    height: 2.8rem;
    padding-left: 1.2rem;
    color: ${({ theme }) => theme.colors.textColor};
    background-color: ${({ theme }) => theme.colors.uploadBoxColor};
    border: none;
    border-radius: 0.5rem;
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  font-weight: bold;
`

export const Text = styled.p`
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.fontSize.medium};
`

export const TextArea = styled.textarea`
  position: relative;
  width: 32.6rem;
  height: 10rem;
  padding: 1rem 1rem;
  color: ${({ theme }) => theme.colors.blackText};
  background-color: ${({ theme }) => theme.colors.uploadBoxColor};
  border-radius: 0.5rem;
  line-height: 150%;
  font-size: 1.2rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.uploadPlaceholderColor};
  }
`

export const DateSection = styled.section`
  display: flex;
  gap: 3.2rem;
  margin-top: 4.6rem;
`;

export const TextSection = styled.section`
`;

export const Counter = styled.span`
  position: absolute;
  top: 33.9rem;
  right: 3.7rem;
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const MapSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32.6rem;
  padding: 2.3rem 6rem 3.3rem;
  background-color: ${({ theme }) => theme.colors.uploadBoxColor};
  border-radius: 0.5rem;
`;

export const CompleteMapSection = styled.section`
  div {
    border-radius: 0.5rem;
  }
`;

export const Button = styled.button`
  float: right;
  width: 8rem;
  height: 2rem;
  padding-top: 0.2rem;
  margin-top: 0.4rem;
  color: ${({ theme }) => theme.colors.mainColor};
  background-color: ${({ theme }) => theme.colors.whiteText};
  border: 0.1rem solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 2.5rem;
  text-align: center;
`;

export const ManualSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;

export const ManualTitle = styled.h2`
  margin-bottom: 0.8rem;
  font-size: 14px;
`

export const ManualLists = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 0;
  background-color: ${({ theme }) => theme.colors.uploadBoxColor};
  border-radius: 0.5rem;
  `

  export const List = styled.li`
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: 1.3rem;
    `
