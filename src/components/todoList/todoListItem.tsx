import React from "react";
import { Link } from "react-router-dom";
import { ITodoItem } from "../../reducers/todoItem";
import CommonSection from "../common/commonSection";

import "./todo-list-item.scss";

interface TodoListItemProps {
  item: ITodoItem;
}

const TodoListItem = ({ item }: TodoListItemProps) => (
  <Link
    to={`/items/${item.id}`}
    style={{ textDecoration: "none", color: "white" }}
  >
    <li className="todo-list-item">
      <CommonSection label="Title:" value={item.title} />
      <CommonSection label="Description:" value={item.description} />
    </li>
  </Link>
);

export default TodoListItem;
