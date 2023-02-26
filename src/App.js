import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header />
      <div className="text-center bg-gradient-to-b  from-cyan-500 to-blue-800">
        <AboutMe />
        <Footer />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
