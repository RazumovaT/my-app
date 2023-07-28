import { React } from "react";
import TaskFilter from "./task-filter";

const Footer = ({ itemsLeft, activeFilter, setActiveFilter }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{itemsLeft} items left</span>
      <TaskFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
