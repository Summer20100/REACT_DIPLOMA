import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { inputReducer } from "./inputReducer";
import { commentsReducer } from "./commentsReducer";
import { topSalesReducer } from "./topsalesReducer";
import { catalogReducer } from "./catalogReducer";
import { categoriesReducer } from "./categoriesReducer";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { productAddReducer } from "./productAddReducer";
import { deleteReducer } from "./deleteReducer";
import { orderamountReducer } from "./orderamountReducer";
import { catalogamountReducer } from "./catalogamountReducer";
import { searchnameReducer } from "./searchnameReducer";



export const rootReducer = combineReducers({
  likesReducer,
  inputReducer,
  commentsReducer,
  topSalesReducer,
  catalogReducer,
  categoriesReducer,
  productReducer,
  cartReducer,
  productAddReducer,
  deleteReducer,
  orderamountReducer,
  catalogamountReducer,
  searchnameReducer
})