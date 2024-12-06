import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import BallCanvas from "./components/BallCanvas";

function App() {
  return (
    <div className="bg-[#272026c8] text-white min-h-screen">
    <Nav/>
    <Hero/>
    <About/>
    <Experience/>
    <BallCanvas/>
    </div>  
  )
}

export default App;
