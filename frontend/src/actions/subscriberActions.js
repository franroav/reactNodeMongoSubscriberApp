import {
  GET_ALL_SUBSCRIBERS,
  GET_ONE_SUBSCRIBER,
  DELETE_ONE_SUBSCRIBER,
  UPDATE_ONE_SUBSCRIBER,
  CREATE_ONE_SUBSCRIBER,
  SUBSCRIBER_LOADING,
  SUBSCRIBER_LOADING_OFF,
  RESET_SUBSCRIBER_DATA,
} from "./types";
import {
  getAll,
  getById,
  create,
  update,
  deleteById,
} from "../services/subscriber.service";
import Swal from "sweetalert2";

export const getAllSubscribers = (subscribers, element) => (dispatch) => {
  getAll()
    .then((response) => {
      dispatch(fetchSubscriberReducer(response));
    })
    .catch(() => {});
};

export const getOneSubscriber = (subscribers, element) => (dispatch) => {
  getById()
    .then((response) => {
      dispatch(getOneSubscriberReducer(response));
    })
    .catch(() => {});
};

export const createOneSubscriber = (subscribers, element) => (dispatch) => {
  console.log({ subscribers, element });

  create(subscribers)
    .then((response) => {
      console.log(response);
      if (response.error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `El correo ${subscribers.email} ya se se encuentra registrado!`,
          footer:
            '<p class="text-lead"><small>porfavor intentelo nuevamente con otro correo, muchas gracias</small></p>',
        });
      }
      if (response.data) {
        dispatch(createSubscriberReducer(response));
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "El subscriptor ha sido guardado exitosamente!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
    .catch(() => {});
};

export const updateOneSubscriber = (subscribers, element) => (dispatch) => {
  update()
    .then((response) => {
      dispatch(updateSubscriberReducer(response.data));
    })
    .catch(() => {});
};

export const deleteOneSubscriber = (subscribers, element) => (dispatch) => {
  deleteById()
    .then((response) => {
      dispatch(deleteOneSubscriberReducer(response.data));
    })
    .catch(() => {});
};

const loadingIni = () => ({
  type: SUBSCRIBER_LOADING,
});

const loadingOff = () => ({
  type: SUBSCRIBER_LOADING_OFF,
});

const fetchSubscriberReducer = (subscribers) => ({
  type: GET_ALL_SUBSCRIBERS,
  subscribers,
});

const createSubscriberReducer = (subscribers) => ({
  type: CREATE_ONE_SUBSCRIBER,
  subscribers,
});

const updateSubscriberReducer = (subscribers) => ({
  type: UPDATE_ONE_SUBSCRIBER,
  subscribers,
});

const getOneSubscriberReducer = (subscribers) => ({
  type: GET_ONE_SUBSCRIBER,
  subscribers,
});

const deleteOneSubscriberReducer = (subscribers) => ({
  type: DELETE_ONE_SUBSCRIBER,
  subscribers,
});
const resetData = () => ({
  type: RESET_SUBSCRIBER_DATA,
});
