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
      <ContentNameBadges>
        <h2>{pokemon.name}</h2>
        <div className="content-badges">
          {pokemon.types.map(type => (
            <BadgeType type={type.type.name} />
          ))}
        </div>
      </ContentNameBadges>

      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt="https://s3.envato.com/files/232572468/01_preview.__large_preview.jpg"
        className="pokemon-image"
      />
      <img src={patternSvg} alt="pattern-dots" className="pattern-dots" />
      <img src={pokeballSvg} alt="pokeball" className="pokeball-image" />
    </Container>
  );
};

export default CardPokemon;
