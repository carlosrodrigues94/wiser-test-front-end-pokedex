import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 16px;

  .content-buttons-pagination {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 8px 0;
    button {
      margin: 0 8px;
    }
  }

  @media (max-width: 500px) {
    padding: 8px;
  }
`;

export const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background: ${props => props.theme.colors.secondaryDarken};
  border-radius: ${props => props.theme.bounds.borderRadius};
  padding: 8px;
  align-items: center;
  justify-content: center;
  max-height: 80vh;
  border: 1px solid ${props => props.theme.colors.borderColor};
  position: relative;

  h2 {
    margin: 8px 0;
  }

  ul {
    display: block;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    overflow-y: auto;
    width: 100%;
    border-top: 1px solid ${props => props.theme.colors.borderColor};
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  }

  @media (max-width: 500px) {
    width: 98%;
  }
`;
