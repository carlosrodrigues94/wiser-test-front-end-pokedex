import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  background: ${props => props.theme.colors.secondaryDarken};
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  position: sticky;
  top: 0;
  z-index: 10;
  svg {
    margin: auto 16px 2px 0;
    font-size: 24px;
  }

  .spinner-loading {
    margin: 0 0 0 auto;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 20px;
    }
  }
`;
