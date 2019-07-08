import React from "react";
import HTML5 from "../../images/html5.ico";
import CSS3 from "../../images/css3.png";
import JS from "../../images/js.jpg";
import REACT from "../../images/react.png";
import VUE from "../../images/vue.png";
import NODEJS from "../../images/nodejs.png";
import EXPRESS from "../../images/express.png";

import Flash from "react-reveal/Flash";

const Skills = () => (
  <div className="skills">
    <Flash duration={1000}>
      <span>
        <img src={HTML5} alt="html5" />
      </span>
    </Flash>

    <Flash duration={2000}>
      <span>
        <img src={CSS3} alt="css3" />
      </span>
    </Flash>

    <Flash duration={3000}>
      <span>
        <img src={JS} alt="js" />
      </span>
    </Flash>

    <Flash duration={3000}>
      <span>
        <img src={REACT} alt="react" />
      </span>
    </Flash>

    <Flash duration={3000}>
      <span>
        <img src={VUE} alt="vue" />
      </span>
    </Flash>
    <Flash duration={3000}>
      <span>
        <img src={NODEJS} alt="nodejs" />
      </span>
    </Flash>
    <Flash duration={3000}>
      <span>
        <img src={EXPRESS} alt="expressjs" />
      </span>
    </Flash>

  </div>
);

export default Skills;
