import React, { useEffect, useState } from "react";
import { Button, Card, Container, ListGroup, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../assets/styles/Result.css";
const ResultContainer = (props) => {
  const [show, setShow] = useState(false);
  const { bmiValue } = useSelector((state) => state.bmiInfo);
  return (
    <>
      <Container className="card__container">
        <Card className="main__card">
          <Card.Img className="card__image" height="200" src={props.img} />
          <Card.Header className="card__header">
            <Card.Title>
              Your BMI value is : <span className="card__span">{bmiValue}</span>
            </Card.Title>
            <Card.Subtitle className="card__subtitle">
              {props.textTitle}
            </Card.Subtitle>
          </Card.Header>
          <Card.Body>
            <Card.Text>{props.text}</Card.Text>
            <Button className="result__button" onClick={() => setShow(true)}>
              SHOW ME A DIET LIST!
            </Button>
          </Card.Body>
        </Card>
      </Container>

      <Modal centered show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{props.textTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <span className="list__span">BREAKFAST :</span>{" "}
              {props.dietList.breakfast}{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="list__span">LUNCH:</span> {props.dietList.lunch}{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="list__span">DINNER :</span>{" "}
              {props.dietList.dinner}{" "}
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ResultContainer;
