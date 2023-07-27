import { React } from "react";
import TaskFilter from "./task-filter";

const Footer = ({ itemsLeft, onItemActive, onItemCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{itemsLeft} items left</span>
      <TaskFilter
        onItemActive={onItemActive}
        onItemCompleted={onItemCompleted}
      />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
