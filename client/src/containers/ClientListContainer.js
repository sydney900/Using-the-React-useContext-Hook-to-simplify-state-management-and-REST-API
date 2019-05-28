import React, { useEffect } from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";

import Error from "../components/common/Error";
import Loading from "../components/common/Loading";
import { fetchClients } from "../actions/clients-actions";
import ClientContainer from "./ClientContainer";

const mapStateToProps = state => {
  return {
    clients: state.clients.clientsList
  };
};

const ClientTableContent = ({ clients }) => {
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
        {clients.map(client => (
          <ClientContainer client={client} />
        ))}
      </tbody>
    </Table>
  );
};

const ClientListContainer = props => {
  const { clients, error, loading } = props.clients;

  useEffect(() => {
    props.dispatch(fetchClients());
  }, []);

  if (clients && !loading && !error) {
    return (
      <div>
        <ClientTableContent clients={clients} />
      </div>
    );
  }

  if (loading) return <Loading />;
  if (error) return <Error error={error.message} />;

  return "";
};

export default connect(mapStateToProps)(ClientListContainer);
