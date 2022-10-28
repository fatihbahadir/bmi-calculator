import React from "react";
import AboutImage from "./AboutImage";
import { Row, Col, Container } from "react-bootstrap";
import "../assets/styles/About.css";
const AboutInfo = (props) => {
  const renderImage = () => {
    return (
      <Col
        className="text-center image__column d-none d-md-block"
        xl="6"
        md="6"
        sm="12"
        xs="12"
      >
        <AboutImage img={props.img} alt={props.alt} />
      </Col>
    );
  };

  const renderText = () => {
    return (
      <Col xl="6" md="6" sm="12" xs="12" className="d-flex align-items-center">
        <Container className="about__container">
          <h2 className="about__content-title">{props.title}</h2>
          {props.paragraphs.map((prgrphs) => (
            <p className="about__content-text">{prgrphs}</p>
          ))}
          {
            <dl>
              {props.list?.map((text,index) => (
                <li key={index} className="about__content-list">{text}</li>
              ))}
            </dl>
          }
        </Container>
      </Col>
    );
  };

  return (
    <Row className="about__row">
      {props.imgAlign === "left"
        ? [renderImage(), renderText()]
        : [renderText(), renderImage()]}
    </Row>
  );
};

export default AboutInfo;
