import { Component, React } from "react";
import PropTypes from "prop-types";

let propTypes = require("prop-types");

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
    };
  }

  static defaultProps = {
    onItemAdded: () => {},
  };

  static propTypes = {
    onItemAdded: propTypes.func,
  };

  onInputChange = (e) => {
    e.preventDefault();
    this.setState({
      label: e.target.value,
    });
  };

  onItemSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <form className="header" onSubmit={this.onItemSubmit}>
        <h1>Todos</h1>
        <label>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={this.state.label}
            onChange={this.onInputChange}
          />
        </label>
      </form>
    );
  }
}
