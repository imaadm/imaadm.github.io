import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
function App() {
  return (
    <div>
      <Header />
      <div className="text-center">
        <AboutMe />
        <Banner />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
