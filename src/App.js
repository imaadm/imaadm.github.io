import "./App.css";
import SideNav from "./components/SideNav";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Imaad Mohammed</p>
        <a href="http://github.com/imaadm">Github</a>
        <hr className="line"></hr>
      </header>
      <div className="body">
        <div className="bodyText">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <SideNav />
      </div>
    </div>
  );
}

export default App;
