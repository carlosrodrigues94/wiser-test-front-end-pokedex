export interface IAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface IForm {
  name: string;
  url: string;
}

export interface IVersion {
  name: string;
  url: string;
}

export interface IGameIndice {
  game_index: number;
  version: IVersion;
}

export interface IMoveLearnMethod {
  name: string;
  url: string;
}

export interface IVersionGroup {
  name: string;
  url: string;
}

export interface IVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: IMoveLearnMethod;
  version_group: IVersionGroup;
}

export interface IMove {
  move: {
    name: string;
    url: string;
  };
  version_group_details: IVersionGroupDetail[];
}

export interface ISpecies {
  name: string;
  url: string;
}

export interface IDreamWorld {
  front_default: string;
  front_female?: string | null;
}

export interface IOfficialArtwork {
  front_default: string;
}

export interface IOtherSprites {
  ['official-artwork']: IOfficialArtwork;
}

export interface IFireredLeafgreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface ISprites {
  other: IOtherSprites;
}

export interface IStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export type ITypeName =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy'
  | 'unknown'
  | 'shadow';

export interface IType {
  slot: number;
  type: {
    name: ITypeName;
    url: string;
  };
}

export interface IPokemon {
  abilities: IAbility[];
  base_experience: number;
  forms: IForm[];
  game_indices: IGameIndice[];
  height: number;
  held_items: string[] | null;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IMove[];
  name: string;
  order: number;
  species: ISpecies;
  sprites: ISprites;
  stats: IStat[];
  types: IType[];
  weight: number;
}
export default IPokemon;
