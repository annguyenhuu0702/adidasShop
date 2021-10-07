import { combineReducers } from "redux";
import { dataReducers } from "./dataReducer";

const reducers = combineReducers({
  allData: dataReducers,
});

export default reducers;
