import React, { Component } from "react";
import Events from "./Events/Events";
import ListAndKey from "./ListAndKey/ListAndKey";
import { NewsList } from "./NewsList/NewsList";
import ReactDOM from "react-dom";
import "./App.css";
import OpenAccount from "./AccountOpeningForm/OpenAccount";
import LoginForm from "./LoginForm/LoginForm";
import StudentRegistrations from "./StudentRegistration/StudentRegistration";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [],
      choice: null,
      dummy: false,
      name: "sachin",
    };
  }

  filterFun(number) {
    if (!this.state.choice) {
      return true;
    }

    if (this.state.choice === "even") {
      return number % 2 === 0;
    }

    return number % 2 !== 0;
  }

  filterF = this.filterFun.bind(this);
  name = "sagar";
  render() {
    return (
      <>
        {/* <fieldset>
          <legend>Component Lifecycle</legend>
          <button onClick={() => this.setState({ show: !this.state.show })}>
            {this.state.show ? "HIDE" : "SHOW"}
          </button>
          {this.state.show && <NewsList show={this.state.show} />}
        </fieldset> */}

        {/* <fieldset>
          <legend>Events</legend>
          <Events />
        </fieldset> */}

        {/* <fieldset>
          <legend>List and Keys</legend>
          <ListAndKey />
        </fieldset> */}

        {/* <fieldset>
          <legend>Conditional Rendering</legend>
          <button onClick={() => this.setState({ choice: "odd" })}>Odd</button>
          <button onClick={() => this.setState({ choice: "even" })}>
            Even
          </button>
          <button onClick={() => this.setState({ choice: null })}>Reset</button>
          <button
            onClick={() =>
              this.setState({
                numbers: [...this.state.numbers, this.state.numbers.length + 1],
              })
            }
          >
            Add
          </button>

          {this.state.numbers.length > 0 ? (
            <ul>
              {this.state.numbers.filter(this.filterF).map((item) => (
                <li
                  key={item}
                  onClick={() =>
                    this.setState({
                      numbers: [
                        ...this.state.numbers.filter((i) => i !== item),
                      ],
                    })
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <h1>List is empty</h1>
          )}
        </fieldset> */}

        <fieldset>
          <legend>Forms</legend>
          {/* <OpenAccount /> */}
          {/* <LoginForm /> */}
          <StudentRegistrations />
        </fieldset>
      </>
    );
  }
}

// &&
// isLoggedIn? LogoutComponent : LoginComponent:
// if else switch
