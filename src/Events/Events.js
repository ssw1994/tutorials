import React from "react";
export default function Events() {
  const [menuMetaData, updateMenuMetaData] = React.useState({
    show: false,
    x: 0,
    y: 0,
  });

  const [bkColor, updateBkColor] = React.useState("white");
  const [iValue, updateIValue] = React.useState("xyz");
  const handleClick = (event) => {
    event && event.stopPropagation();
    console.log(event);

    //inputRef.current.value = "Updated value";

    alert("I'm button Clicked");
  };

  const rightHandleClick = (event) => {
    event.preventDefault();
    console.log(event);
    updateMenuMetaData({
      show: true,
      x: event.clientX,
      y: event.clientY,
    });
    alert("I'm right clicked");
  };

  const mouseEnter = () => {
    updateBkColor("green");
  };

  const mouseLeave = () => {
    updateBkColor("yellow");
  };

  const mouseOver = () => {
    updateBkColor("red");
  };

  const onInputChange = (event) => {
    console.log(event.target.value);
    //updateIValue(event.target.value);
  };

  const inputRef = React.createRef();

  const validateInput = (e) => {
    console.log(e);
    console.log(isNaN(e.target.value));
    if (e.target.value && e.target.value.length > 10) {
      e.preventDefault();
    }

    console.log(e.key, e.keyCode);
    if (e.keyCode === 13) {
      // call login fn
    }
  };

  const divClick = () => {
    alert("div clicked");
  };
  const [styleObj, updateStyleObj] = React.useState({
    position: "relative",
    top: 0,
    left: 0,
  });
  const onDragEnd = (event) => {
    console.log(event);
    updateStyleObj({
      top: event.clientX,
      left: event.clientY,
      position: "relative",
    });
  };

  return (
    <div>
      {menuMetaData.show && (
        <div
          style={{
            position: "absolute",
            top: menuMetaData.x,
            left: menuMetaData.y,
          }}
        >
          <ul>
            <li>Open</li>
            <li>Print</li>
          </ul>
        </div>
      )}
      <div
        style={{ width: "100px", height: "100px", border: "1px solid gray" }}
        onContextMenu={rightHandleClick}
      ></div>
      <div
        style={{
          width: "100px",
          height: "100px",
          border: "1px solid gray",
          backgroundColor: bkColor,
        }}
        onMouseDown={mouseOver}
        onMouseLeave={mouseLeave}
        onMouseEnter={mouseEnter}
      ></div>

      <input
        onChange={onInputChange}
        ref={inputRef}
        onKeyDown={validateInput}
        onPaste={(e) => e.preventDefault()}
      />

      <div
        onClick={divClick}
        style={{ width: "200px", height: "100px", border: "1px solid black" }}
      >
        <button
          onClick={handleClick}
          draggable
          onDragEnd={onDragEnd}
          style={styleObj}
        >
          Click Me
        </button>
      </div>
    </div>
  );
}

// document.getElementById("xyz").addEventListener("click", (event) => {
//   handleClick(event);
// });
