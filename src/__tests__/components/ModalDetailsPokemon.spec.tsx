import React from 'react';

import { fireEvent } from '@testing-library/react';

import ModalPokemonDetail from '~/components/Modals/ModalPokemonDetail';

import { renderWithWrapper } from '../wrapper';

const onClickClose = jest.fn();

describe('Modal details Pokemons', () => {
  it('should be able to render the modal and get name of bubasaur', () => {
    const { getByTestId } = renderWithWrapper(
      <ModalPokemonDetail isOpen onClickClose={onClickClose} />,
    );

    const h4PokemonName = getByTestId('test-h4-pokemon-name');
    const buttonCancel = getByTestId('test-button-close');

    fireEvent.click(buttonCancel);

    expect(h4PokemonName).toBeTruthy();
    expect(onClickClose).toHaveBeenCalled();
  });
});
