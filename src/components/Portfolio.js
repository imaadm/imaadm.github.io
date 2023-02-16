import React from "react";
import "./portfolio.css";
import mern from "./../assets/mern.png";
import spring from "./../assets/java.png";
import calpal from "./../assets/calpal.png";
import calpal2 from "./../assets/calpal2.png";
import calpal3 from "./../assets/calpal3.png";
import calpal4 from "./../assets/calpal4.png";

function Portfolio(props) {
  return (
    <div className="portfolio">
      <div className="taskManager">
        <h1>MERN Task Manager</h1>
        <img src={mern} alt="MERN Task Manager" width={"80%"}></img>
      </div>
      <div className="java">
        <h1>Java Spring Task Manager</h1>
        <img src={spring} alt="Spring Task Manager" width={"70%"}></img>
      </div>
      <div className="calpal">
        <h1>Cal Pal</h1>
        <img src={calpal} alt="Calorie Tracker App" width={"25%"}></img>
        <img src={calpal2} alt="Calorie Tracker App" width={"25%"}></img>
        <img src={calpal3} alt="Calorie Tracker App" width={"25%"}></img>
        <img src={calpal4} alt="Calorie Tracker App" width={"25%"}></img>
      </div>
    </div>
  );
}
export default Portfolio;
