import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

import { ThemeProvider } from "./components/themeContext";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider>
      <Nav/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </ThemeProvider>
    </BrowserRouter>

  )
}

export default App;
