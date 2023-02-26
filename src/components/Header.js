import React from "react";
import "./header.css";
function Header() {
  return (
    <header className="App-header bg-sky-900">
      <div>Imaad Mohammed</div>
      <div className="links">
        <a href="http://github.com/imaadm">Github</a>
        <a href="https://www.linkedin.com/in/imaad-mohammed-34a9261bb/">
          LinkedIn
        </a>
        <a>Contact Me</a>
      </div>
    </header>
  );
}
export default Header;
