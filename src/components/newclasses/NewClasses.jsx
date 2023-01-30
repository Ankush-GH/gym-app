import React from "react";

import "./NewClasses.css";
import yoga from "../../assets/yoga.jpg";
import lifting from "../../assets/lifting.jpg";
import cardio from "../../assets/cardio.png";
import calisthenics from "../../assets/calisthenics.jpg";
import boxing from "../../assets/boxing.webp";
import bodybuilding from "../../assets/bodybuilding.jpg";
import { Link } from "react-router-dom";

const NewClasses = () => {
  return (
    <div id="classes" className="app__classes color-white">
      <div className="classes-mainheader font_head">
        <span>CLASSES</span>
      </div>
      <div className="classes">
        <div className="class-container flex__center">
          <img className="classes-img" src={bodybuilding} alt="body builder" />
          <h2 className="class-links color-white font_head" to="/bodybuilding">
            BODYBUILDING
          </h2>
        </div>

        <div className="class-container flex__center">
          <img className="classes-img" src={boxing} alt="body builder" />
          <h2 className="class-links color-white font_head" to="/boxing">
            BOXING
          </h2>
        </div>

        <div className="class-container flex__center">
          <img className="classes-img" src={calisthenics} alt="body builder" />
          <h2 className="class-links color-white font_head" to="/calisthenics">
            CALISTHENICS
          </h2>
        </div>

        <div className="class-container flex__center">
          <img className="classes-img" src={cardio} alt="body builder" />
          <h2 className="class-links color-white font_head" to="/cardio">
            CARDIO
          </h2>
        </div>

        <div className="class-container flex__center">
          <img className="classes-img" src={lifting} alt="body builder" />
          <h2 className="class-links color-white font_head" tp="/lifting">
            LIFTING
          </h2>
        </div>

        <div className="class-container flex__center">
          <img className="classes-img" src={yoga} alt="body builder" />
          <h2 className="class-links color-white font_head" to="/yoga">
            YOGA
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NewClasses;
