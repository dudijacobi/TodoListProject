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
      return state.filter((item) => item.id !== action.payload);
    case "EDIT":
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    default:
      return state;
  }
};

export default todoItemReducer;
