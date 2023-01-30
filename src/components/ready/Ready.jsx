import React from "react";
import { Link } from "react-router-dom";

import "./Ready.css";

const Ready = () => {
  return (
    <div className="app_ready flex__center">
      <h1 className="ready-mainheader font_head">
        Are You Ready To Make It Happen?
      </h1>
      <Link className="ready-btn font_head color-white" to="/signup">
        Ready
      </Link>
    </div>
  );
};

export default Ready;
