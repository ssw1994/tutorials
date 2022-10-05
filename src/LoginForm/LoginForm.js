import React from "react";

function CheckCrendentials(payload) {
  if (payload.username === "sachin") {
    if (payload.password === "1234") {
      return "Logged In successfully";
    } else {
      return "Invalid credentials";
    }
  } else {
    return "User not found";
  }
}

export default function LoginForm() {
  const [loginMessage, updateLoginMessage] = React.useState("");
  const [passwordType, setPasswordType] = React.useState("password");
  const [loginForm, updateLoginForm] = React.useState({
    username: "",
    password: "",
  });

  const loginUser = (event) => {
    event.preventDefault();
    console.log(loginForm);
    //api ->

    const message = CheckCrendentials(loginForm);
    updateLoginMessage(message);

    console.log("I'm login user");
  };

  const username = (
    <div>
      <input
        placeholder="Username"
        required
        value={loginForm.username}
        onChange={(e) =>
          updateLoginForm((prev) => {
            return { ...prev, username: e.target.value };
          })
        }
      ></input>
    </div>
  );

  const password = (
    <div>
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
    <div>
      <button type="submit">Login</button>
    </div>
  );

  return (
    <div>
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
