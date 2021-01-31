import { action } from 'typesafe-actions';

import { ActionTypes, IActionSuccessProps, IActionRequestProps } from './types';

export function actionPokemonIndexRequest({ page = 1 }: IActionRequestProps) {
  return action(ActionTypes.INDEX_REQUEST, { page });
}

export function actionPokemonIndexSuccess({
  pagination,
  pokemons,
}: IActionSuccessProps) {
  return action(ActionTypes.INDEX_SUCCESS, { pagination, pokemons });
}

export function actionPokemonIndexFailure(error: string) {
  return action(ActionTypes.INDEX_FAILURE, { error });
}
