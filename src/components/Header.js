import React from "react";
import { useNavigate } from "react-router";
import "./header.css"
function Header(){
    let navigate = useNavigate()
    return(
        <header className="App-header">
        <p onClick={()=> navigate("/")}>Imaad Mohammed</p>
        <div className="links">
          <div onClick={() => navigate("/about")}>About Me</div>
          <div onClick={() => navigate("/portfolio")}>Portfolio</div>
          <div onClick={() => navigate("/contact")}>Contact Info</div>
        </div>
        <hr className="line"></hr>
      </header>
    );
}
export default Header;