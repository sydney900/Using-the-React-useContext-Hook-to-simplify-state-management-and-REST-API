import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const ClientTableContent = ({ clients, deleteClient }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {clients.map(({ id, name, email }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>
              <Button variant="danger" onClick={() => deleteClient(id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ClientTableContent;
