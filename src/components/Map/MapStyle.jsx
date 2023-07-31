import styled from 'styled-components';

// ----- distanceInfo
export const DistanceContainer = styled.div`
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
export const SText = styled.span`
  font-weight: bold;
`;

// ----- mapComponents
export const MapContainer = styled.div`
  position: relative;
`;
// ----- mapComponents

// ----- mapDrawingManager
export const Distance = styled.span`
  color: ${({ theme }) => theme.colors.disabledColor};
  font-weight: bold;
`;
// ----- mapDrawingManager

// ----- toolBox
export const CustomToolWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid red;
  border-radius: 9999px;
  padding: 8px;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 4px;
  left: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 100%;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.whiteText};
  color: ${({ theme }) => theme.colors.mainColor};
  padding: 0.5rem 0.5rem;
  border-radius: 1rem;
  border: ${({ theme }) => `0.15rem solid ${theme.colors.mainColor}`};
`;
// ----- toolBox
