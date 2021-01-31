import styled from 'styled-components';

import { ITypeName } from '~/types/IPokemon';

interface IContainerProps {
  type: ITypeName;
}
export const Container = styled.span<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 25px;
  align-items: center;
  font-weight: 500;
  margin: 8px 8px 0 0;
  background: ${props => props.theme.colorsPokemonBadgeTypes[props.type]};
  border-radius: 3px;
  padding: 4px 6px;
  width: auto;
  border: 1px solid ${props => props.theme.colors.whiteTransparent};
  color: ${props => props.theme.colors.white};

  strong {
    font-weight: normal;
    font-size: 12px;
  }

  img {
    color: ${props => props.theme.colors.white};
    filter: invert(100%);
    max-height: 100%;
    width: 14px;
    margin: 0 4px 0 0;
  }
`;
