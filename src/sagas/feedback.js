import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { SET_FEEDBACK } from '../actions/constants';
import { getFeedbackSuccess, getFeedbackFailure } from '../actions/index';
const API_URL = process.env.REACT_APP_API_URL;

function* setFeedbackSaga(action) {
  try {
    const resp = yield call(() =>
      axios.post(API_URL+`/api/tests/feedback/${action.payload}`, {
        score: action.score,
      })
    );
    yield put(getFeedbackSuccess(resp.data));
  } catch (error) {
    yield put(getFeedbackFailure(error));
  }
}

export default [takeLatest(SET_FEEDBACK, setFeedbackSaga)];
