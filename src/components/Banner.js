import React from "react";
import java from "./../assets/javalogo.png";
import js from "./../assets/js.png";
import node from "./../assets/node.png";
import react from "./../assets/react.png";
import python from "./../assets/python.png";
import html from "./../assets/html.png";
import css from "./../assets/css.png";
function Banner(props) {
  return (
    <div className=" bg-indigo-400 py-8">
      <div className="logos flex flex-row justify-center gap-4 sm:gap-12 med:gap-28 lg:gap-28 py-8">
        <img className="max-h-12 sm:max-h-20 med:max-h-28 lg:max-h-28" src={js} alt="jslogo"></img>
        <img className="max-h-12 sm:max-h-20 med:max-h-28 lg:max-h-28" src={html} alt="htmllogo"></img>
        <img className="max-h-12 sm:max-h-20 med:max-h-28 lg:max-h-28" src={css} alt="cssjavalogo"></img>
        <img className="max-h-12 sm:max-h-20 med:max-h-28 lg:max-h-28" src={react} alt="reactlogo"></img>
        <img className="max-h-12 sm:max-h-20 med:max-h-28 lg:max-h-28" src={node} alt="nodelogo"></img>
        <img className="max-h-12 sm:max-h-20 med:max-h-28 lg:max-h-28" src={java} alt="javalogo"></img>
        <img className="max-h-12 sm:max-h-20 med:max-h-28 lg:max-h-28" src={python} alt="pythonlogo"></img>
      </div>
      <h1 className="text-2xl">
        This page was built in React with Tailwind CSS
      </h1>
    </div>
  );
}
export default Banner;
