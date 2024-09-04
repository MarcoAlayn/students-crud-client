import {
  GET_ALL_STUDENTS,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  GET_STUDENT_BY_ID,
  SHOW_MODAL_DETAIL,
  RESET_STUDENT_INFO,
  SET_MODAL_MODE,
  UPDATE_STUDENT
} from "./actions";

const initialState = {
  studentList: [],
  studentSelected: [],
  fetchInProcess: false,
  isFetchSuccess: false,
  fetchMessage: null,
  showModalDetail: false,
  modalMode: null,
};

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
        studentSelected: action.payload,
      };
    case SHOW_MODAL_DETAIL:
      return {
        ...state,
        showModalDetail: action.payload,
      };
    case RESET_STUDENT_INFO:
      return {
        ...state,
        studentSelected: [],
      };
    case SET_MODAL_MODE:
      return {
        ...state,
        modalMode: action.payload,
      };
    case UPDATE_STUDENT:
      return {
        ...state,
      };
    default:
      return state;
  }
}
