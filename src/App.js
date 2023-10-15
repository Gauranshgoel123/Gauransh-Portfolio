import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing.jsx";
import { useEffect, useState } from "react";
import LineGradient from "./components/LineGradient.jsx";
import MySkills from "./scenes/MySkills.jsx";
import Projects from "./scenes/Projects";
import Experience from "./scenes/Experience";
import Footer from "./scenes/Footer";
import useMediaQuery from "./hooks/useMediaQuery";
import Contact from "./scenes/Contact";

function App() {
  const [selectedPage,setSelectedPage]=useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <div className="app bg-deep-blue"> 
  <Navbar  
  isTopOfPage={isTopOfPage}
  selectedPage={selectedPage} 
  setSelectedPage={setSelectedPage}
   />
   <div className="w-5/6 mx-auto md:h-full">
    {isAboveMediumScreens && (
      <DotGroup  
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}

      />
    )}

    <Landing setSelectedPage={setSelectedPage} />
   </div>
   <LineGradient />

   <div className="w-5/6 mx-auto md:h-full">
    <MySkills />

   </div>
   <LineGradient />
   <div className="w-5/6 mx-auto ">
    <Projects />
    </div>

    <LineGradient />
   <div className="w-5/6 mx-auto md:h-full ">
    <Experience />
    </div>

    <LineGradient />
   <div className="w-5/6 mx-auto md:h-full ">
    <Contact />
    </div>

    
    <Footer />
    
    
  </div>
  );
}

export default App;
