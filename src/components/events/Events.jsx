import React from "react";
import { Link } from "react-router-dom";

import Img from "../../assets/events.jpg";
import "./Events.css";

const Events = () => {
  return (
    <div className="app_events flex__center">
      <img className="events-img" src={Img} alt="events" />
      <span className="events-span flex__center-column">
        <h1 className="events-mainheader font_head">Events</h1>
        <h3 className="events-p font_base">
          We host dozens of events, from deadlifting and HIIT to yoga and
          pilates. We also have different classes for varying levels of ability.
          Check out our individual class pages to see what’s on when, and stop
          on by for a chat if you want to see how we do things.
        </h3>
        <Link
          className="events-button font_head color-black flex__center"
          to="/schedule"
        >
          Schedule
        </Link>
      </span>
    </div>
  );
};

export default Events;
