import { ActionsType } from "./../constants/ActionsType";
const initialState = {
  cartItem: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsType.ADD_TO_CART:
      const { product, qtt } = action.payload;
      const check = state.cartItem.find((pr) => pr.id === product.id);
      if (check) {
        let newProduct = state.cartItem.map((pr) => {
          if (pr.id === product.id) {
            return {
              ...pr,
              qtt: pr.qtt + qtt,
            };
          } else {
            return pr;
          }
        });
        return {
          ...state,
          cartItem: [...newProduct],
        };
      } else {
        return {
          ...state,
          cartItem: [
            ...state.cartItem,
            {
              ...product,
              qtt: qtt,
            },
          ],
        };
      }
    default:
      return {
        ...state,
      };
  }
};
