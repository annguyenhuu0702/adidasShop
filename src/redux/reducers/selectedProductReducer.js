import { ActionsType } from "../constants/ActionsType";

const initialState = [];

export const selectedProductReducer = (state = initialState, action) => {
  const payload = action;
  switch (action.type) {
    case ActionsType.SELECTED_PRODUCT:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
