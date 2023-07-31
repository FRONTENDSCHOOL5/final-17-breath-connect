import styled from "styled-components";

export const Container = styled.div`
`

export const FollowerCount = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blackText};
  font-size: ${({ theme }) => theme.fontSize.large};
`;
export const FollowingCount = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
`;
export const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.textColor};
  margin-top: 0.6rem;
`