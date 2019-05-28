import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const ClientDetail = props => {
  const { id, name, email } = props.client;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text />
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>mail: {email}</ListGroup.Item>
        <ListGroup.Item>id: {id}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/">Back</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ClientDetail;
