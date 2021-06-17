import {
  SET_FEEDBACK,
  GET_FEEDBACK_SUCCESS,
  GET_FEEDBACK_FAILURE,
} from '../actions/constants';

const initialState = {
  feedback: null,
  loading: false,
  loaded: null,
  score: null,
  title: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        feedback: action.payload,
        title: null,
        score: null,
        loaded: true,
      };
    case GET_FEEDBACK_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        score: null,
        title: null,
      };
    case SET_FEEDBACK:
      return {
        ...state,
        feedback: null,
        score: action.score,
        title: action.title,
        loading: true,
        loaded: null,
      };
    default:
      return initialState;
  }
};

export default homeReducer;
