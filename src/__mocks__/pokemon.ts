import IPokemon from '~/types/IPokemon';

const pokemonMock: IPokemon = {
  abilities: [
    { ability: { name: 'bulbasaur', url: '' }, is_hidden: false, slot: 0 },
  ],
  forms: [],
  base_experience: 0,
  name: '',
  game_indices: [],
  height: 0,
  held_items: [],
  id: 0,
  is_default: false,
  location_area_encounters: '',
  moves: [],
  order: 0,
  species: {
    name: '',
    url: '',
  },
  sprites: {
    other: { 'official-artwork': { front_default: '' } },
  },
  stats: [],
  types: [{ slot: 0, type: { name: 'grass', url: '' } }],
  weight: 0,
};

export default pokemonMock;
