import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 100;
  background: ${props => props.theme.colors.backgroundModal};
  top: 0;

  animation: showContainerModal 0.2s linear normal;

  @keyframes showContainerModal {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  animation: openModal 0.2s linear normal;

  @keyframes openModal {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;
