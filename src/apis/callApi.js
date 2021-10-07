import axios from "axios";
import * as Config from "./../redux/constants/Config";

export default function callApi(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${Config.API_ENDPOINT}/${endpoint}`,
    data: body,
  }).catch((err) => {
    console.log(err);
  });
}
