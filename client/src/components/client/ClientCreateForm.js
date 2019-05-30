import React, { useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3)
    .max(30)
    .required(),
  password: yup
    .string()
    .required()
    .min(3)
    .max(30),
  email: yup
    .string()
    .required()
    .email()
});

const ClientCreateForm = props => {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={props.submitClient}
      initialValues={{
        name: "",
        email: "",
        password: ""
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId="formClientName">
            <Form.Label>Client name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter client name"
              name="name"
              onChange={handleChange}
              value={values.name}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formClientEmail">
            <Form.Label>Email address</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
                value={values.email}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={values.password}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <div>
            <Button variant="primary" type="submit" className="mr-2">
              Submit
            </Button>
            <Button variant="secondary" href="/" className="mr-2">
              Back
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ClientCreateForm;
