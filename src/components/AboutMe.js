import React from "react";
import "./aboutme.css";
import pic from "./../assets/profilepic.jpeg";
import pic2 from "./../assets/landscape.jpg";
import java from "./../assets/javalogo.png";
import js from "./../assets/js.png";
import node from "./../assets/node.png";
import react from "./../assets/react.png";
import python from "./../assets/python.png";
import html from "./../assets/html.png";
import css from "./../assets/css.png";
function AboutMe(props) {
  return (
    <div className="text-center bg-gradient-to-r h-full from-cyan-500 to-blue-800">
      <div className="px-64 py-64">
        <div className="mx-64">
          <h1 className="text-5xl mb-12">
            I'm Imaad, an aspiring full stack developer
          </h1>
          <p className="text-2xl">
            I've done development in several languages, including C++, Java,
            Python, and Javascript. I have some data mining experience with
            Python, and have done all sorts of object oriented Java and C++
            programming. I enjoy web development and have been doing full-stack
            and front-end web development.
            <br /> <br /> This website was built using React and Tailwind CSS.
          </p>
        </div>
      </div>
      <div className="logos flex flex-row justify-center  gap-28 ">
        <img src={js} alt="jslogo"></img>
        <img src={html} alt="htmllogo"></img>
        <img src={css} alt="cssjavalogo"></img>
        <img src={react} alt="reactlogo"></img>
        <img src={node} alt="nodelogo"></img>
        <img src={java} alt="javalogo"></img>
        <img src={python} alt="pythonlogo"></img>
      </div>
    </div>
  );
}

export default AboutMe;
