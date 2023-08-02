import { React, Component } from "react";
import { useState } from "react";
import { formatDistance } from "date-fns";
import PropTypes from "prop-types";

let propTypes = require("prop-types");

function NewTaskForm({
  todos,
  label,
  done,
  id,
  isEdit,
  createdAt,
  onDeleted,
  onItemDone,
  onItemEdit,
  onItemAdded,
  editArr,
}) {
  const [input, setInput] = useState(label);
  const [arr, setArr] = useState(todos);

  const onItemSubmit = (e, id) => {
    e.preventDefault();
    const copy = JSON.parse(JSON.stringify(todos));
    let newArr = [...copy].map((el) => {
      if (el.id == id) {
        return { ...el, isEdit: !isEdit, label: e.target.value, done: !done };
      }
      return el;
    });
    console.log(newArr);
  };

  let classCompleted = "";
  if (done) {
    classCompleted += "completed";
  }
  if (isEdit) {
    classCompleted -= "completed";
    classCompleted += " editing";
    return (
      <form onSubmit={onItemSubmit}>
        <input
          type="text"
          className="edit"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    );
  }

  return (
    <li className={classCompleted} onClick={onItemDone}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description" id={id}>
            {label}
          </span>
          <span className="created">
            created{" "}
            {formatDistance(createdAt, Date.now(), {
              includeSeconds: true,
            })}{" "}
            ago
          </span>
        </label>
        <button className="icon icon-edit" onClick={onItemEdit}></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
    </li>
  );
}

export default NewTaskForm;
