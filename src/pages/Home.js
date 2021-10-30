import React from "react";
import NavMenu from "../components/NavMenu/NavMenu";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutUs from "../components/AboutUs/AboutUs";
import Choose from "../components/Choose/Choose";
import Quiz from "../components/Quiz/Quiz";
function Home() {
  return (
    <div>
      <NavMenu />
      <HeroSection />
      <Choose />
      <AboutUs />
      <Quiz />
    </div>
  );
}

export default Home;
