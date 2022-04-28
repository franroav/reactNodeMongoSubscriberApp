import { combineReducers } from "redux";
import messageReducer from "./messageReducer";
import buttonReducer from "./buttonReducer";
import subscriberReducer from "./subscriberReducer";

export default combineReducers({
  messageReducer,
  buttonReducer,
  subscriberReducer,
});
