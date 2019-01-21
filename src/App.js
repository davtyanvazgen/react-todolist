import React, { Component } from "react";
import TodoForm from "./components/todo";
import List from "./components/list";

class App extends Component {
  state = {
    todos: []
  };

  render() {
    return (
      <div>
        <TodoForm onAdd={this.addTodo} />

        {this.state.todos.map(todo => (
          <List
            key={todo.text}
            done={todo.complete}
            text={todo.text}
            removeList={() => this.deleteList(todo.text)}
            done={todo.complete}
          />
        ))}
      </div>
    );
  }

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  deleteList = text => {
    this.setState({
      todos: this.state.todos.filter(each => text !== each.text)
    });
  };
}

export default App;
