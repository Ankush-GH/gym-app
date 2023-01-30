import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Ready from "../../components/ready/Ready";
import img1 from "../../assets/gymImage1.jpg";
import img2 from "../../assets/gymImages2.jpeg";
import img3 from "../../assets/gymImages3.webp";
import img4 from "../../assets/gymImages4.jpg";
import img5 from "../../assets/gymImages5.jpg";
import img6 from "../../assets/gymImages6.jpg";
import "./AboutGym.css";

const AboutGym = () => {
  return (
    <>
      <Navbar />
      <div className="app_aboutgym color-white">
        <div className="aboutgym-mainheader font_head">About Us</div>
        <h4 className="aboutgym-p flex__center font_base">
          We’re not here to carry you to fitness, we’re here to motivate you to
          carry yourself to your goals.
          <br />
          If you’re not sure what your goals are, or don’t know where to start
          on your fitness journey, come in and speak to one of our qualified
          trainers who can help you develop a plan.
        </h4>
        <img className="aboutgym-img" src={img1} alt="gym" />
        <img className="aboutgym-img" src={img2} alt="gym" />
        <img className="aboutgym-img" src={img3} alt="gym" />
        <img className="aboutgym-img" src={img4} alt="gym" />
        <img className="aboutgym-img" src={img5} alt="gym" />
        <img className="aboutgym-img" src={img6} alt="gym" />
      </div>
      <Ready />
      <Footer />
    </>
  );
};

export default AboutGym;
