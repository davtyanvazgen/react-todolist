import React, { Component } from "react";

class TodoForm extends Component {
  state = {
    text: ""
  };

  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSbmit}>add</button>
      </React.Fragment>
    );
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSbmit = event => {
    event.preventDefault();
    this.props.onAdd({
      text: this.state.text,
      complete: false
    });
    this.setState({
      text: ""
    });
  };
}

export default TodoForm;
