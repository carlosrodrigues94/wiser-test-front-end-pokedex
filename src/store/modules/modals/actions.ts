import { ActionTypes, IActionRequest, IModalData } from './types';

export function actionSetShowModalRequest(
  modalData: IModalData,
): IActionRequest {
  return {
    type: ActionTypes.SET_REQUEST,
    payload: {
      modalData,
    },
  };
}
