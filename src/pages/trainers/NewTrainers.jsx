import React from "react";

import "./NewTrainers.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Ready from "../../components/ready/Ready";
import trainer1 from "../../assets/trainer1.jpg";
import trainer2 from "../../assets/trainer2.jpeg";
import trainer3 from "../../assets/trainer3.jpg";

const NewTrainers = () => {
  return (
    <>
      <Navbar />
      <div className="app_trainers color-white">
        <span className="trainers-mainheader font_head">Personal Trainers</span>
        <div className="trainers">
          <div className="trainer1 margin-t_b flex__center">
            <div className="p-container">
              <h1 className="trainer-header font_head">Mathew Heron</h1>
              <h4 className="trainer-p font_base">
                Mathew is the expert to talk to if your fitness goal is to lose
                weight or tone up. Working clients through high-intensity
                workouts and tailored fitness plans, Mat doesn’t take no for an
                answer when it comes to your goals.
                <br />
                <br />
                With a background in sports psychology and physical therapy,
                Matt understands how the mind and body need to work together for
                you to achieve success.
              </h4>
            </div>
            <img className="trainer-img" src={trainer1} alt="trainers" />
          </div>
          <div className="trainer2 margin-t_b flex__center">
            <img className="trainer-img" src={trainer2} alt="trainers" />
            <div className="p-container">
              <h1 className="trainer-header font_head">John Heeron</h1>
              <h4 className="trainer-p font_base">
                Whether you’re new to boxing or a seasoned fighter, John can
                teach you a thing or two about keeping fit for the ring and
                understanding your opponent.
                <br />
                <br />
                While he comes from the world of professional boxing, John takes
                a holistic approach to fitness, and is just as likely to throw
                you into a yoga class as he is to throw you around the boxing
                ring.
              </h4>
            </div>
          </div>
          <div className="trainer3 margin-t_b flex__center">
            <div className="p-container">
              <h1 className="trainer-header font_head">Inna Gebrow</h1>
              <h4 className="trainer-p font_base">
                Are you looking to improve your and joint strength? Then you
                should get in touch within Inna for a consultation.
                <br />
                <br />A highly trained instructor for both yoga and pilates,
                Inna can help you better understand your own body, and will help
                guide you towards your goals in a way that works with your body
                instead of against it.
              </h4>
            </div>
            <img className="trainer-img" src={trainer3} alt="trainers" />
          </div>
        </div>
      </div>
      <Ready />
      <Footer />
    </>
  );
};

export default NewTrainers;
