import axios from "axios";

// 1. Definimos los tipos de acciones
export const GET_ALL_STUDENTS = "GET_ALL_STUDENTS";
export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

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
