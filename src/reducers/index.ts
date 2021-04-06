import { combineReducers } from "redux";
import todoItemReducer from "./todoItem";
import isLoggedReducer from "./isLogged";

const rootReducer = combineReducers({
  isLogged: isLoggedReducer,
  todoItems: todoItemReducer,
});

export default rootReducer;
