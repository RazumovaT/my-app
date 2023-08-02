import { render } from "@testing-library/react";
import { React, Component } from "react";
import TaskFilter from "./task-filter";
import PropTypes from "prop-types";

let propTypes = require("prop-types");

export default class Footer extends Component {
  static defaultProps = {
    itemsLeft: undefined,
    activeFilter: "All",
    setActiveFilter: () => {},
    clearCompleted: () => {},
  };

  static propTypes = {
    setActiveFilter: propTypes.func,
    clearCompleted: propTypes.func,
  };

  render() {
    const { itemsLeft, activeFilter, setActiveFilter, clearCompleted } =
      this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{itemsLeft} items left</span>
        <TaskFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}
