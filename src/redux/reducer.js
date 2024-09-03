// 1. Importamos nuestras acciones
import {
  GET_ALL_STUDENTS,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  GET_STUDENT_BY_ID,
  OPEN_MODAL_EDIT,
} from "./actions";

// 2. Define el estado inicial del reducer
const initialState = {
  studentList: [],
  studentSected: [],
  fetchInProcess: false,
  isFetchSuccess: false,
  fetchMessage: null,
  openModalEdit: false,
  openModalCreate: false,
};

// 3. Define el reducer
export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        fetchInProcess: true,
        isFetchSuccess: false,
        fetchMessage: null,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        fetchInProcess: false,
        isFetchSuccess: true,
        fetchMessage: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        fetchInProcess: false,
        isFetchSuccess: false,
        fetchMessage: action.payload,
      };
    case GET_ALL_STUDENTS:
      return {
        ...state,
        studentList: action.payload,
      };
    case GET_STUDENT_BY_ID:
      return {
        ...state,
        studentSected: action.payload,
      };
    case OPEN_MODAL_EDIT:
      return {
        ...state,
        openModalEdit: action.payload,
      };

    default:
      return state;
  }
}
