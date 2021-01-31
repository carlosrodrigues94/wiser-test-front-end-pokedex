import produce from 'immer';
import { Reducer } from 'redux';

import { IModalState, ActionTypes } from './types';

const INITIAL_STATE: IModalState = {
  data: {
    id: 0,
    description: '',
  },
  loading: false,
  error: '',
};

const modals: Reducer<IModalState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.SET_REQUEST: {
        draft.data = action.payload.modalData;
        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default modals;
