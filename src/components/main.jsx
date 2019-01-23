import React, { Component } from "react";

//classneri methodner@
//events click focus blur; error coder@
//promisner promisneri cheinner
//objectk
//functions

//materials css
class Main extends Component {
  state = { itemValue: "" };

  handleChange = e => {
    this.setState({ itemValue: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.itemValue}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddClick}>sbmit</button>
      </div>
    );
  }
}

export default Main;
