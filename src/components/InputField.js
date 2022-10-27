import React from "react";
import { Form } from "react-bootstrap";
const InputField = (props) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="form__label">{props.title}</Form.Label>
      <Form.Control
        onChange={props.onChange}
        type={props.type}
        max="250"
        min="1"
        placeholder={props.placeholder}
      />
    </Form.Group>
  );
};

export default InputField;
