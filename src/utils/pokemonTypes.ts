import ITypes from '~/types/pokemonTypes';

interface IPokemonTypes {
  [key: string]: ITypes[];
}

const pokemonTypes: IPokemonTypes = {
  bulbasaur: ['grass', 'poison'],
  ivysaur: ['grass', 'poison'],
  venusaur: ['grass', 'poison'],
  charmander: ['fire'],
  charmeleon: ['fire'],
  charizard: ['fire'],
  squirtle: ['water'],
  wartortle: ['water'],
  blastoise: ['water'],
  caterpie: ['bug'],
  metapod: ['bug'],
  butterfree: ['bug', 'flying'],
  weedle: ['bug', 'poison'],
  kakuna: ['bug', 'poison'],
  beedrill: ['bug', 'poison'],
  pidgey: ['normal', 'flying'],
  pidgeotto: ['normal', 'flying'],
  pidgeot: ['normal', 'flying'],
  rattata: ['normal'],
  raticate: ['normal'],
};

export { pokemonTypes };
