import React from 'react';

import pokemonMock from '~/__mocks__/pokemon';
import CardPokemon from '~/components/CardPokemon';

import { renderWithWrapper } from '../wrapper';

describe('Card Pokemon', () => {
  it('should be able to render a card with the pokemon data', () => {
    const { getByTestId } = renderWithWrapper(
      <CardPokemon pokemon={pokemonMock} onClickCard={() => console.log('')} />,
    );

    const divContentBadges = getByTestId('div-content-badges');

    expect(divContentBadges.ELEMENT_NODE).toBeTruthy();
  });
});
