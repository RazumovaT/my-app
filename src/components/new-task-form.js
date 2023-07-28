import { React } from "react";
import { Component } from "react";

export default class NewTaskForm extends Component {
  // state = {
  //   done: false,
  // };
  // onLabelClick = () => {
  //   this.setState(({ done }) => {
  //     return {
  //       done: !this.state.done,
  //     };
  //   });
  // };

  render() {
    const { label, done, id, onDeleted, onItemDone, onItemActive } = this.props;

    let classCompleted = "";

    if (done) {
      classCompleted += "completed";
    }

   

    return (
      <li className={classCompleted} onClick={onItemDone}>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description" id={id}>
              {label}
            </span>
            <span className="created"></span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
      </li>
    );
  }
}
