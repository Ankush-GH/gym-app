import React from "react";
import { Link } from "react-router-dom";

import Carousel from "../../ui/imgcarousel/Carousel";
import "./Gym.css";
import { CarouselData } from "../../ui/imgcarousel/CarouselData";

const Gym = () => {
  return (
    <div className="app_gym flex__center-column">
      <h1 className="gym-mainheader font_head">
        Browse Some Of Our Gym Images
      </h1>
      <Carousel slides={CarouselData} />
      <Link to="/aboutgym" className="gym-link font_head color-white">
        Check All Images
      </Link>
    </div>
  );
};

export default Gym;
