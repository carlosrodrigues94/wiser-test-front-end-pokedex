import { AxiosResponse } from 'axios';
import { ActionType } from 'typesafe-actions';

import IPokemon from '~/types/IPokemon';

import * as actions from './actions';

export enum ActionTypes {
  INDEX_REQUEST = '@POKEMON_INDEX/REQUEST',
  INDEX_SUCCESS = '@POKEMON_INDEX/SUCCESS',
  INDEX_FAILURE = '@POKEMON_INDEX/FAILURE',
}

export type IPokemonIndexReducerAction = ActionType<typeof actions>;

interface IPagination {
  page: number;
  total: number;
  lastPage: number;
}

export interface IPokemonIndexState {
  data: IPokemon[];
  error: string;
  loading: boolean;
  pagination: IPagination;
}

export interface IActionSuccessProps {
  pagination: IPagination;
  pokemons: IPokemon[];
}

export interface IActionRequestProps {
  page: number;
}

interface IPokemonName {
  count: number;
  next: string;
  previous: string;
  results: Array<{ name: string; url: string }>;
}

export type IPokemonNameAxiosResponse = AxiosResponse<IPokemonName>;

export type IPokemonsAxiosResponse = AxiosResponse<IPokemon>;
