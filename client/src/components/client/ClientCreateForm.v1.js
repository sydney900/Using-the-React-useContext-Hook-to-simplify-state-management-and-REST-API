import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ClientCreateForm = props => {
  const [client, setClient] = useState({});
  const inputChanged = event => {
    setClient({ ...client, [event.target.name]: event.target.value });
  };

  const submitClient = event => {
    event.preventDefault();
    props.submitClient(client);
  };

  return (
    <Form>
      <Form.Group controlId="formClientName">
        <Form.Label>Client name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter client name"
          name="name"
          onChange={inputChanged}
          value={client.name}
        />
      </Form.Group>

      <Form.Group controlId="formClientEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={inputChanged}
          value={client.email}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={inputChanged}
          value={client.password}
        />
      </Form.Group>

      <div>
        <Button
          variant="primary"
          type="submit"
          onClick={submitClient}
          className="mr-2"
        >
          Submit
        </Button>
        <Button variant="secondary" href="/" className="mr-2">
          Back
        </Button>
      </div>
    </Form>
  );
};

export default ClientCreateForm;
