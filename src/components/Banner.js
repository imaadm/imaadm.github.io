import React from "react";
import java from "./../assets/javalogo.png";
import js from "./../assets/js.png";
import node from "./../assets/node.png";
import react from "./../assets/react.png";
import python from "./../assets/python.png";
import html from "./../assets/html.png";
import css from "./../assets/css.png";
import "./banner.css";
function Banner(props) {
  return (
    <div className=" bg-indigo-400 py-12">
      <div className="logos flex flex-row justify-center gap-28 py-12">
        <img src={js} alt="jslogo"></img>
        <img src={html} alt="htmllogo"></img>
        <img src={css} alt="cssjavalogo"></img>
        <img src={react} alt="reactlogo"></img>
        <img src={node} alt="nodelogo"></img>
        <img src={java} alt="javalogo"></img>
        <img src={python} alt="pythonlogo"></img>
      </div>
      <h1 className="text-2xl">
        This page was built in React with Tailwind CSS
      </h1>
    </div>
  );
}
export default Banner;
