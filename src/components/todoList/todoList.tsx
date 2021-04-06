import React from "react";
import { useSelector } from "react-redux";
import { ITodoItem } from "../../reducers/todoItem";
import TodoListItem from "./todoListItem";
import AddItem from "./addItem";

import "./todo-list.scss";

const TodoList = () => {
  const todoItems = useSelector<{ todoItems: ITodoItem[] }, ITodoItem[]>(
    (state) => state.todoItems
  );

  return (
    <div className="todo-list">
      <label className="main-title">TODO List:</label>
      <AddItem />
      <ul className="list">
        {todoItems &&
          todoItems.map((item) => <TodoListItem key={item.id} item={item} />)}
      </ul>
    </div>
  );
};

export default TodoList;
