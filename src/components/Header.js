import React from "react";
import { useNavigate } from "react-router";
import "./header.css"
function Header(){
    let navigate = useNavigate()
    return(
        <header className="App-header">
        <p onClick={()=> navigate("/")}>Imaad Mohammed</p>
        <div className="links">
          <button onClick={() => navigate("/about")}>About Me</button>
          <button onClick={() => navigate("/portfolio")}>Portfolio</button>
          <button onClick={() => navigate("/contact")}>Contact Info</button>
        </div>
        <hr className="line"></hr>
      </header>
    );
}
export default Header;