import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../../actions/todoItem";
import Input from "../common/input";

import "./add-item.scss";

const AddItem = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [validationMsg, setValidationMsg] = useState("");

  const onClick = () => {
    if (!title || !description) {
      setValidationMsg("All inputs are mandatory.");
      return;
    }

    dispatch(addTodoItem({ title, description }));

    setTitle("");
    setDescription("");
    setValidationMsg("");
  };

  return (
    <div className="add-item">
      <Input title="Title:" value={title} setter={setTitle} />
      <Input title="Description:" value={description} setter={setDescription} />
      <button className="add-button" onClick={onClick}>
        Add Item
      </button>
      {validationMsg && (
        <span className="validation-msg">{`* ${validationMsg}`}</span>
      )}
    </div>
  );
};

export default AddItem;
