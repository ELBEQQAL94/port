import React from "react";
import Bounce from "react-reveal/Bounce";

const About = () => (
  <div className="about">
    <Bounce right duration={2000}>
      <div className="about_right" />
    </Bounce>
    <div className="about_left">
      <h2>EL BEQQAL YOUSSEF</h2>
      <h4>Front End Developper</h4>
      <div className="content">
        <div>
          Hi There, I'm front end developper from Morocco. I'm front end dev
          over than 2 years.
          <p>See my projects and skills below</p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
