import React from 'react';
import Form from 'react-bootstrap/Form';

export default function CustomTextField(props) {
  return (
    <Form>
      <Form.Group>
        <Form.Label>{props.lable}</Form.Label>
        <Form.Control
          type='text'
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.inputHandler}
        />
        <Form.Text>{props.text}</Form.Text>
      </Form.Group>
    </Form>
  );
}
