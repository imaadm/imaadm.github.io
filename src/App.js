import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Header />
      <div className="h-[90vh]">
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
