import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../assets/styles/Main.css";
import mainImg from "../assets/images/main.png";
import FormComponent from "../components/FormComponent";
import SpinnerComponent from "../components/SpinnerComponent";

const Main = () => {
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
      <Container style={{ marginTop: "10vh" }}>
        <Row>
          <Col
            className="main__img text-center d-none d-md-inline "
            xl="7"
            md="6"
          >
            <img src={mainImg} style={{ width: "100%" }} alt="resim"></img>
          </Col>
          <Col
            xl="5"
            md="6"
            sm="12"
            xs="12"
            className="d-flex align-items-center"
          >
            <FormComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
