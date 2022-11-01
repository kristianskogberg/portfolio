import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/pages/Skills";
import Work from "./components/pages/Work";

function App() {
  return (
    <div className="bg-[black]">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
