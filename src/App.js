import "./App.css";
import SideNav from "./components/SideNav";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import { useState} from "react";
function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <p>Imaad Mohammed</p>
        <div className="links">
          <a href="http://github.com/imaadm">Github</a>
          <a href="https://www.linkedin.com/in/imaad-mohammed-34a9261bb/">LinkedIn</a>
        </div>

        <hr className="line"></hr>
      </header>
      <div className="body">
        <div className="bodyMain">
          <AboutMe vis={show} />
          <Portfolio vis={show}/>
        </div>
        <SideNav vis={show} setVis={setShow} />
      </div>
    </div>
  );
}

export default App;
