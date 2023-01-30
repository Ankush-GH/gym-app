import React from "react";
import { RxDotFilled } from "react-icons/rx";

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Ready from "../../components/ready/Ready";
import "./NewPriceAndPlans.css";

const NewPriceAndPlans = () => {
  return (
    <>
      <Navbar />
      <div className="app_priceplans color-white">
        <span className="priceplans-mainheader font_head">PRICE & PLANS</span>
        <div className="plans">
          <div className="basic">
            <h1 className="base-head font_head">Basic &nbsp; - &nbsp; 30$</h1>
            <h3 className="base-p font_base">
              INCLUDED:
              <br />
              <br />
              <RxDotFilled /> 2x group workouts of your choice
              <br />
              <RxDotFilled /> Unlimited gym access
              <br />
              <RxDotFilled /> Personal Workouts
            </h3>
          </div>
          <div className="unlimited">
            <h1 className="unlimited-head font_head">
              Unlimited &nbsp; - &nbsp; 50$
            </h1>
            <h3 className="unlimited-p font_base">
              INCLUDED:
              <br />
              <br />
              <RxDotFilled /> Unlimited group workouts of your choice
              <br />
              <RxDotFilled /> Unlimited gym access
              <br />
              <RxDotFilled /> 3x personal workouts
              <br />
              <RxDotFilled /> Personal nutrition plan
            </h3>
          </div>
        </div>
      </div>
      <Ready />
      <Footer />
    </>
  );
};

export default NewPriceAndPlans;
