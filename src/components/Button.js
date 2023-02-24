import React from "react";

function Button(props) {
  return <button className={props.bstyle}>{props.btext}</button>;
}

export default Button;
