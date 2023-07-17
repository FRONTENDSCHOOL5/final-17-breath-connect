import styled from 'styled-components';

export const Container = styled.div`
`

export const ButtonContainer = styled.div`
&:before{
  content: "";
  width: 5rem;
  height: 0.4rem;
  background: ${({ theme }) => theme.colors.borderColor};
  margin: 1.6rem 17rem;
  border-radius: 0.5rem;
}
  display: flex;
  flex-direction: column;
  button{
    text-align: left;
    font-size: 14px;
    padding: 1.3rem 0rem 1.4rem 2.6rem;
  }
`;
