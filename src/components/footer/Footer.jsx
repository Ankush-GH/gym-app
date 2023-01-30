import React from "react";
import { SocialIcon } from "react-social-icons";
import { CgGym } from "react-icons/cg";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="app__footer">
      <h1 className="footer-mainheader font_head">
        The Gym <CgGym />{" "}
      </h1>

      <div className="row">
        <div className="timings">
          <h3 className="timings-header font_head">WORKING HOURS</h3>
          <h5 className="timings-p font_base">
            Monday - Friday 5:00 AM-12:00 AM{" "}
          </h5>
          <h5 className="timings-p font_base">
            Saturday - Sunday 8:00 AM-10:00 AM{" "}
          </h5>
        </div>
        <div className="address">
          <h3 className="address-header font_head">ADDRESS</h3>

          <h5 className="address-p font_base">
            PRABHADEVI INDUSTRIAL ESTATE, Unit no. 115 , First Floor,
            Prabhadevi, Mumbai, Maharashtra 400025
          </h5>
        </div>
        <div className="social">
          <SocialIcon
            className="social-icons"
            url="https://instagram.com/jaketrent"
          />
          <SocialIcon
            className="social-icons"
            url="https://facebook.com/jaketrent"
          />
          <SocialIcon
            className="social-icons"
            url="https://whatsapp.com/jaketrent"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
