import React from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import { ITodoItem } from "../reducers/todoItem";
import CommonSection from "./common/commonSection";

const ItemPage = ({ match }: RouteComponentProps) => {
  const items = useSelector<{ todoItems: ITodoItem[] }, ITodoItem[]>(
    (state) => state.todoItems
  );
  const item = items.find(
    (item) => item.id === (match.params as { id: string }).id
  );

  return (
    <div className="item-page">
      <div className="content">
        <CommonSection label="ID: " value={item.id} />
        <CommonSection label="Title: " value={item.title} />
        <CommonSection label="Description: " value={item.description} />
        <CommonSection
          label="Status: "
          value={item.completed ? "Completed!" : "Not completed.."}
        />
      </div>
    </div>
  );
};

export default ItemPage;
