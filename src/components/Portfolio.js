import React from "react";
import "./portfolio.css";
import mern from "./../assets/mern.png";
import spring from "./../assets/java.png";
import calpal from "./../assets/calpal.png";
import calpal2 from "./../assets/calpal2.png";
import calpal3 from "./../assets/calpal3.png";
import calpal4 from "./../assets/calpal4.png";
import order1 from "./../assets/menuOrdering1.png";
import order2 from "./../assets/menuOrdering2.png";
import Button from "./Button";
import Project from "./Project";
import { useEffect, useState } from "react";
let portButton =
  "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 h-14 w-24";

let projects = [
  {
    name: "Planner - Summer 2022",
    description:
      "Built with the MERN stack and the MUI library\nUses React router for paging between login, register, and home",
    link: "https://github.com/imaadm/Senior-Project",
    images: [mern],
  },
  {
    name: "Java Spring Task Manager - Spring 2022",
    description:
      "Built with Java Spring and MongoDB, using Vaadin for the frontend, hosted on AWS using EC2",
    link: "https://github.com/Bronco-Coders/task-manager",
    images: [spring],
  },
  {
    name: "Cal Pal - Fall 2021",
    description:
      "Flutter application using Firebase built with Gradle\nUses official formulas and estimations to provide helpful calculations for BMI, BMR, and calories burned",
    link: "https://github.com/imaadm/health_fitness_app",
    images: [calpal, calpal2, calpal3, calpal4],
  },
  {
    name: "Order Helper - Fall 2021",
    description: "Kotlin application built with Gradle",
    images: [order1, order2],
  },
];
function Portfolio(props) {
  const [currentProject, setCurrentProject] = useState(0);
  const back = () => {
    if (currentProject > 0)
      setCurrentProject((currentProject) => currentProject - 1);
    console.log(currentProject);
  };
  const next = () => {
    if (currentProject < 3)
      setCurrentProject((currentProject) => currentProject + 1);
    console.log(projects[currentProject]);
  };

  return (
    <div className="portfolio text-center justify-evenly items-center mb-10 flex mx-96">
      <button className={portButton} onClick={back}>
        Back
      </button>
      <Project {...projects[currentProject]} />
      <button className={portButton} onClick={next}>
        Next
      </button>
    </div>
  );
}
export default Portfolio;
