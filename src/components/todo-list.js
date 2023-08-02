import { React, Component } from "react";
import NewTaskForm from "./new-task-form";
import PropTypes from "prop-types";

let propTypes = require("prop-types");
export default class ToDoList extends Component {
  static defaultProps = {
    todos: [],
    onDeleted: () => {},
    onItemDone: () => {},
    onItemActive: () => {},
    onItemCompleted: () => {},
    clearCompleted: () => {},
  };
  static propTypes = {
    todos: propTypes.arrayOf(propTypes.object).isRequired,
    onDeleted: propTypes.func,
    onItemDone: propTypes.func,
    onItemActive: propTypes.func,
    onItemCompleted: propTypes.func,
    clearCompleted: propTypes.func,
  };

  render() {
    const {
      todos,
      onDeleted,
      onItemDone,
      onItemEdit,
      onItemActive,
      onItemCompleted,
      clearCompleted,
      onItemAdded,
      editArr,
    } = this.props;
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
          onItemSubmit={{
            id: { ...el.id },
          }}
        />
      );
    });
    return (
      <section className="main">
        <ul className="todo-list">{arrItems}</ul>
      </section>
    );
  }
}
