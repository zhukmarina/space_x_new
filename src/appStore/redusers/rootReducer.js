import { combineReducers } from "redux";
import itemsReducer from "./itemsReduser";
import userReduser from '../slices/userSlice'

const rootReducer = combineReducers({
  items: itemsReducer,
  user: userReduser
});

export default rootReducer;
