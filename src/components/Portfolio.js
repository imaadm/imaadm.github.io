import React from "react";
import "./portfolio.css";

function Portfolio(props) {
  let showing;
  if (props.vis === true) showing = "visible";
  if (props.vis === false) showing = "hidden";
  return <div style={{ visibility: showing }}>Portfolio</div>;
}
export default Portfolio;
