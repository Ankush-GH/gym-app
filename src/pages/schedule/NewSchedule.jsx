import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Ready from "../../components/ready/Ready";

import "./NewSchedule.css";

const NewSchedule = () => {
  return (
    <>
      <Navbar />
      <div className="app_schedule color-white">
        <div className="schedule-mainheader font_head">SCHEDULE</div>
        <div className="schedules">
          <div className="timings">
            <h1 className="timings-day font_head">Monday</h1>
            <h3 className="font_base mtop-3">8:00 - 8:50</h3>
            <h3 className="font_base">Air Yoga</h3>
            <h3 className="font_base mtop-3">2:00 - 2:45</h3>
            <h3 className="font_base">Body building</h3>
          </div>
          <div className="timings">
            <h1 className="timings-day font_head">Tuesday</h1>
            <h3 className="font_base mtop-3">4:30 - 5:30</h3>
            <h3 className="font_base">Air Yoga</h3>
            <h3 className="font_base mtop-3">5:30 - 6:30</h3>
            <h3 className="font_base">Body building</h3>
          </div>
          <div className="timings">
            <h1 className="timings-day font_head">Wednesday</h1>
            <h3 className="font_base mtop-3">8:00 - 8:50</h3>
            <h3 className="font_base">Air Yoga</h3>
            <h3 className="font_base mtop-3">2:00 - 2:45</h3>
            <h3 className="font_base">Body building</h3>
          </div>
          <div className="timings">
            <h1 className="timings-day font_head">Thursday</h1>
            <h3 className="font_base mtop-3">4:30 - 5:30</h3>
            <h3 className="font_base">Air Yoga</h3>
            <h3 className="font_base mtop-3">5:30 - 6:30</h3>
            <h3 className="font_base">Body building</h3>
          </div>
          <div className="timings">
            <h1 className="timings-day font_head">Friday</h1>
            <h3 className="font_base mtop-3">4:30 - 5:30</h3>
            <h3 className="font_base">Air Yoga</h3>
            <h3 className="font_base mtop-3">5:30 - 6:30</h3>
            <h3 className="font_base">Body building</h3>
          </div>
          <div className="timings">
            <h1 className="timings-day font_head">Saturday</h1>
            <h3 className="font_base mtop-3">4:30 - 5:30</h3>
            <h3 className="font_base">Air Yoga</h3>
            <h3 className="font_base mtop-3">5:30 - 6:30</h3>
            <h3 className="font_base">Body building</h3>
          </div>
          <div className="timings">
            <h1 className="timings-day font_head">Sunday</h1>
            <h3 className="font_base mtop-3">4:30 - 5:30</h3>
            <h3 className="font_base">Air Yoga</h3>
            <h3 className="font_base mtop-3">5:30 - 6:30</h3>
            <h3 className="font_base">Body building</h3>
          </div>
        </div>
      </div>
      <Ready />
      <Footer />
    </>
  );
};

export default NewSchedule;
