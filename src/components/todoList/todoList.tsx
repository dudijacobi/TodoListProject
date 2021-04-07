import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITodoItem } from "../../reducers/todoItem";
import TodoListItem from "./todoListItem";
import AddItem from "./addItem";
import { removeTodoItem } from "../../actions/todoItem";

import "./todo-list.scss";

const TodoList = () => {
  const todoItems = useSelector<{ todoItems: ITodoItem[] }, ITodoItem[]>(
    (state) => state.todoItems
  );
  const dispatch = useDispatch();

  return (
    <div className="todo-list">
      <label className="main-title">TODO List:</label>
      <AddItem />
      <ul className="list">
        {todoItems &&
          todoItems.map((item) => (
            <TodoListItem
              key={item.id}
              item={item}
              removeItem={() => dispatch(removeTodoItem(item.id))}
            />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
