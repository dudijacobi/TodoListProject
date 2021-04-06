import { v4 } from "uuid";
import { TodoItemAction } from "../actions/todoItem";

export interface ITodoItem {
  id?: string;
  title: string;
  description: string;
  completed?: boolean;
}

const todoItemReducer = (
  state: ITodoItem[] = [],
  action: TodoItemAction
): ITodoItem[] => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: v4(), ...action.payload }];
    case "REMOVE":
    // const index = state.indexOf(action.payload);
    // if (index > -1) {
    //   return state.splice(index, 1);
    // }
    // return state;
    case "EDIT":
    default:
      return state;
  }
};

export default todoItemReducer;
