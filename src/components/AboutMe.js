import React from "react";
import "./aboutme.css";
import pic from "./../assets/profilepic.jpeg"

function AboutMe(props) {
  return (
    <div className="about" >
      <img src={pic} alt="This is me!" width={"400px"} style={{maxWidth:"500%", height: "auto"}} />
      <p>
        Welcome to my website! I am a recent CS grad from Cal Poly Pomona. 
        I've done development in several languages, including C++, Java, Python, and Javascript.
        I have some data mining experience with Python, and have done all sorts of object oriented Java and C++ programming. 
        I enjoy web development and have been doing full-stack and front-end web development.
        <br/> This website was made with React!
      </p>
    </div>
  );
}

export default AboutMe;
