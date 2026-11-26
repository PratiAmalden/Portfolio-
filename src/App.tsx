import About from "./components/About";
import Contact from "./components/Contact";
import Contents from "./components/Contents";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Interests from "./components/Interests";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="tone tone-dark">
          <Hero />
          <Contents />
        </div>

        <div className="tone tone-light">
          <About />
        </div>

        <div className="tone tone-dark">
          <Skills />
          <Projects />
        </div>

        <div className="tone tone-light">
          <Experience />
        </div>

        <div className="tone tone-dark">
          <Interests />
          <Contact />
        </div>

        <div className="tone tone-light">
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
