import "./App.css";
import NavBar from "./components/NavBar";
import Aboutme from "./pages/Aboutme";
import Education from "./pages/Education";
import Footer from "./pages/Footer";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <div data-theme="">
      <NavBar />
      <div className="w-11/12 mx-auto">
        <Aboutme />
        <br />
        <Skills />
        <br />
        <Projects />
        <br />
        <Education />
      </div>
      <Footer />
    </div>
  );
}

export default App;
