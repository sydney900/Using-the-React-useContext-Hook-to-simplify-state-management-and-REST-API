import { RSAA } from "redux-api-middleware";

export const FETCH_CLIENTS = "FETCH_CLIENTS";
export const FETCH_CLIENTS_SUCCESS = "FETCH_CLIENTS_SUCCESS";
export const FETCH_CLIENTS_FAILURE = "FETCH_CLIENTS_FAILURE";

export const ADD_CLIENT = "ADD_CLIENT";
export const ADD_CLIENT_SUCCESS = "ADD_CLIENT_SUCCESS";
export const ADD_CLIENT_FAILURE = "ADD_CLIENT_FAILURE";

export const DELETE_CLIENT = "DELETE_CLIENT";
export const DELETE_CLIENT_SUCCESS = "DELETE_CLIENT_SUCCESS";
export const DELETE_CLIENT_FAILURE = "DELETE_CLIENT_FAILURE";

export const RESET_ERROR = "RESET_ERROR";

const CLIENT_REST_API__BASE_URL = "http://127.0.0.1:3001/clients";

export const fetchClients = () => ({
  [RSAA]: {
    types: [FETCH_CLIENTS, FETCH_CLIENTS_SUCCESS, FETCH_CLIENTS_FAILURE],
    endpoint: `${CLIENT_REST_API__BASE_URL}`,
    method: "GET"
  }
});

export const addClient = data => ({
  [RSAA]: {
    types: [ADD_CLIENT, ADD_CLIENT_SUCCESS, ADD_CLIENT_FAILURE],
    endpoint: `${CLIENT_REST_API__BASE_URL}`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }
});

export const deleteClient = id => ({
  [RSAA]: {
    types: [DELETE_CLIENT, DELETE_CLIENT_SUCCESS, DELETE_CLIENT_FAILURE],
    endpoint: `${CLIENT_REST_API__BASE_URL}/${id}`,
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  }
});

export const resetError = () => ({
  type: RESET_ERROR
});
