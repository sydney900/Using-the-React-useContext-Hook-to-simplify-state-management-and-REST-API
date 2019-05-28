import React, { useState, useContext } from "react";
import uuidv1 from "uuid";
import { ClientContext } from "../../containers/ClientContextContainer";
import ClientCreateForm from "./ClientCreateForm";

const ClientCreate = props => {
  const { addClient } = useContext(ClientContext);

  return (
    <div>
      <h3>Create a New Client</h3>
      <ClientCreateForm submitClient={addClient} />
    </div>
  );
};

export default ClientCreate;
