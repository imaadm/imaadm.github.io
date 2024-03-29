import React from "react";
import mern from "./../assets/mern.png";
import spring from "./../assets/java.png";
import calpal from "./../assets/calpal.png";
import calpal2 from "./../assets/calpal2.png";
import calpal3 from "./../assets/calpal3.png";
import calpal4 from "./../assets/calpal4.png";
import order1 from "./../assets/menuOrdering1.png";
import order2 from "./../assets/menuOrdering2.png";
import Project from "./Project";
import { useState } from "react";
let portButton =
  "text-white bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-med text-center mx-8 h-12 w-20";

let projects = [
  {
    name: "Planner - Summer 2022",
    description:
      "Built with the MERN stack and the MUI library.\nUses React router for paging between login, register, and home",
    link: "https://github.com/imaadm/Senior-Project",
    images: [mern],
    id: 1,
  },
  {
    name: "Java Spring Task Manager - Spring 2022",
    description:
      "Built with Java Spring and MongoDB, using Vaadin for the frontend, hosted on AWS using EC2",
    link: "https://github.com/Bronco-Coders/task-manager",
    images: [spring],
    id: 2,
  },
  {
    name: "Cal Pal - Fall 2021",
    description:
      "Flutter application using Firebase built with Gradle. Uses official formulas and estimations to provide helpful calculations for BMI, BMR, and calories burned",
    link: "https://github.com/imaadm/health_fitness_app",
    images: [calpal, calpal2, calpal3, calpal4],
    id: 3,
  },
  {
    name: "Order Helper - Fall 2021",
    description: "Kotlin application built with Gradle. Emulates an application for a server to handle orders at tables",
    images: [order1, order2],
    id: 4,
  },
];
function Portfolio(props) {
  const [currentProject, setCurrentProject] = useState(0);
  const back = () => {
    if (currentProject === 0) setCurrentProject(3);
    if (currentProject > 0)
      setCurrentProject((currentProject) => currentProject - 1);
    console.log(currentProject);
  };
  const next = () => {
    if (currentProject === 3) setCurrentProject(0);

    if (currentProject < 3)
      setCurrentProject((currentProject) => currentProject + 1);
    console.log(projects[currentProject]);
  };

  return (
    <div className="bg-[#33314C] max-w-[100%]">
      <h1 className="text-5xl py-16 font-semibold">What I've Worked On</h1>
      <Project {...projects[currentProject]} />
      <div className="pt-8 pb-16">
        <button className={portButton} onClick={back}>
          Back
        </button>
        <button className={portButton} onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}
export default Portfolio;
