import React, { Component } from "react";

class List extends Component {
  state = {
    check: this.props.done
  };

  handleList = () => {
    if (this.state.check === false) {
      this.setState({
        check: true
      });
    } else {
      this.setState({
        check: false
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{ textDecoration: this.state.check ? "line-through" : "" }}
          onClick={this.handleList}
        >
          {this.props.text}
        </div>
        <button onClick={this.props.removeList}>X</button>
      </React.Fragment>
    );
  }
}

export default List;
