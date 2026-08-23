import "./App.css";
import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import Contact from "./components/local/Contact";
import Experience from "./components/local/Experience";
import Hero from "./components/local/Hero";
import Projects from "./components/local/Projects";
import Skill from "./components/local/Skill";

function App() {
  return (
    <>
      <Header />
      <main className="container section-spacing">
        <Hero />
        <Experience />
        <Projects />
        <Skill />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
