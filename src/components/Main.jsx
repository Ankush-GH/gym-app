import React from "react";

import Navbar from "../components/navbar/Navbar";
import HeroBanner from "../components/herobanner/HeroBanner";
import NewClasses from "../components/newclasses/NewClasses";
import Events from "../components/events/Events";
import Gym from "../components/gym/Gym";
import Ready from "../components/ready/Ready";
import Footer from "../components/footer/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <NewClasses />
      <Events />
      <Gym />
      <Ready />
      <Footer />
    </>
  );
};

export default Main;
