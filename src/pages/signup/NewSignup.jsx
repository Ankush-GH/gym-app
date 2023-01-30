import React from "react";

import Form from "../../ui/singupForm/Form";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Ready from "../../components/ready/Ready";
import "./NewSignup.css";

const NewSignup = () => {
  return (
    <>
      <Navbar />
      <div className="app_signup color-white">
        <Form />
      </div>
      <Ready />
      <Footer />
    </>
  );
};

export default NewSignup;
