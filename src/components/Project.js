import React from "react";

let proButton =
  "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-4 h-18 w-30";
function Project(props) {

  return (
    <div className="flex flex-col items-center">
      <h1 className=" text-5xl mb-8">{props.name}</h1>
      <div className="flex items-center h-128">
        {props.images.map((img) => {
           if (props.id === 3)            
           return <img className={"first:ml-auto last:mr-auto w-[20%] "} src={img} alt=""></img>;
           if (props.id=== 4)           
           return <img className={"first:ml-auto last:mr-auto w-[40%] "} src={img} alt=""></img>;
           else 
           return <img className="first:ml-auto last:mr-auto w-[80%] " src={img} alt=""></img>;
})}
      </div>
      <p className="my-8 text-3xl">{props.description}</p>
      <a href={props.link} className={proButton}>
        View on Github
      </a>
    </div>
  );
}
export default Project;
