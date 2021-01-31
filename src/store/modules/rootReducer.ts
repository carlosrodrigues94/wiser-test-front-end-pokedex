import { combineReducers } from 'redux';

import modals from './modals/reducer';
import pokemonIndex from './pokemon/index/reducer';
import pokemonShow from './pokemon/show/reducer';

export default combineReducers({ pokemonIndex, pokemonShow, modals });
