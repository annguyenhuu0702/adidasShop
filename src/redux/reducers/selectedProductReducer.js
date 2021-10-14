import { ActionsType } from "../constants/ActionsType";

const initialState = {
  product: [],
};

export const selectedProductReducer = (state = initialState, action) => {
  const product = action.payload;
  switch (action.type) {
    case ActionsType.SELECTED_PRODUCT:
      return {
        ...state,
        product: product,
      };
    default:
      return state;
  }
};
