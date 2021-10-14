import { combineReducers } from "redux";
import { dataReducers } from "./dataReducer";
import { selectedProductReducer } from "./selectedProductReducer";
import { cartReducer } from "./cartReducer";

const reducers = combineReducers({
  allData: dataReducers,
  product: selectedProductReducer,
  cartItem: cartReducer,
});

export default reducers;
