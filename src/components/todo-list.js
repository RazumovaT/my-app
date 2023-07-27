import { React } from "react";
import NewTaskForm from "./new-task-form";

const ToDoList = ({
  todos,
  onDeleted,
  onItemDone,
  onItemActive,
  onItemCompleted,
}) => {
  const arrItems = todos.map((el) => {
    return (
      <NewTaskForm
        {...el}
        onDeleted={() => onDeleted(el.id)}
        key={el.id}
        onItemDone={() => onItemDone(el.id)}
        onItemActive={() => onItemActive(el.id)}
        onItemCompleted={() => onItemCompleted(el.id)}
      />
    );
  });
  return (
    <section className="main">
      <ul className="todo-list">{arrItems}</ul>
    </section>
  );
};

export default ToDoList;
