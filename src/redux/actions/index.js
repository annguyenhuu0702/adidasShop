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

// call api lấy product theo id
export const actSelectedProductRequest = () => {
  return (dispatch) => {
    return callApi("/id", "GET", null).then((res) => {
      dispatch(actSelectedProduct(res.data));
    });
  };
};

export const actSelectedProduct = (id) => {
  return {
    type: ActionsType.SELECTED_PRODUCT,
    payload: id,
  };
};
