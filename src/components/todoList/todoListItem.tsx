import React from "react";
import { Link } from "react-router-dom";
import { ITodoItem } from "../../reducers/todoItem";
import CommonSection from "../common/commonSection";

import "./todo-list-item.scss";

interface TodoListItemProps {
  item: ITodoItem;
  removeItem?(): void;
}

const TodoListItem = ({ item, removeItem }: TodoListItemProps) => {
  const onRemove = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    removeItem();
  };

  return (
    <Link
      to={`/items/${item.id}`}
      style={{ textDecoration: "none", color: "white" }}
    >
      <li className="todo-list-item">
        {removeItem && (
          <span className="close-button" onClick={onRemove}>
            x
          </span>
        )}
        <CommonSection label="Title:" value={item.title} />
        <CommonSection label="Description:" value={item.description} />
      </li>
    </Link>
  );
};

export default TodoListItem;
