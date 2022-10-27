import React from "react";

const AboutImage = (props) => {
  return (
    <img
      className="about__image text-center h-100"
      src={props.img}
      alt={props.alt}
    ></img>
  );
};

export default AboutImage;
