import { toast } from 'react-toastify';

import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import modals from '~/utils/modals';

import { actionSetShowModalRequest } from '../../modals/actions';
import {
  actionPokemonShowFailure,
  actionPokemonShowSuccess,
  actionPokemonShowRequest,
} from './actions';
import { ActionTypes, IPokemonResponse } from './types';

type IPokemonIndexSagaProps = ReturnType<typeof actionPokemonShowRequest>;

export function* pokemonIndex({
  payload,
}: IPokemonIndexSagaProps): SagaIterator {
  try {
    const { name } = payload;

    const response: IPokemonResponse = yield call(api.get, `/pokemon/${name}`);

    const pokemon = response.data;

    yield put(actionPokemonShowSuccess(pokemon));
    yield put(actionSetShowModalRequest(modals.MODAL_POKEMON_DETAILS));
  } catch (err) {
    toast.error('An error ocurred on get the pokemon, try again');
    yield put(actionPokemonShowFailure('error in get the pokemon'));
  }
}

export default all([takeLatest(ActionTypes.SHOW_REQUEST, pokemonIndex)]);
