import React from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";

import { deleteClient } from "../actions/clients-actions";

const mapDispatchToProps = dispatch => {
  return {
    deleteClient: id => dispatch(deleteClient(id))
  };
};

const ClientContainer = props => {
  const deleteClient = id => {
    props.deleteClient(id);
  };

  const { id, name, email } = props.client;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <Button variant="danger" onClick={deleteClient(id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(ClientContainer);
