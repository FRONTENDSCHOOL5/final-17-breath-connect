import styled from 'styled-components';


export const Container = styled.form`
  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxlarge};
    font-weight: bold;
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.medium};
    margin-bottom: 0.8rem;
  }
  section {
    margin-bottom: 2.4rem;
  }
  input {
    width: 14.7rem;
    height: 2.8rem;
    padding-left: 1.2rem;
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.colors.textColor};
    border: none;
  }
  textarea,
  input {
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.uploadBoxColor};
  }
  width: 39rem;
  color: ${({ theme }) => theme.colors.textColor};
  padding: 4.1rem 3.2rem;
`;
export const DateSection = styled.section`
  display: flex;
  gap: 3.2rem;
  margin-top: 4.6rem;
`;

export const TextSection = styled.section`
  textarea {
    font-size: 1.2rem;
    width: 32.6rem;
    height: 10rem;
    padding: 1rem 1rem;
    position: relative;
  }
  textarea::placeholder {
    color: ${({ theme }) => theme.colors.uploadPlaceholderColor};
  }
`;

export const Counter = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.mainColor};
  position: absolute;
  top: 33.9rem;
  right: 3.7rem;
`;

export const MapSection = styled.section`
  p {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32.6rem;
  background-color: ${({ theme }) => theme.colors.uploadBoxColor};
  padding: 2.3rem 8rem 3.3rem;
  border-radius: 0.5rem;
`;

export const CompleteMapSection = styled.section`
  div {
    border-radius: 0.5rem;
  }
`;

export const Button = styled.button`
  width: 8rem;
  height: 2rem;
  float: right;
  text-align: center;
  margin-top: 0.4rem;
  padding-top: 0.2rem;
  /* font-weight: bold; */
  color: ${({ theme }) => theme.colors.mainColor};
  background-color: ${({ theme }) => theme.colors.whiteText};
  border: 0.1rem solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 2.5rem;
`;

export const ManualSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  h2 {
    font-size: 14px;
    margin-bottom: 0.8rem;
  }
`;

export const ManualContents = styled.ul`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.uploadBoxColor};
  padding: 1rem 1rem 0;
  li {
    font-size: ${({ theme }) => theme.fontSize.small};
    margin-bottom: 1rem;
    line-height: 1.3rem;
  };
  `
