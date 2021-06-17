import {
  GET_TESTS,
  GET_TESTS_SUCCESS,
  GET_TEST,
  GET_TEST_SUCCESS,
  GET_TEST_FAILURE,
  SET_FEEDBACK,
  GET_FEEDBACK_SUCCESS,
  GET_FEEDBACK_FAILURE,
} from './constants.js';

export const getTests = () => ({
  type: GET_TESTS,
});

export const getTestsSuccess = (data) => ({
  type: GET_TESTS_SUCCESS,
  payload: data,
});

export const getTestFailure = (err) => ({
  type: GET_TEST_FAILURE,
  err,
});

export const getTest = (id) => ({
  type: GET_TEST,
  payload: id,
});

export const getTestSuccess = (data) => ({
  type: GET_TEST_SUCCESS,
  payload: data,
});

export const setFeedback = (id, sum, quizTitle) => ({
  type: SET_FEEDBACK,
  payload: id,
  score: sum,
  title: quizTitle,
});

export const getFeedbackSuccess = (data) => ({
  type: GET_FEEDBACK_SUCCESS,
  payload: data,
});

export const getFeedbackFailure = (err) => ({
  type: GET_FEEDBACK_FAILURE,
  err,
});
