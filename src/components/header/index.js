import React from "react";
import Fade from "react-reveal/Fade";

// Components
import TitleBar from "./TitleBar";

const Header = () => (
  <div className="header">
    <div className="right">
      <Fade left duration={2000}>
        {" "}
        <span>elbeqqal</span>
      </Fade>
    </div>

    <div className="left">
      <Fade left>
        <TitleBar title={'About'} />
      </Fade>
    </div>
  </div>
);

export default Header;
