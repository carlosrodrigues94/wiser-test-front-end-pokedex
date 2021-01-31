import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  width: 250px;
  height: 150px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: ${props => props.theme.bounds.borderRadius};
  background: ${props => props.theme.colors.secondary};

  input {
    height: 45px;
    width: 200px;
    background: none;
    border: 2px solid ${props => props.theme.colors.borderColor};
    padding: 0 0 0 8px;
    margin: 8px 0;
    border-radius: ${props => props.theme.bounds.borderRadius};
    color: ${props => props.theme.colors.text};
    &:focus {
      border-color: ${props => props.theme.colors.white};
    }
  }

  .line-buttons {
    display: flex;
  }

  button {
    &:nth-child(1) {
      background: none;
      border: 2px solid ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.text};
    }
  }
`;
