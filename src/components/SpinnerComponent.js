import React from "react";
import "../assets/styles/Spinner.css";
import { Spinner } from "react-bootstrap";
const SpinnerComponent = () => {
  return (
    <div className="spinner">
      <Spinner size="xl" animation="grow" variant="info" />
    </div>
  );
};

export default SpinnerComponent;
