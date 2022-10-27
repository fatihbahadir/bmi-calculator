import React, { useEffect, useState } from "react";
import aboutImage from "../assets/images/main-image.png";
import aboutImageTwo from "../assets/images/about-image.png";
import aboutImageThree from "../assets/images/accuracy.png";
import { firstCard, secondCart, thirdCart } from "../data/aboutData";
import { Container } from "react-bootstrap";
import AboutInfo from "../components/AboutInfo";
import SpinnerComponent from "../components/SpinnerComponent";
const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });
  if (loading) {
    return <SpinnerComponent />;
  }
  return (
    <>
      <h2 className="about__title" style={{}}>
        <span style={{ color: "#804E21" }}>⁉️</span> ABOUT BMI{" "}
        <span style={{ color: "#804E21" }}>⁉️</span>
      </h2>
      <Container style={{ marginTop: "3vh", padding: "40px" }}>
        <AboutInfo
          first
          imgAlign="left"
          img={aboutImage}
          alt="image"
          title={firstCard.title}
          paragraphs={firstCard.paragraphs}
        />
        <AboutInfo
          imgAlign="right"
          img={aboutImageTwo}
          alt="image"
          title={secondCart.title}
          paragraphs={secondCart.paragraphs}
          list={secondCart.list}
        />
        <AboutInfo
          imgAlign="left"
          img={aboutImageThree}
          alt="image"
          title={thirdCart.title}
          paragraphs={thirdCart.paragraphs}
        />
      </Container>
    </>
  );
};

export default About;
