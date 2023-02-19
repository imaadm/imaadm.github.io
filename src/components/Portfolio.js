import React from "react";
import "./portfolio.css";
import mern from "./../assets/mern.png";
import spring from "./../assets/java.png";
import calpal from "./../assets/calpal.png";
import calpal2 from "./../assets/calpal2.png";
import calpal3 from "./../assets/calpal3.png";
import calpal4 from "./../assets/calpal4.png";
import order1 from "./../assets/menuOrdering1.png"
import order2 from "./../assets/menuOrdering2.png"

function Portfolio(props) {
  return (
    <div className="portfolio">
      <div className="taskManager">
        <h1>Planner - Summer 2022</h1>
        <img src={mern} alt="MERN Task Manager" width={"60%"}></img>
        <p>Built with the MERN stack - MongoDB, Express, React, NodeJS, and MUI</p>
      </div>
      <div className="java">
        <h1>Java Spring Task Manager - Spring 2022</h1>
        <img src={spring} alt="Spring Task Manager" width={"60%"}></img>{" "}
        <p>Built with Java Spring using Vaadin</p>
      </div>
      <div className="calpal">
        <h1>Cal Pal - Fall 2021</h1>
        <img src={calpal} alt="Calorie Tracker App" width={"20%"}></img>
        <img src={calpal2} alt="Calorie Tracker App" width={"20%"}></img>
        <img src={calpal3} alt="Calorie Tracker App" width={"20%"}></img>
        <img src={calpal4} alt="Calorie Tracker App" width={"20%"}></img>{" "}
        <p>Flutter application using Firebase built with Gradle</p>
      </div>
      <div className="menu">
        <h1>Order Helper - Fall 2021</h1>
        <img src={order1} alt="Restaurant Ordering App" width={"40%"}></img>
        <img src={order2} alt="Restaurant Ordering App" width={"40%"}></img>
        <p>Kotlin application built with Gradle</p>
      </div>
    </div>
  );
}
export default Portfolio;
