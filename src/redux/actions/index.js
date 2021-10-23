import { ActionsType } from "../constants/ActionsType";
import callApi from "./../../apis/callApi";

export const actFetchDataRequest = () => {
  return (dispatch) => {
    return callApi("", "GET", null).then((res) => {
      dispatch(actFetchData(res.data));
    });
  };
};

export const actFetchData = (data) => {
  return {
    type: ActionsType.FETCH_PRODUCT,
    payload: data,
  };
};

export const actSelectedProduct = (product) => {
  return {
    type: ActionsType.SELECTED_PRODUCT,
    payload: product,
  };
};

export const actAddToCart = (product, qtt, changeSize) => {
  return {
    type: ActionsType.ADD_TO_CART,
    payload: {
      product,
      qtt,
      changeSize,
    },
  };
};

export const actRemoveProduct = (product) => {
  return {
    type: ActionsType.REMOVE_PRODUCT,
    payload: product,
  };
};
