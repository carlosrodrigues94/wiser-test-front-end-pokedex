import styled, { DefaultTheme } from 'styled-components';

import ITypes from '~/types/pokemonTypes';

interface IContainerProps {
  pokemonType: ITypes;
}

function backgroundPokemonType(pokemonType: ITypes, theme: DefaultTheme) {
  const { colorsPokemonTypes } = theme;

  return colorsPokemonTypes[pokemonType];
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 120px;
  background: ${props => backgroundPokemonType(props.pokemonType, props.theme)};
  margin: 16px auto;
  border-radius: ${props => props.theme.bounds.borderRadius};
  position: relative;
  padding: 8px 20px;
  transition: all 0.2s;
  cursor: pointer;
  backface-visibility: hidden;
  will-change: transform;

  .pokemon-image {
    width: 110px;
    position: absolute;
    right: 16px;
    top: -15px;
    z-index: 2;
  }

  .pokeball-image {
    position: absolute;
    width: 40%;
    right: 0;
    max-height: 100%;
  }

  .pattern-dots {
    width: 25%;
    top: 4px;
    position: absolute;
    margin-right: 30px;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 430px) {
    width: 280px;
  }
`;

export const ContentNameBadges = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: auto;

  h2 {
    font-weight: bold;
    text-transform: capitalize;
    letter-spacing: 1px;
  }

  .content-badges {
    display: flex;
    justify-content: space-between;
  }
`;
