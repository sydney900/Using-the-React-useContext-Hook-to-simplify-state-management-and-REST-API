import {
  FETCH_CLIENTS,
  FETCH_CLIENTS_SUCCESS,
  FETCH_CLIENTS_FAILURE,
  ADD_CLIENT,
  ADD_CLIENT_SUCCESS,
  ADD_CLIENT_FAILURE,
  DELETE_CLIENT,
  DELETE_CLIENT_SUCCESS,
  DELETE_CLIENT_FAILURE,
  RESET_ERROR
} from "../actions/clients-actions";
import { stat } from "fs";

const INITIAL_STATE = {
  clientsList: { clients: [], error: null, loading: false }
};

export default (state = INITIAL_STATE, action) => {
  let error;
  switch (action.type) {
    case FETCH_CLIENTS:
      return {
        ...state,
        clientsList: { clients: [], error: null, loading: true }
      };
    case FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        clientsList: {
          clients: action.payload,
          error: null,
          loading: false
        }
      };
    case FETCH_CLIENTS_FAILURE:
      error = action.payload.data || { message: action.payload.message };
      return {
        ...state,
        clientsList: { clients: [], error: error, loading: false }
      };
    case ADD_CLIENT_SUCCESS:
      console.log(state);
      return {
        ...state,
        clientsList: {
          clients: [action.payload, ...(state.clientsList.clients || [])],
          error: null,
          loading: false
        }
      };
    case DELETE_CLIENT_FAILURE:
    case ADD_CLIENT_FAILURE:
      error = action.payload.message;
      const errDetail =
        action.payload.response && action.payload.response.message;
      return {
        ...state,
        clientsList: {
          clients: state.clientsList.clients,
          error: error + (errDetail ? ": " + errDetail : ""),
          loading: state.clientsList.loading
        }
      };
    case DELETE_CLIENT_SUCCESS:
      const clients = state.clientsList.clients.filter(client => {
        return client.id !== action.payload.id;
      });
      return {
        ...state,
        clientsList: { clients: clients, error: null, loading: false }
      };

    case RESET_ERROR:
      return {
        ...state,
        clientsList: {
          clients: state.clientsList.clients,
          error: null,
          loading: state.clientsList.loading
        }
      };

    default:
      return state;
  }
};
