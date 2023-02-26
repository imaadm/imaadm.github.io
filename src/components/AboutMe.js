import React from "react";
import "./aboutme.css";
function AboutMe(props) {
  return (
    <div className="px-64 py-32">
      <div className="mx-64">
        <h1 className="text-5xl mb-12">
          I'm Imaad, an aspiring full stack developer
        </h1>
        <p className="text-3xl">
          Hello! I'm a recent computer science graduate from Cal Poly Pomona.
          I've done development in several languages, including C++, Java,
          Python, and Javascript. I have some data mining experience with
          Python, and have done all sorts of object oriented Java and C++
          programming. I enjoy web development and have been doing full-stack
          and front-end web development.
          <br /> <br /> Scroll down to see some of my projects!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
