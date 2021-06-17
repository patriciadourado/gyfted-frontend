import { combineReducers } from 'redux';

import tests from './home';
import test from './test';
import feedback from './feedback';

export default combineReducers({
  tests,
  test,
  feedback,
});
