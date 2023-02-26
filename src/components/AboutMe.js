import React from "react";
import "./aboutme.css";

let portButton =
  "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg text-center mx-8 h-14 w-24";
function AboutMe(props) {
  return (
    <div className="pt-32 pb-[16%]">
      <div className="ml-80 w-[50%]">
        <h1 className="text-8xl mb-12 text-left">Hello! I'm Imaad, a frontend developer</h1>
        <p className="text-left text-5xl">Welcome to my website! I'm a recent CS grad from Cal Poly Pomona who enjoys web development and working on new projects.
        <br/><br/>Scroll down to see some of my work!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
