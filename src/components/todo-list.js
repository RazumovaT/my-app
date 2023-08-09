import { React, Component } from "react";
import NewTaskForm from "./new-task-form";
import PropTypes from "prop-types";
import { useState } from "react";

let propTypes = require("prop-types");

function ToDoList({
  todos,
  onDeleted,
  onItemDone,
  onItemEdit,
  onItemActive,
  onItemCompleted,
  clearCompleted,
  onItemAdded,
  editArr,
  onItemSubmit,
  onChange,
}) {
  const [label, setLabel] = useState("");

  const inputChange = (label) => {
    setLabel(label);
  };

  const arrItems = todos.map((el) => {
    return (
      <NewTaskForm
        {...el}
        onDeleted={() => onDeleted(el.id)}
        key={el.id}
        onItemDone={() => onItemDone(el.id)}
        onItemEdit={() => onItemEdit(el.id)}
        onItemActive={() => onItemActive(el.id)}
        onItemCompleted={() => onItemCompleted(el.id)}
        clearCompleted={() => clearCompleted(el.id)}
        onItemAdded={() => onItemAdded(el.id)}
        todos={todos}
        onItemSubmit={() => onItemSubmit(el.id, label)}
        onChange={inputChange}
      />
    );
  });
  return (
    // <section className="main">
    <ul className="todo-list">{arrItems}</ul>
    // </section>
  );
}
ToDoList.defaultProps = {
  todos: [],
  onDeleted: () => {},
  onItemDone: () => {},
  onItemActive: () => {},
  onItemCompleted: () => {},
  clearCompleted: () => {},
};

ToDoList.propTypes = {
  todos: propTypes.arrayOf(propTypes.object).isRequired,
  onDeleted: propTypes.func,
  onItemDone: propTypes.func,
  onItemActive: propTypes.func,
  onItemCompleted: propTypes.func,
  clearCompleted: propTypes.func,
};

export default ToDoList;
