import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    array: ["haseeb", "ahmed", "khan"]
  };
  render() {
    return (
      <div>
        <span className={this.choseClass()}>{this.checkCount()}</span>
        <br />
        <button className="btn btn-primary" onClick={this.increment}>
          click me
        </button>
        <button className="btn btn-secondary ml-2" onClick={this.decrement}>
          click me
        </button>
        {this.checkArrya()};
      </div>
    );
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  choseClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count <= 0 ? "warning" : "primary";
    return classes;
  }

  checkArrya() {
    if (this.state.array.length === 0) return <h2>NO Element in array</h2>;
    else
      return (
        <ul>
          {this.state.array.map(element => (
            <li key={element}> {element} </li>
          ))}
        </ul>
      );
  }
  checkCount() {
    if (this.state.count === 0) return <h1>Zero</h1>;
    else return <h1>{this.state.count}</h1>;
  }
}
export default Counter;
