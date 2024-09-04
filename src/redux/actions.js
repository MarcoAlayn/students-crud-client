import axios from "axios";

// 1. Definimos los tipos de acciones
export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const SET_MODAL_MODE = "SET_MODAL_MODE";
export const SHOW_MODAL_DETAIL = "SHOW_MODAL_DETAIL";
export const GET_ALL_STUDENTS = "GET_ALL_STUDENTS";
export const GET_STUDENT_BY_ID = "GET_STUDENT_BY_ID";
export const UPDATE_STUDENT = "UPDATE_STUDENT";
export const CREATE_STUDENT = "CREATE_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT";
export const RESET_STUDENT_INFO = "RESET_STUDENT_INFO";

export const getAllStudents = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_REQUEST });
    try {
      const response = await axios.get("https://localhost:7191/api/Student");

      if (response?.status >= 200 && response?.status < 300) {
        dispatch({
          type: FETCH_SUCCESS,
          payload: response?.data?.message,
        });
        return dispatch({
          type: GET_ALL_STUDENTS,
          payload: response?.data?.data,
        });
      }
    } catch (error) {
      console.error(error);
      let errorMessage = "Error en la conexión";
      if (error.response) {
        errorMessage =
          error.response?.data?.message || "Error en la respuesta del servidor";
      }
      return dispatch({
        type: FETCH_FAILURE,
        payload: errorMessage,
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

      if (response?.status >= 200 && response?.status < 300) {
        dispatch({
          type: FETCH_SUCCESS,
          payload: response?.data?.message,
        });
        return dispatch({
          type: GET_STUDENT_BY_ID,
          payload: response?.data?.data,
        });
      }
    } catch (error) {
      console.error(error);
      let errorMessage = "Error en la conexión";
      if (error.response) {
        errorMessage =
          error.response?.data?.message || "Error en la respuesta del servidor";
      }
      return dispatch({
        type: FETCH_FAILURE,
        payload: errorMessage,
      });
    }
  };
};

export const updateStudent = (id, data) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_REQUEST });

    try {
      const response = await axios.put(
        `https://localhost:7191/api/Student/${id}`,
        data
      );
      if (response?.status >= 200 && response?.status < 300) {
        dispatch({
          type: FETCH_SUCCESS,
          payload: response?.data?.message,
        });
        return dispatch({
          type: UPDATE_STUDENT,
        });
      }
    } catch (error) {
      console.error(error);
      let errorMessage = "Error en la conexión";
      if (error.response) {
        errorMessage =
          error.response?.data?.message || "Error en la respuesta del servidor";
      }
      return dispatch({
        type: FETCH_FAILURE,
        payload: errorMessage,
      });
    }
  };
};

export const createStudent = (data) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_REQUEST });
    try {
      const response = await axios.post(
        "https://localhost:7191/api/Student",
        data
      );
      if (response?.status >= 200 && response?.status < 300) {
        dispatch({
          type: FETCH_SUCCESS,
          payload: response?.data?.message,
        });
        return dispatch({
          type: CREATE_STUDENT,
        });
      }
    } catch (error) {
      console.error(error);
      let errorMessage = "Error en la conexión";
      if (error.response) {
        errorMessage =
          error.response?.data?.message || "Error en la respuesta del servidor";
      }
      return dispatch({
        type: FETCH_FAILURE,
        payload: errorMessage,
      });
    }
  };
};

export const deleteStudent = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_REQUEST });
    try {
      const response = await axios.delete(
        `https://localhost:7191/api/Student/${id}`
      );

      if (response?.status >= 200 && response?.status < 300) {
        dispatch({
          type: FETCH_SUCCESS,
          payload: response?.data?.message,
        });
        return dispatch({
          type: DELETE_STUDENT,
        });
      }
    } catch (error) {
      console.error(error);
      let errorMessage = "Error en la conexión";
      if (error.response) {
        errorMessage =
          error.response?.data?.message || "Error en la respuesta del servidor";
      }
      return dispatch({
        type: FETCH_FAILURE,
        payload: errorMessage,
      });
    }
  };
};

export const showModalDetail = (action) => {
  return (dispatch) => {
    return dispatch({
      type: SHOW_MODAL_DETAIL,
      payload: action,
    });
  };
};

export const setModalMode = (mode) => {
  return (dispatch) => {
    return dispatch({
      type: SET_MODAL_MODE,
      payload: mode,
    });
  };
};

export const resetStudentInfo = () => {
  return (dispatch) => {
    return dispatch({
      type: RESET_STUDENT_INFO,
    });
  };
};
