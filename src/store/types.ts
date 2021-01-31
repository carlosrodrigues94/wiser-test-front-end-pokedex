import { IModalState } from './modules/modals/types';
import { IPokemonIndexState } from './modules/pokemon/index/types';
import { IPokemonShowState } from './modules/pokemon/show/types';

export interface IState {
  pokemonIndex: IPokemonIndexState;
  pokemonShow: IPokemonShowState;
  modals: IModalState;
}
