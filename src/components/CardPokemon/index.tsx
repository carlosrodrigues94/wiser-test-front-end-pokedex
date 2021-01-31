import React from 'react';

import patternSvg from '~/assets/Pattern.svg';
import pokeballSvg from '~/assets/Pokeball.svg';
import IPokemon from '~/types/IPokemon';

import BadgeType from '../BadgeType';
import { ContentNameBadges, Container } from './styles';

interface ICardPokemonProps {
  pokemon: IPokemon;
  onClickCard: (pokemon: IPokemon) => void;
}

const CardPokemon: React.FC<ICardPokemonProps> = ({ pokemon, onClickCard }) => {
  return (
    <Container
      pokemonType={pokemon.types[0].type.name}
      onClick={() => onClickCard(pokemon)}
    >
      <ContentNameBadges data-testid="div-content-badges">
        <h2>{pokemon.name}</h2>
        <div className="content-badges">
          {pokemon.types.map(type => (
            <BadgeType type={type.type.name} key={Math.random()} />
          ))}
        </div>
      </ContentNameBadges>

      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt="pokemon-img"
        className="pokemon-image"
      />
      <img src={patternSvg} alt="pattern-dots" className="pattern-dots" />
      <img src={pokeballSvg} alt="pokeball" className="pokeball-image" />
    </Container>
  );
};

export default CardPokemon;
