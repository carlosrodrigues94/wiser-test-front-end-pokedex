import produce from 'immer';

import {
  ActionTypes,
  IPokemonIndexState,
  IPokemonIndexReducerAction,
} from './types';

const INITIAL_STATE: IPokemonIndexState = {
  data: [],
  loading: false,
  error: '',
  pagination: {
    page: 1,
    total: 0,
    lastPage: 0,
  },
};

const pokemonIndex = (
  state = INITIAL_STATE,
  action: IPokemonIndexReducerAction,
): IPokemonIndexState => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.INDEX_REQUEST: {
        draft.loading = true;
        break;
      }
      case ActionTypes.INDEX_SUCCESS: {
        draft.loading = false;
        draft.data = action.payload.pokemons;
        draft.pagination = action.payload.pagination;
        break;
      }
      case ActionTypes.INDEX_FAILURE: {
        draft.loading = false;
        break;
      }

      default:
        break;
    }
  });
};

export default pokemonIndex;
