import { ActionsType } from "../constants/ActionsType";

const initialState = [];

export const selectedProductReducer = (state = initialState, action) => {
  const product = action.payload;
  switch (action.type) {
    case ActionsType.SELECTED_PRODUCT:
      return {
        ...state,
        ...product,
      };
    default:
      return state;
  }
};
