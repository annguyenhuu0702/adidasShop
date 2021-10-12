import { combineReducers } from "redux";
import { dataReducers } from "./dataReducer";
import { selectedProductReducer } from "./selectedProductReducer";

const reducers = combineReducers({
  allData: dataReducers,
  product: selectedProductReducer,
});

export default reducers;
