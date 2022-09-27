import React, { Component } from "react";
import Events from "./Events/Events";
import { NewsList } from "./NewsList/NewsList";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <>
        <fieldset>
          <legend>Component Lifecycle</legend>
          <button onClick={() => this.setState({ show: !this.state.show })}>
            {this.state.show ? "HIDE" : "SHOW"}
          </button>
          {this.state.show && <NewsList show={this.state.show} />}
        </fieldset>

        <fieldset>
          <legend>Events</legend>
          <Events />
        </fieldset>
      </>
    );
  }
}
