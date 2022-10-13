import React from "react";
import { StoreActions } from "../CartWrapper/store/actions";

function CheckCrendentials(payload) {
  //if (payload.username === "sachin") {
  if (payload.password === "1234") {
    return true;
  } else {
    throw new Error("Please enter correct password");
  }
}

export default function LoginForm({ dispatch }) {
  const [loginMessage, updateLoginMessage] = React.useState("");
  const [passwordType, setPasswordType] = React.useState("password");
  const [loginForm, updateLoginForm] = React.useState({
    username: "",
    password: "",
  });

  const [isFormSubmiited, setSubmitted] = React.useState(false);

  const loginUser = (event) => {
    event.preventDefault();
    console.log(loginForm);
    //api ->
    setSubmitted(true);
    try {
      if (CheckCrendentials(loginForm)) {
        dispatch({ type: StoreActions.LOGIN_USER, payload: loginForm });
      }
    } catch (error) {
      updateLoginMessage(error.message);
    }

    console.log("I'm login user");
  };

  const hasError = (key, pattern) => {
    if (!isFormSubmiited) return false;
    if (!loginForm[key]) return true;
    if (!pattern) return false;
    if (loginForm[key] && !loginForm[key].match(pattern)) return true;
    return false;
  };

  const username = (
    <div className={hasError("username", "[a-z]+") && "error-input"}>
      <input
        placeholder="Username"
        required
        pattern="[a-z]+"
        value={loginForm.username}
        onChange={(e) =>
          updateLoginForm((prev) => {
            return { ...prev, username: e.target.value };
          })
        }
      ></input>
      {isFormSubmiited && (
        <div className="error">
          {loginForm.username && !loginForm.username.match("[a-z]+") && (
            <span>Invalid username</span>
          )}
          {!loginForm.username && <span>Please enter username</span>}
        </div>
      )}
    </div>
  );

  const password = (
    <div className={hasError("password") ? "error-input" : ""}>
      <input
        placeholder="Password"
        type={passwordType}
        required
        value={loginForm.password}
        onChange={(e) =>
          updateLoginForm((prev) => {
            return { ...prev, password: e.target.value };
          })
        }
      />
      <button
        type="button"
        onClick={() => {
          setPasswordType((prev) =>
            prev === "password" ? "text" : "password"
          );
        }}
      >
        {passwordType === "password" ? "Show" : "Hide"}
      </button>
    </div>
  );

  const LoginButton = (
    <div onClick={() => setSubmitted(true)}>
      <button type="submit">Login</button>
    </div>
  );

  return (
    <div className="center-box">
      <form onSubmit={loginUser}>
        {username}
        {password}
        {LoginButton}
        <h1>{loginMessage}</h1>
      </form>
    </div>
  );
}

//useState,useEffect
//useMemo , useCallback,useRef,useReducer,useContext
