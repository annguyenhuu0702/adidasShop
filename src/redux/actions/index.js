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
