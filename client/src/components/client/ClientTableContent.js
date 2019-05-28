import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const ClientTableContent = ({ clients, deleteClient }) => {
  const onDeleteClient = id => deleteClient(id);

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
          <tr>
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
