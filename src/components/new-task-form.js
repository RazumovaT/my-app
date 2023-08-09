import { React, Component } from "react";
import { useState } from "react";
import { formatDistance } from "date-fns";
import PropTypes from "prop-types";

let propTypes = require("prop-types");

function NewTaskForm({
  label,
  done,
  id,
  isEdit,
  createdAt,
  onDeleted,
  onItemDone,
  onItemEdit,
  onItemSubmit,
  onChange,
}) {
  let counter = 0;
  const [input, setInput] = useState(label);

  const inputChange = (e) => {
    onChange(e.target.value);
    setInput(e.target.value);
  };
  let classCompleted = "";

  const submitFunc = (e) => {
    e.preventDefault();
    onItemSubmit();
  };

  if (isEdit) {
    classCompleted -= "completed";
    classCompleted += " editing";
    return (
      <form onSubmit={(e) => submitFunc(e)}>
        <input
          type="text"
          className="edit"
          value={input}
          onChange={inputChange}
        />
      </form>
    );
  }

  return (
    <label>
      <li className={done ? "completed" : ""} onClick={onItemDone}>
        <div className="view">
          <input className="toggle" type="checkbox" name="checkbox" id={id} />
          <label htmlFor={id} onClick={onItemDone}>
            <span className="description">{label}</span>
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
    </label>
  );
}

NewTaskForm.defaultProps = {
  label: "",
  done: false,
  id: Math.random(),
  onDeleted: () => {},
  onItemDone: () => {},
};

NewTaskForm.propTypes = {
  label: propTypes.string.isRequired,
  done: propTypes.bool,
  id: propTypes.number,
  onDeleted: propTypes.func,
  onItemDone: propTypes.func,
};

export default NewTaskForm;
