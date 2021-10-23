import { ActionsType } from "./../constants/ActionsType";
// const initialState = {
//   cartItem: [],
// };

let cart = JSON.parse(localStorage.getItem("CART"));
localStorage.getItem("cart", JSON.stringify);
let initialState = cart ? cart : [];

export const cartReducer = (state = initialState, action) => {
  let findPr;
  let index;
  let findIndex = -1;
  switch (action.type) {
    case ActionsType.ADD_TO_CART: {
      const { product, qtt, changeSize } = action.payload;
      findIndex = state.findIndex((x) => x.product.id === product.id);
      if (findIndex !== -1) {
        state[findIndex].qtt += qtt;
      } else {
        state.push({
          product,
          qtt,
          changeSize,
        });
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    }
    case ActionsType.INC: {
      const id = action.payload;
      findPr = state.find((pr) => pr.product.id === id);
      index = state.findIndex((pr) => pr.product.id === id);
      findPr.qtt += 1;
      state[index] = findPr;
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    }
    case ActionsType.DEC: {
      const id = action.payload;
      findPr = state.find((pr) => pr.product.id === id);
      index = state.findIndex((pr) => pr.product.id === id);
      if (findPr.qtt > 1) {
        findPr.qtt -= 1;
        state[index] = findPr;
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    }
    case ActionsType.REMOVE_PRODUCT: {
      const product = action.payload;
      findIndex = state.findIndex((x) => x.product.id === product.product.id);
      state.splice(findIndex, 1);
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    }
    default:
      return [...state];
  }
};

// export const cartReducer = (state = initialState, action) => {
//   let findPr;
//   let index;
//   switch (action.type) {
//     case ActionsType.ADD_TO_CART: {
//       const { product, qtt, changeSize } = action.payload;
//       const check = state.cartItem.find((pr) => pr.id === product.id);
//       if (check) {
//         let newProduct = state.cartItem.map((pr) => {
//           if (pr.id === product.id) {
//             return {
//               ...pr,
//               qtt: pr.qtt + qtt,
//               size: changeSize,
//             };
//           } else {
//             return pr;
//           }
//         });
//         return {
//           ...state,
//           cartItem: [...newProduct],
//         };
//       } else {
//         return {
//           ...state,
//           cartItem: [
//             ...state.cartItem,
//             {
//               ...product,
//               qtt: qtt,
//               size: changeSize,
//             },
//           ],
//         };
//       }
//     }

//     case ActionsType.INC: {
//       const id = action.payload;
//       findPr = state.cartItem.find((pr) => pr.id === id);
//       index = state.cartItem.findIndex((pr) => pr.id === id);
//       findPr.qtt += 1;
//       state.cartItem[index] = findPr;
//       return {
//         ...state,
//         cartItem: [...state.cartItem],
//       };
//     }
//     case ActionsType.DEC: {
//       const id = action.payload;
//       findPr = state.cartItem.find((pr) => pr.id === id);
//       index = state.cartItem.findIndex((pr) => pr.id === id);
//       if (findPr.qtt > 1) {
//         findPr.qtt -= 1;
//         state.cartItem[index] = findPr;
//         return {
//           ...state,
//           cartItem: [...state.cartItem],
//         };
//       } else {
//         return {
//           ...state,
//         };
//       }
//     }
//     case ActionsType.REMOVE_PRODUCT: {
//       const product = action.payload;
//       const filtered = state.cartItem.filter((pr) => pr.id !== product.id);
//       return {
//         ...state,
//         cartItem: filtered,
//       };
//     }
//     default:
//       return {
//         ...state,
//       };
//   }
// };
