import React from "react";
import { useNavigate } from "react-router";
import "./header.css";
function Header() {
  let navigate = useNavigate();
  return (
    <header className="App-header ">
      <div >Imaad Mohammed</div>
      <div className="links">
        <button onClick={() => navigate("/")}>About Me</button>
        <button onClick={() => navigate("/portfolio")}>Portfolio</button>
        <a href="http://github.com/imaadm">Github</a>
        <a href="https://www.linkedin.com/in/imaad-mohammed-34a9261bb/">
          LinkedIn
        </a>
      </div>
    </header>
  );
}
export default Header;
