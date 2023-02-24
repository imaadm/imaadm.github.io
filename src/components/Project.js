import React from "react";
import mern from "./../assets/mern.png";
import spring from "./../assets/java.png";
import calpal from "./../assets/calpal.png";
import calpal2 from "./../assets/calpal2.png";
import calpal3 from "./../assets/calpal3.png";
import calpal4 from "./../assets/calpal4.png";
import order1 from "./../assets/menuOrdering1.png";
import order2 from "./../assets/menuOrdering2.png";
let portButton =
  "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 h-18 w-30";

function Project(props) {

  return (
    <div className="flex flex-col items-center w-[80%]">
      <h1>{props.name}</h1>
      <div className="flex items-center">
        {props.images.map((img) => (
          <img className="first:ml-auto last:mr-auto w-[20%]" src={img} alt="placeholder"></img>
        ))}
      </div>
      <p className="mb-8">{props.description}</p>
      <a href={props.link} className={portButton}>
        View on Github
      </a>
    </div>
  );
}
export default Project;
