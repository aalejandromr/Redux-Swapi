import { SUCCESS_STATUS, FETCHING_STATUS, ERROR_STATUS } from "../actions";

const initialState = {
  characters: [],
  error: null,
  isFetching: true
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING_STATUS:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case SUCCESS_STATUS:
      return {
        ...state,
        isFetching: false,
        characters: action.payload,
        error: null
      }
    case ERROR_STATUS:
      return {
        ...state,
        isFetching: false,
        error: "We had an error"
      }
    default:
      return state;
  }
};
