import React, { useState, useContext, useEffect } from "react";

import ClientTableContent from "./ClientTableContent";
import { ClientContext } from "../../containers/ClientContextContainer";
import Error from "../common/Error";
import Loading from "../common/Loading";

const ClientList = () => {
  const { clients, error, loading, getAllClients, deleteClient } = useContext(
    ClientContext
  );

  useEffect(() => {
    getAllClients();
  }, []);

  if (clients && !loading && !error) {
    return (
      <div>
        <ClientTableContent clients={clients} deleteClient={deleteClient} />
      </div>
    );
  }

  if (loading) return <Loading />;
  if (error) return <Error error={error.message} />;

  return "";
};

export default ClientList;
