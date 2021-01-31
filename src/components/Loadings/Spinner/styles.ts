import styled from 'styled-components';

interface IContainerProps {
  isLoading: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: ${props => (props.isLoading ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  > svg {
    animation: cepLoading 0.4s linear infinite;
    color: ${props => props.theme.colors.primary};
    font-size: 18px;
    @keyframes cepLoading {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
