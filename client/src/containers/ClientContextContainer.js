import React from "react";
import { connect } from "react-redux";
import {
  fetchClients,
  addClient,
  deleteClient,
  resetError
} from "../actions/clients-actions";

const ClientContext = React.createContext([{}, {}]);

const mapStateToProps = state => {
  return {
    clients: state.clients.clientsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllClients: () => dispatch(fetchClients()),
    addClient: client => dispatch(addClient(client)),
    deleteClient: id => dispatch(deleteClient(id)),
    resetError: () => dispatch(resetError())
  };
};

const ClientContextContainer = props => {
  const { clients, error, loading } = props.clients;

  const getAllClients = () => {
    props.getAllClients();
  };

  const addClient = client => {
    props.addClient(client);
  };

  const deleteClient = id => {
    props.deleteClient(id);
  };

  return (
    <ClientContext.Provider
      value={{
        clients,
        error,
        loading,
        getAllClients,
        addClient,
        deleteClient,
        resetError
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientContextContainer);

export { ClientContext };
