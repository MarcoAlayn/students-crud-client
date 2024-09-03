import axios from "axios";

// 1. Definimos los tipos de acciones
export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const GET_ALL_STUDENTS = "GET_ALL_STUDENTS";
export const GET_STUDENT_BY_ID = "GET_STUDENT_BY_ID";
export const OPEN_MODAL_EDIT = "OPEN_MODAL_EDIT";

export const getAllStudents = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_REQUEST });
    try {
      const response = await axios.get("https://localhost:7191/api/Student");

      if (response.status >= 200 && response.status < 300) {
        dispatch({
          type: FETCH_SUCCESS,
          payload: response.data.message,
        });
        return dispatch({
          type: GET_ALL_STUDENTS,
          payload: response.data.data,
        });
      } else {
        return dispatch({
          type: FETCH_FAILURE,
          payload:
            response.data.message || "Error en la respuesta del servidor",
        });
      }
    } catch (error) {
      console.error(error);
      return dispatch({
        type: FETCH_FAILURE,
        payload: "Error en la conexión",
      });
    }
  };
};

export const getStudentById = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_REQUEST });
    try {
      const response = await axios.get(
        `https://localhost:7191/api/Student/${id}`
      );

      if (response.status >= 200 && response.status < 300) {
        dispatch({
          type: FETCH_SUCCESS,
          payload: response.data.message,
        });
        return dispatch({
          type: GET_STUDENT_BY_ID,
          payload: response.data.data,
        });
      } else {
        return dispatch({
          type: FETCH_FAILURE,
          payload:
            response.data.message || "Error en la respuesta del servidor",
        });
      }
    } catch (error) {
      console.error(error);
      return dispatch({
        type: FETCH_FAILURE,
        payload: "Error en la conexión",
      });
    }
  };
};

export const openModalEdit = (action) => {
  return (dispatch) => {
    return dispatch({
      type: OPEN_MODAL_EDIT,
      payload: action,
    });
  };
};
