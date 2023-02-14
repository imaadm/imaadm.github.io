import React from "react";
import "./sidenav.css";
function SideNav(props) {
    function showMe(){
        props.setVisMe(true); props.setVisPort(false); console.log(props)
    }
    function showPort(){
        props.setVisPort(true); props.setVisMe(false); console.log(props)
    }
  return (
    <div className="sidenav">
      <p onClick={showMe}>About Me</p>
      <p onClick={showPort}>Portfolio</p>
      <p onClick={()=>{}}>Links</p>
    </div>
  );
}

export default SideNav;
