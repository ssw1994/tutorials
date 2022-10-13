import React, { useEffect } from "react";

export function Counter({ counter, increment, decrement }) {
  console.log("Memozied counter");
  return (
    <>
      <button onClick={increment}>INCREMENT</button>
      <h1>{counter.count}</h1>
      <button onClick={decrement}>DECREMENT</button>
    </>
  );
}

const MemoizedCounter = React.memo(Counter);

export default function HooksDemo() {
  const [counter, updateCounter] = React.useState({ count: 0 });
  const [darkMode, toggleDarkMode] = React.useState(false);

  const darkStyle = {
    backgroundColor: "black",
    color: "white",
  };

  const increment = React.useCallback(() => {
    updateCounter((prev) => {
      return {
        count: prev.count + 1,
      };
    });
  }, [counter]);

  const decrement = React.useCallback(() => {
    updateCounter((prev) => {
      return {
        count: prev.count - 1,
      };
    });
  }, [counter]);

  const getResult = () => {
    console.log("Get Result Rendered");
    // for (let i = 0; i < 1000000000; i++) {}
    return 10 + counter.count;
  };
  const result = React.useMemo(() => getResult(), [counter]);

  //const result = getResult();

  //   const increment = () => {
  //     updateCounter((prev) => prev + 1);
  //   };

  //   const decrement = () => {
  //     updateCounter(counter - 1);
  //   };

  let ok = false;
  React.useEffect(() => {
    const ok = "true";
    console.log("counter updated" + counter);
  }, [counter]);

  React.useEffect(() => {
    console.log("darkmode toggled" + darkMode);
  }, [darkMode]);

  //   if (darkMode) {
  //     document.querySelector("body").style.backgroundColor = "black";
  //     document.querySelector("body").style.color = "white";
  //   } else {
  //     document.querySelector("body").style.backgroundColor = "white";
  //     document.querySelector("body").style.color = "black";
  //   }
  console.log("Rendered");
  return (
    <>
      <div style={darkMode ? darkStyle : null}>
        {ok}
        <MemoizedCounter
          counter={counter}
          increment={increment}
          decrement={decrement}
        ></MemoizedCounter>
      </div>

      <h2>Result {result}</h2>
      <button onClick={() => toggleDarkMode((prev) => !prev)}>
        ToggleDarkMode
      </button>
    </>
  );
}
