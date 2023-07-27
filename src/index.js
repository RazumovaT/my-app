import { React } from "react";
import { Component } from "react";
import { createRoot } from "react-dom/client";

import Header from "./components/header";
import ToDoList from "./components/todo-list";
import Footer from "./components/footer";
import NewTaskForm from "./components/new-task-form";

const root1 = document.getElementById("root1");
const root = createRoot(root1);

class AppElements extends Component {
  minId = 0;

  state = {
    data: [],
    active: [],
  };

  createItem(label) {
    return {
      label,
      done: false,
      active: true,
      id: this.minId++,
    };
  }

  addItem = (text) => {
    const newItem = this.createItem(text);

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((el) => el.id === id);
      const newArr = JSON.parse(JSON.stringify(data))
        .slice(0, index)
        .concat(JSON.parse(JSON.stringify(data)).slice(index + 1));
      return {
        data: newArr,
      };
    });
  };

  itemDone = (id) => {
    this.setState(({ data }) => {
      const copy = JSON.parse(JSON.stringify(data));

      let newArr = copy.map((el) =>
        el.id === id ? { ...el, done: !el.done } : { ...el }
      );
      return {
        data: newArr,
      };
    });
  };

  itemActive = (id) => {
    this.setState(({ data, active }) => {
      const copy = JSON.parse(JSON.stringify(data));
      const newArr = copy.filter((el) => el.done == false);
      return {
        active: newArr,
      };
    });
  };
  itemCompleted = (id) => {
    this.setState(({ data, completed }) => {
      debugger;
      const copy = JSON.parse(JSON.stringify(data));
      const newArr = copy.filter((el) => el.done);
      return {
        active: newArr,
      };
    });
  };

  render() {
    const itemsLeft = this.state.data.filter((el) => !el.done).length;

    return (
      <div className="todoapp">
        <Header onItemAdded={this.addItem} />
        <ToDoList
          todos={this.state.data}
          onDeleted={this.deleteItem}
          onItemDone={this.itemDone}
          onItemActive={this.itemActive}
        />
        <Footer
          itemsLeft={itemsLeft}
          onItemActive={this.itemActive}
          onItemCompleted={this.itemCompleted}
        />
      </div>
    );
  }
}

root.render(<AppElements />);
