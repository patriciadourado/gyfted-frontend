import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { SET_FEEDBACK } from '../actions/constants';
import { getFeedbackSuccess, getFeedbackFailure } from '../actions/index';

function* setFeedbackSaga(action) {
  try {
    const resp = yield call(() =>
      axios.post(`/api/tests/feedback/${action.payload}`, {
        score: action.score,
      })
    );
    yield put(getFeedbackSuccess(resp.data));
  } catch (error) {
    yield put(getFeedbackFailure(error));
  }
}

export default [takeLatest(SET_FEEDBACK, setFeedbackSaga)];
