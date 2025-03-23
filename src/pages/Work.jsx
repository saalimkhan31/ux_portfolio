import React from "react";
import { Link } from "react-router-dom";

import HomePage from "../components/HomePage";
import Footer from "../components/Footer";
import ProjectCards from "../components/ProjectCards";

const Work = () => {
  return (
    <>
      <HomePage />
      <ProjectCards />
      <Footer />
    </>
  );
};

export default Work;
