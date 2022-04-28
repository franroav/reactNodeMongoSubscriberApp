import { createReducer, Types as ReduxSauceTypes } from "reduxsauce";
import {
  GET_ALL_SUBSCRIBERS,
  GET_ONE_SUBSCRIBER,
  DELETE_ONE_SUBSCRIBER,
  UPDATE_ONE_SUBSCRIBER,
  CREATE_ONE_SUBSCRIBER,
  SUBSCRIBER_LOADING,
  SUBSCRIBER_LOADING_OFF,
  RESET_SUBSCRIBER_DATA,
} from "../actions/types";

// Initial STATE (en el initial state es el estado mutable que cambnia con los reducers )

const INITIAL_STATE = {
  subscribers: {},
  loading: false,
};
// el action es el que contendra la data del reducer

const getAllSubscribers = (state, action) => {
  return {
    ...state,
    subscribers: action.subscribers,
  };
};

const getOneSubscriber = (state, action) => {
  return {
    ...state,
    subscribers: action.subscribers,
  };
};

const createSubscriber = (state, action) => {
  return {
    ...state,
    subscribers: action.subscribers,
  };
};
const updateSubscriber = (state, action) => {
  return {
    ...state,
    subscribers: action.subscribers,
  };
};
const deleteSubscriber = (state, action) => {
  return {
    ...state,
    subscribers: action.subscribers,
  };
};
// retorna un objeto vacío en el reset
const resetData = (state = INITIAL_STATE) => ({
  ...state,
  subscribers: {},
});

const loadingIni = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

const loadingOff = (state = INITIAL_STATE) => ({
  ...state,
  loading: false,
});
// EL ACTION VA ENTRE LAS []
const HANDLERS = {
  [GET_ALL_SUBSCRIBERS]: getAllSubscribers,
  [GET_ONE_SUBSCRIBER]: getOneSubscriber,
  [CREATE_ONE_SUBSCRIBER]: createSubscriber,
  [UPDATE_ONE_SUBSCRIBER]: updateSubscriber,
  [DELETE_ONE_SUBSCRIBER]: deleteSubscriber,
  [SUBSCRIBER_LOADING]: loadingIni,
  [SUBSCRIBER_LOADING_OFF]: loadingOff,
  [RESET_SUBSCRIBER_DATA]: resetData,

  [ReduxSauceTypes.DEFAULT]: (state) => state,
};

// ReduxSauceTypes-> default (retorna el state);

export default createReducer(INITIAL_STATE, HANDLERS);
