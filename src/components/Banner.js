import React from "react";
import java from "./../assets/javalogo.png";
import js from "./../assets/js.png";
import ts from "./../assets/ts.png"
import node from "./../assets/node.png";
import react from "./../assets/react.png";
import python from "./../assets/python.png";
import html from "./../assets/html.png";
import css from "./../assets/css.png";
function Banner(props) {
  return (
    <div className=" bg-indigo-400 py-8">
      <div className="flex flex-row justify-center gap-4 sm:gap-12 med:gap-24 lg:gap-24 py-8">
        <img className="max-h-12 sm:max-h-20 med:max-h-24 lg:max-h-24" src={js} alt="jslogo"></img>        
        <img className="max-h-12 sm:max-h-20 med:max-h-24 lg:max-h-24" src={ts} alt="tslogo"></img>
        <img className="max-h-12 sm:max-h-20 med:max-h-24 lg:max-h-24" src={html} alt="htmllogo"></img>
        <img className="max-h-12 sm:max-h-20 med:max-h-24 lg:max-h-24" src={css} alt="cssjavalogo"></img>
        <img className="max-h-12 sm:max-h-20 med:max-h-24 lg:max-h-24" src={react} alt="reactlogo"></img>
        <img className="max-h-12 sm:max-h-20 med:max-h-24 lg:max-h-24" src={node} alt="nodelogo"></img>
        <img className="max-h-12 sm:max-h-20 med:max-h-24 lg:max-h-24" src={java} alt="javalogo"></img>
        <img className="max-h-12 sm:max-h-20 med:max-h-24 lg:max-h-24" src={python} alt="pythonlogo"></img>
      </div>
      <h1 className="text-2xl">
        This page was built in React with Tailwind CSS
      </h1>
    </div>
  );
}
export default Banner;
