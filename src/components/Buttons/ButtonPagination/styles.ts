import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  place-items: center;
  border-radius: 5px;
  transition: all 0.3s;
  border: none;
  font-weight: bold;
  background: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.bounds.borderRadius};
  height: ${props => props.theme.bounds.buttonHgMedium};
  width: ${props => props.theme.bounds.buttonWdMedium};
  color: ${props => props.theme.colors.white};
`;
