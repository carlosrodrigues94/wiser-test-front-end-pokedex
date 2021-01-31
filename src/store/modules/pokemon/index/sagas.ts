import { toast } from 'react-toastify';

import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import IPokemon from '~/types/IPokemon';

import {
  actionPokemonIndexFailure,
  actionPokemonIndexSuccess,
  actionPokemonIndexRequest,
} from './actions';
import {
  ActionTypes,
  IPokemonNameAxiosResponse,
  IPokemonsAxiosResponse,
} from './types';

type IPokemonIndexSagaProps = ReturnType<typeof actionPokemonIndexRequest>;

export function* pokemonIndex({
  payload,
}: IPokemonIndexSagaProps): SagaIterator {
  try {
    const { page } = payload;

    const limit = 10;

    // Get Pokemons name and url
    const pokemonNamesResponse: IPokemonNameAxiosResponse = yield call(
      api.get,
      '/pokemon',
      {
        params: {
          offset: page === 1 ? 0 : page * limit,
          limit,
        },
      },
    );

    const { count, results } = pokemonNamesResponse.data;

    const lastPage = Number((count / limit).toFixed(0));

    // Takes Only the name of them
    const pokemonsNames = results.map(pokemon => pokemon.name);

    // Create calls to be yilded
    const promises = pokemonsNames.map(pokemonName =>
      call(api.get, `/pokemon/${pokemonName}`),
    );

    const responsePokemonsData = yield all(promises);

    const pokemons: IPokemon[] = responsePokemonsData.map(
      (response: IPokemonsAxiosResponse) => response.data,
    );

    const pagination = { page, total: count, lastPage };

    yield put(actionPokemonIndexSuccess({ pokemons, pagination }));
  } catch (err) {
    toast.error('An error ocurred on get the pokemons, try again');
    yield put(actionPokemonIndexFailure('error on get the pokemons'));
  }
}

export default all([takeLatest(ActionTypes.INDEX_REQUEST, pokemonIndex)]);
