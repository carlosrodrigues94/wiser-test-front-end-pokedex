import { darken, lighten } from 'polished';
import styled, { DefaultTheme } from 'styled-components';

import ITypes from '~/types/pokemonTypes';

interface IContainerProps {
  pokemonType?: ITypes;
}

interface IContentInformationsProps {
  pokemonType?: ITypes;
}

interface ISpanProgressProps {
  pokemonType?: ITypes;
  progress: number;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 1400px;
  min-height: 500px;
  background: ${props =>
    props.theme.colorsPokemonTypes[props.pokemonType || 'grass']};
  margin: 16px 0;
  border-radius: ${props => props.theme.bounds.borderRadius};
  position: relative;
  padding: 8px 20px;
  transition: all 0.2s;
  backface-visibility: hidden;
  will-change: transform;
  border: 1px solid ${props => props.theme.colors.borderColor};
  max-height: 100%;

  .button-close {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 16px;
    right: 16px;
    border-radius: 50%;
    background: none;
    border: 1px solid ${props => props.theme.colors.white};
    padding: 4px;
    cursor: pointer;
    z-index: 3;
    svg {
      color: ${props => props.theme.colors.white};
      font-size: 20px;
    }
    &:hover {
      background: ${props =>
        props.theme.colorsPokemonTypes[props.pokemonType || 'grass']};
    }
  }

  .pokemon-image {
    width: 350px;
    z-index: 2;
  }

  .pokeball-image {
    position: absolute;
    right: 0;
    height: 100%;
  }

  .pattern-dots {
    width: 25%;
    top: 4px;
    position: absolute;
    margin-right: 150px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    width: 98%;
    height: auto;
    min-width: 280px;

    .pokemon-image {
      width: 35%;
    }
  }
`;

export const ContentInformations = styled.div<IContentInformationsProps>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 300px;
  height: 100%;
  flex-direction: column;
  justify-self: flex-start;
  margin: 0 auto 0 0;
  background: ${props =>
    darken(0.04, props.theme.colorsPokemonTypes[props.pokemonType || 'grass'])};
  padding: 8px;
  border-radius: ${props => props.theme.bounds.borderRadius};
  border: 3px solid ${props => props.theme.colors.whiteTransparent};

  h4 {
    font-size: 18px;
    text-transform: capitalize;
    font-weight: bold;
  }

  p {
    text-transform: capitalize;
    color: rgba(23, 23, 27, 0.6);
    margin: 4px 0;
    font-weight: bold;
  }

  strong {
    text-transform: uppercase;
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    order: 1;
    width: 98%;
    margin: 8px 0;
  }
`;
export const ContentNameBadges = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-right: auto;
`;

export const SpanProgress = styled.span<ISpanProgressProps>`
  display: flex;
  width: 200px;
  height: 10px;
  border-radius: 5px;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid ${props => props.theme.colors.whiteTransparent};
  background: ${props => props.theme.colors.whiteTransparent};

  &::after {
    content: '';
    height: 100%;
    width: ${props => props.progress}%;
    background: ${props =>
      lighten(
        0.2,
        props.theme.colorsPokemonTypes[props.pokemonType || 'grass'],
      )};
  }

  @media (max-width: 640px) {
    width: 280px;
  }
`;

Container.defaultProps = {
  pokemonType: 'grass',
};
