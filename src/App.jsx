import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
// import About from "./components/About";
// import Experience from "./components/Experience";
// import Tech from "./components/Tech";
// import Works from "./components/Works";
// import Test from "./components/Test";
import { ThemeProvider } from "./components/themeContext";

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider>
      <Nav/>
      <Hero/>
    </ThemeProvider>
    </BrowserRouter>

  )
}

export default App;
