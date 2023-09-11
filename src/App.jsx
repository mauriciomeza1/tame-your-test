import { Hero } from "./components/Hero/Hero";
import { Banner } from "./components/Banner/Banner";
import { ProgramInfo } from "./components/ProgramInfo/ProgramInfo";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Footer } from "./components/Footer/Footer";
import { BackToTopButton } from "./components/BackToTopButton/BackToTopButton";
import "./App.css";

function App() {
  return (
    <>
      <BackToTopButton />
      <Hero />
      <Banner />
      <ProgramInfo />
      <Testimonials />
      <AboutMe />
      <Footer />
    </>
  );
}

export default App;
