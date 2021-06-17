import React, { useEffect } from 'react';
import { TestTitle, Progress, Root } from '../test/styles';
import { TestResult, WrapperFeedback } from './styles';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { setFeedback as setFeedbackAction } from '../../actions/index';
import { useLocation } from 'react-router-dom';

const Feedback = ({ feedback, setFeedback, match, loading }) => {
  const score = useLocation().state.score;
  const title = useLocation().state.title;

  useEffect(() => {
    setFeedback(match.params.id, score, title);
  }, [setFeedback, match, score, title]);

  if (loading) {
    return (
      <Progress>
        <CircularProgress size={60} thickness={5} />
      </Progress>
    );
  }

  if (!feedback) {
    return <Root>Failed to load Feedback</Root>;
  }
  return (
    <WrapperFeedback>
      <TestTitle>{title} Feedback</TestTitle>
      <TestResult>{feedback.feedback}</TestResult>
    </WrapperFeedback>
  );
};

const mapStateToProps = (state) => ({
  feedback: state.feedback.feedback,
  title: state.feedback.title,
  score: state.feedback.score,
});

const mapDispatchToProps = (dispatch) => ({
  setFeedback: (id, score, title) =>
    dispatch(setFeedbackAction(id, score, title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
