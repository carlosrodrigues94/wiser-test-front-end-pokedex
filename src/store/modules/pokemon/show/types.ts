import { AxiosResponse } from 'axios';
import { ActionType } from 'typesafe-actions';

import IPokemon from '~/types/IPokemon';

import * as actions from './actions';

export enum ActionTypes {
  SHOW_REQUEST = '@POKEMON_SHOW/REQUEST',
  SHOW_SUCCESS = '@POKEMON_SHOW/SUCCESS',
  SHOW_FAILURE = '@POKEMON_SHOW/FAILURE',
}

export type IPokemonShowReducerAction = ActionType<typeof actions>;

export interface IPokemonShowState {
  data: IPokemon;
  error: string;
  loading: boolean;
}

export type IActionSuccessProps = IPokemon;

export interface IActionRequestProps {
  name: string;
}

export type IPokemonResponse = AxiosResponse<IPokemon>;
