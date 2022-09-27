import React, { Component } from "react";

export class NewsList extends Component {
  static timer = null;
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      update: false,
    };
    console.log("constructor called");
  }

  inc() {
    this.setState({ count: this.state.count + 1 });
  }

  dec() {
    this.setState({ count: this.state.count - 1 });
  }
  componentDidMount() {
    console.log("Component did mount");

    //fetching

    //interval
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
    clearInterval(NewsList.timer);
  }

  render() {
    //never update state here setState
    return (
      <div>
        <button onClick={() => this.dec()}>-</button>
        {this.state.count}
        <button onClick={() => this.inc()}>+</button>

        <button onClick={() => this.setState({ update: !this.state.update })}>
          {this.state.update ? "YES" : "NO"}
        </button>
      </div>
    );
  }
}

//click - > right,left,drag,drop
//Mouse -> MouseEnter , MouseOver, MouseExit,Mouse
// Keyboard -> KeyUp,KeyDown,KeyPress
