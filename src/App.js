import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Headers from "./Components/Headers/Headers";
import Home from "./Components/Home/Home";
import SocialLinks from "./Components/SocialLinks/SocialLinks";

function App() {
  return (
    <div className="App">
       <Headers></Headers>
       <Home></Home>
       <About></About>
       <Experience></Experience>
       <Contact></Contact>
       <SocialLinks></SocialLinks>
    </div>
  );
}

export default App;
