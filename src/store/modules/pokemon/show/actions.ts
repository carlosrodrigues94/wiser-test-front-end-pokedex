import { action } from 'typesafe-actions';

import { ActionTypes, IActionSuccessProps, IActionRequestProps } from './types';

export function actionPokemonShowRequest({ name }: IActionRequestProps) {
  return action(ActionTypes.SHOW_REQUEST, { name });
}

export function actionPokemonShowSuccess(data: IActionSuccessProps) {
  return action(ActionTypes.SHOW_SUCCESS, { data });
}

export function actionPokemonShowFailure(error: string) {
  return action(ActionTypes.SHOW_FAILURE, { error });
}
