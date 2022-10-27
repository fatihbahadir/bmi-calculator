import React, { useState } from "react";
import InputField from "./InputField";
import { Container, Form, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateBmi,
  setGlobalHeight,
  setGlobalName,
  setGlobalWeight,
} from "../features/bmiInfo/bmiInfoSlice";
import "../assets/styles/Main.css";
const FormComponent = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, weight, height, bmiValue } = useSelector(
    (state) => state.bmiInfo
  );
  return (
    <Container className="main__form" style={{}}>
      <Form>
        <InputField
          onChange={(e) => {
            dispatch(setGlobalName(e.target.value));
          }}
          className="input-field"
          title="Your Name :"
          type="text"
          placeholder="Your Name..."
        />
        <InputField
          onChange={(e) => {
            dispatch(setGlobalHeight(e.target.value));
          }}
          title="Your Height : (cm)"
          type="number"
          placeholder="0"
        />
        <InputField
          onChange={(e) => {
            dispatch(setGlobalWeight(e.target.value));
          }}
          title="Your Weight : (kg)"
          type="number"
          placeholder="0"
        />
        <Button
          className="float-end border-0 mt-3 main__button"
          style={{
            backgroundColor: "#272343",
            color: "#aeccc6",
            fontWeight: "bold",
            width: "8vw",
            height: "6vh",
          }}
          onClick={(e) => {
            if (name && weight && height) {
              e.preventDefault();
              if (
                JSON.parse(localStorage.getItem("data")).slice(-1)[0].name !==
                  name ||
                JSON.parse(localStorage.getItem("data")).slice(-1)[0].bmi !==
                  bmiValue
              ) {
                dispatch(calculateBmi({ weight, height }));
                navigate("/result");
              } else {
                navigate("/result");
              }
            } else {
              setShow(true);
            }
          }}
        >
          Calculate
        </Button>
      </Form>
      <Modal
        style={{ position: "fixed", top: "30%" }}
        size="sm"
        show={show}
        onHide={() => setShow(false)}
      >
        <Modal.Header
          style={{
            color: "red",
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "900",
            letterSpacing: "3px",
          }}
          closeButton
        >
          WARNING!
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>Wrong Input!</Modal.Body>
      </Modal>
    </Container>
  );
};

export default FormComponent;
