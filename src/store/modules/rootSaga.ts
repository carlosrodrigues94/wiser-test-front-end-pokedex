import { all } from 'redux-saga/effects';

import pokemonIndex from './pokemon/index/sagas';
import pokemonShow from './pokemon/show/sagas';

export default function* rootSaga(): Generator {
  return yield all([pokemonIndex, pokemonShow]);
}
