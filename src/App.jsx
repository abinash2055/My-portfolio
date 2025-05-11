import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Education from "./Components/Education/Education";
import WorkExperience from "./Components/WorkExperience/WorkExperience";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Education />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
