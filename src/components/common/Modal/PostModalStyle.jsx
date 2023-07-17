import styled from 'styled-components';

export const Container = styled.div`
`;

export const ButtonContainer = styled.div`
&:before{
  content:"";
  width: 5rem;
  height: 0.4rem;
  background: ${({ theme }) => theme.colors.borderColor};
  margin: 0 17rem;
  border-radius: 0.5rem;
}
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  button{
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.medium};
    padding: 1.3rem 2rem 2rem 2.6rem;
  }
`;


