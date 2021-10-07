import { ActionsType } from "./../constants/ActionsType";

const initialState = {
  allData: [],
};

export const dataReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionsType.FETCH_PRODUCT: {
      const data = action.payload;
      return {
        ...state,
        allData: data,
      };
    }
    default:
      return { ...state };
  }
};
