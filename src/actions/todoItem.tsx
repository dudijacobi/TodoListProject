import { ITodoItem } from "../reducers/todoItem";

export interface TodoItemAction {
  type: "ADD" | "REMOVE" | "EDIT";
  payload: ITodoItem;
}

export const addTodoItem = (todoItem: ITodoItem): TodoItemAction => ({
  type: "ADD",
  payload: todoItem,
});
