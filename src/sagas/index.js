import { all } from 'redux-saga/effects';
import homeSagas from './home.js';
import testSagas from './test.js';
import feedbackSagas from './feedback.js';

function* rootSaga() {
  yield all([...homeSagas, ...testSagas, ...feedbackSagas]);
}

export default rootSaga;
