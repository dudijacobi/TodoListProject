import { ITodoItem } from "../reducers/todoItem";

interface ITodoItemAction {
  type: "ADD" | "REMOVE" | "EDIT";
}

export interface AddItemAction extends ITodoItemAction {
  type: "ADD";
  payload: ITodoItem;
}

export interface RemoveItemAction extends ITodoItemAction {
  type: "REMOVE";
  payload: string;
}

export interface EditItemAction extends ITodoItemAction {
  type: "EDIT";
  payload: ITodoItem;
}

export type TodoItemAction = AddItemAction | RemoveItemAction | EditItemAction;

export const addTodoItem = (todoItem: ITodoItem): AddItemAction => ({
  type: "ADD",
  payload: todoItem,
});

export const removeTodoItem = (itemId: string): RemoveItemAction => ({
  type: "REMOVE",
  payload: itemId,
});
