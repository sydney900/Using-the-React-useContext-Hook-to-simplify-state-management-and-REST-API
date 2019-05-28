import React from "react";
import { connect } from "react-redux";

import { addClient } from "../actions/clients-actions";
import ClientCreateForm from "../components/client/ClientCreateForm";

const mapDispatchToProps = dispatch => {
  return {
    addClient: client => dispatch(addClient(client))
  };
};

const ClientCreateContainer = props => {
  const addClient = client => {
    props.addClient(client);
  };

  return (
    <div>
      <h3>Create a New Client</h3>
      <ClientCreateForm submitClient={addClient} />
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(ClientCreateContainer);
