import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Ready from "../ready/Ready";

import "./Classes.css";

const Classes = () => {
  return (
    <>
      <Navbar />
      <div className="app_classes color-white">
        Classes
        </div>
      <Ready />
      <Footer />
    </>
  );
};

export default Classes;
