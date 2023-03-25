import React from "react";

let proButton =
  "text-white bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-med px-5 py-2.5 text-center";
function Project(props) {
    function linkButton(link){
        if (link)
        return <a href={props.link} className={proButton}>
        View on Github
      </a>
    }
  return (
    <div>
    <div className="flex flex-col items-center">
      <h1 className=" text-4xl mb-8">{props.name}</h1>
      <div className="flex items-center w-[100%] lg:h-[50rem]">
        {props.images.map((img) => {
           if (props.id === 3)            
           return <img className={"first:ml-auto last:mr-auto w-28 h-auto sm:w-[20%] sm:h-full med:w-[20%] med:h-full lg:w-[20%] lg:h-full"} src={img} alt=""></img>;
           if (props.id=== 4)           
           return <img className={"first:ml-auto last:mr-auto w-56 h-auto sm:w-[40%] sm:h-full med:w-[40%] med:h-full lg:w-[40%] lg:h-full"} src={img} alt=""></img>;
           else 
           return <img className="first:ml-auto last:mr-auto w-[28rem] h-auto sm:w-[80%] sm:h-full med:w-[80%] med:h-full lg:w-[80%] lg:h-full" src={img} alt=""></img>;
})}
      </div>
      <p className="mt-8 mb-10 mx-4 text-2xl">{props.description}</p>
      </div>
    {linkButton(props.link)}
    </div>
  );
}
export default Project;
