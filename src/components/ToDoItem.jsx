import React, { useState } from "react";

function ToDoItem(props) {
  const [cross, setCross] = useState(false);
  const underlined = {
    textDecoration: "line-through"
  };
  return (
    <li
      onClick={() => {
        setCross((prev) => !prev);
      }}
      style={cross ? underlined : null}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
