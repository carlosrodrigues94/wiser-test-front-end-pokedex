import React from 'react';
import { MdClose } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { badgeIcons } from '~/assets/badgeIcons';
import patterSvg from '~/assets/Pattern.svg';
import pokebakSvg from '~/assets/Pokeball.svg';
import BadgeType from '~/components/BadgeType';
import { IPokemonShowState } from '~/store/modules/pokemon/show/types';
import { IState } from '~/store/types';

import ModalContainer from '..';

import {
  Container,
  ContentInformations,
  SpanProgress,
  ContentNameBadges,
} from './styles';

interface IModalPokemonDetailProps {
  isOpen: boolean;
  onClickClose: () => void;
}

const ModalPokemonDetail: React.FC<IModalPokemonDetailProps> = ({
  isOpen,
  onClickClose,
}) => {
  const { data: pokemon } = useSelector<IState, IPokemonShowState>(
    state => state.pokemonShow,
  );

  return (
    <ModalContainer isOpen={isOpen}>
      <Container pokemonType={pokemon.types[0].type.name}>
        <button type="button" className="button-close" onClick={onClickClose}>
          <MdClose />
        </button>
        <ContentInformations pokemonType={pokemon.types[0].type.name}>
          <h4>{pokemon.name}</h4>
          <strong>Abilities</strong>
          {pokemon.abilities.map(ability => (
            <p key={Math.random()}>{ability.ability.name}</p>
          ))}

          <strong>Stats</strong>

          {pokemon.stats.map(stat => (
            <p key={Math.random()}>
              <b>{`${stat.stat.name}`}</b>
              <SpanProgress
                progress={stat.base_stat}
                pokemonType={pokemon.types[0].type.name}
              />
            </p>
          ))}

          <ContentNameBadges>
            {pokemon.types.map(type => (
              <BadgeType type={type.type.name} key={Math.random()}>
                <img src={badgeIcons[type.type.name]} alt="badge" />
                <strong>{type.type.name}</strong>
              </BadgeType>
            ))}
          </ContentNameBadges>
        </ContentInformations>

        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt="pokemon-img"
          className="pokemon-image"
        />
        <img src={patterSvg} alt="pattern-dots" className="pattern-dots" />
        <img src={pokebakSvg} alt="pokeball" className="pokeball-image" />
      </Container>
    </ModalContainer>
  );
};

export default ModalPokemonDetail;
