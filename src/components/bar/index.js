import React from "react";
import Fade from "react-reveal/Fade";

// Components
import TitleBar from "../header/TitleBar";

const Bar = ({ title }) => (
  <div className="header" style={{ marginTop: 15 }}>
    <div className="right" />
    <div className="left">
      <Fade left>
        <TitleBar title={title} />
      </Fade>
    </div>
  </div>
);

export default Bar;
