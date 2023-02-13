import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import Brands from "./components/Brands";
import { Projects } from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Together from "./components/Together";
import { Last } from "react-bootstrap/esm/PageItem";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Together />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
