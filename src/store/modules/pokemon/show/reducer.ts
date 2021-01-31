import produce from 'immer';

import {
  ActionTypes,
  IPokemonShowState,
  IPokemonShowReducerAction,
} from './types';

const INITIAL_STATE: IPokemonShowState = {
  data: {
    abilities: [{ ability: { name: '', url: '' }, is_hidden: false, slot: 0 }],
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
};

const pokemonIndex = (
  state = INITIAL_STATE,
  action: IPokemonShowReducerAction,
): IPokemonShowState => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.SHOW_REQUEST: {
        draft.loading = true;
        break;
      }
      case ActionTypes.SHOW_SUCCESS: {
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      }
      case ActionTypes.SHOW_FAILURE: {
        draft.loading = false;
        break;
      }

      default:
        break;
    }
  });
};

export default pokemonIndex;
