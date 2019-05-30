import React, { useContext } from "react";
import Alert from "react-bootstrap/Alert";

import { ClientContext } from "../../containers/ClientContextContainer";

const ErrorFromContext = () => {
  const { error, resetError } = useContext(ClientContext);

  return (
    error && (
      <Alert dismissible variant="danger" onClose={resetError}>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{error}</p>
      </Alert>
    )
  );
};

export default ErrorFromContext;
