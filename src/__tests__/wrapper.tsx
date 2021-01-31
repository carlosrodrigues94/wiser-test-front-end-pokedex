import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

import { render, RenderOptions, RenderResult } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';

import { IState } from '~/store/types';
import theme from '~/styles/themes/dark';

const INITIAL_STATE: IState = {
  pokemonIndex: {
    data: [],
    error: '',
    loading: false,
    pagination: { lastPage: 0, page: 0, total: 0 },
  },
  modals: { data: { description: '', id: 0 }, error: '', loading: false },
  pokemonShow: {
    data: {
      abilities: [
        { ability: { name: '', url: '' }, is_hidden: false, slot: 0 },
      ],
      forms: [],
      base_experience: 0,
      name: '',
      game_indices: [],
      height: 0,
      held_items: [],
      id: 0,
      is_default: false,
      location_area_encounters: '',
      moves: [],
      order: 0,
      species: {
        name: '',
        url: '',
      },
      sprites: {
        other: { 'official-artwork': { front_default: '' } },
      },
      stats: [],
      types: [{ slot: 0, type: { name: 'grass', url: '' } }],
      weight: 0,
    },
    loading: false,
    error: '',
  },
}; // Or use value from root reducer
const mockStore = configureStore([]);
const store = mockStore(INITIAL_STATE);

const renderWithWrapper = (
  ui: ReactElement,
  options?: RenderOptions,
): RenderResult => {
  return render(ui, {
    wrapper: ({ children }) => (
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    ),
    ...options,
  });
};

// re-export everything for convenience
export * from '@testing-library/react';

// override render method
export { renderWithWrapper, store };
