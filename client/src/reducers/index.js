import { combineReducers } from "redux";
import ClientsReducer from "../reducers/clients-reducer";
import ProductsReducer from "../reducers/products-reducer";

const rootReducer = combineReducers({
  clients: ClientsReducer,
  products: ProductsReducer
});

export default rootReducer;
