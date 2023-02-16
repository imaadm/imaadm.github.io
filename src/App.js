import "./App.css";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
