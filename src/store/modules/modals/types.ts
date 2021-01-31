export enum ActionTypes {
  SET_REQUEST = '@SET_OPEN_MODAL/REQUEST',
}

export interface IModalData {
  id: number;
  description: string;
}

// Actions

export interface IActionRequest {
  type: string;
  payload: {
    modalData: IModalData;
  };
}

// State

export interface IModalState {
  data: IModalData;
  loading: boolean;
  error: string;
}
