import { Component, React } from "react";
import PropTypes from "prop-types";

const Filters = ["All", "Active", "Completed"];

let propTypes = require("prop-types");

export default class TaskFilter extends Component {
  static defaultProps = {
    activeFilter: "All",
    setActiveFilter: () => {},
  };
  static propTypes = {
    setActiveFilter: propTypes.func,
  };
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
