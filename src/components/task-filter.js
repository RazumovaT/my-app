import { Component, React } from "react";

const Filters = ["All", "Active", "Completed"];

export default class TaskFilter extends Component {
  render() {
    const { activeFilter, setActiveFilter } = this.props;
    return (
      <ul className="filters">
        {Filters.map((filter) => {
          return (
            <li key={Math.random()}>
              <button
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? "selected" : ""}
                type="button"
              >
                {filter}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
