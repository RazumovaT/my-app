import { Component, React } from "react";
import { useState } from "react";

// import { cn } from "classnames";
// import { render } from "@testing-library/react";

export default class TaskFilter extends Component {
  handleClick = (e) => {
    const { onItemActive, onItemCompleted } = this.props;
    onItemActive(e);
    let btn = document.querySelectorAll("button");
    // for (let i = 0; i < btn.length; i++) {
    //   btn[i].classList.remove("selected");
    // }
    e.currentTarget.classList.add("selected");
    if (onItemCompleted(e)) {
      e.currentTarget.classList.remove("selected");
    }
  };

  render() {
    const selected = "";
    return (
      <ul className="filters">
        <li>
          <button className="selected" type="button">
            All
          </button>
        </li>
        <li>
          <button onClick={this.handleClick}>Active</button>
        </li>
        <li>
          <button type="button" onClick={this.props.onItemCompleted}>
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
