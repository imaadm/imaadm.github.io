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

function Portfolio(props) {
  return (
    <div className="portfolio text-center justify-center items-center mb-10">
      <div className="taskManager">
        <h1>Planner - Summer 2022</h1>
        <img
          className="mx-auto my-4"
          src={mern}
          alt="MERN Task Manager"
          width={"45%"}
        ></img>
        <p>
          Built with the MERN stack and the MUI library
          <br />
          Used React router for paging between login, register, and home page
          <br />
        </p>
        <a
          href="https://github.com/imaadm/Senior-Project"
          className=" px-3 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg mt-8 inline-block "
        >
          View on Github
        </a>
      </div>
      <hr className="my-8" />
      <div className="java">
        <h1>Java Spring Task Manager - Spring 2022</h1>
        <img
          className="mx-auto my-4"
          src={spring}
          alt="Spring Task Manager"
          width={"45%"}
        ></img>
        <p>Built with Java Spring and MongoDB, using Vaadin for the frontend, hosted on AWS using EC2</p>
        <a
          href="https://github.com/Bronco-Coders/task-manager"
          className=" px-3 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg mt-8  inline-block "
        >
          View on Github
        </a>
      </div>{" "}
      <hr className="my-8" />
      <div className="calpal">
        <h1>Cal Pal - Fall 2021</h1>
        <div className="flex flex-row ">
          <img
            className="ml-auto my-4"
            src={calpal}
            alt="Calorie Tracker App"
            width={"12%"}
          ></img>
          <img
            className="my-4"
            src={calpal2}
            alt="Calorie Tracker App"
            width={"12%"}
          ></img>
          <img
            className="my-4"
            src={calpal3}
            alt="Calorie Tracker App"
            width={"12%"}
          ></img>
          <img
            className="mr-auto my-4"
            src={calpal4}
            alt="Calorie Tracker App"
            width={"12%"}
          ></img>
        </div>
        <p>
          Flutter application using Firebase built with Gradle
          <br /> Uses official formulas and estimations to provide helpful
          calculations for BMI, BMR, and calories burned
        </p>
        <a
          href="https://github.com/imaadm/health_fitness_app"
          className=" px-3 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg mt-8 inline-block "
        >
          View on Github
        </a>
      </div>{" "}
      <hr className="my-8" />
      <div className="menu">
        <h1>Order Helper - Fall 2021</h1>
        <div className="flex flex-row">
          <img
            className="ml-auto my-4"
            src={order1}
            alt="Restaurant Ordering App"
            width={"30%"}
          ></img>
          <img
            className="mr-auto my-4"
            src={order2}
            alt="Restaurant Ordering App"
            width={"30%"}
          ></img>
        </div>
        <p>Kotlin application built with Gradle</p>
      </div>
    </div>
  );
}
export default Portfolio;
