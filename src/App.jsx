import { useState } from "react";
import { NavbarElement } from "./NavbarElement";
import { Hero } from "./Hero";
import { SoftSkills } from "./SoftSkills";
import { HardSkills } from "./HardSkills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

HardSkills;
import("preline");

function App() {
  return (
    <>
      <NavbarElement />
      <Hero />
      <SoftSkills />
      <HardSkills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
