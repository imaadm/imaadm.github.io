import React from "react";
import "./skills.css";

function Skills(props) {
  return (
    <div className="skills bg-indigo-400 px-64">
      <h1 className="text-6xl font-semibold py-12">Skills</h1>
      <div className="list text-3xl">
        <div>HTML/CSS/JS: 2+ years</div>
        <div>React: 1+ years</div> 
        <div>NodeJs: 1+ years</div>
        <div>Java: 4+ years</div>
        <div>C++: 2+ years</div>
        <div>Python: 2+ years</div>
      </div>
      {/* <h1 className="text-4xl py-16">Always looking to evolve and expand my skillset! Currently learning about agile methodologies, containerization, and more!</h1> */}
    </div>
  );
}

export default Skills;
