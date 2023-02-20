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
    <div>
      <div className="about">
        <img src={pic} alt="This is me!" width={"350rem"} />
        <p>
          Welcome to my website! I am a recent CS grad from Cal Poly Pomona.
          I've done development in several languages, including C++, Java,
          Python, and Javascript. I have some data mining experience with
          Python, and have done all sorts of object oriented Java and C++
          programming. I enjoy web development and have been doing full-stack
          and front-end web development.
          <br /> This website was made with React, using Tailwind CSS!
        </p>
      </div>
      {/* <div className="text-5xl text-center my-20">Skills</div> */}
      <div className="logos gap-28 mt-24">
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
