import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  Root,
  Progress,
  WrapperButton,
  Button,
  TestTitle,
  Header,
  LabelTest,
  Question,
  Answers,
} from './styles.js';
import Link from '../../components/link.js';

import { getTest as getTestAction } from '../../actions/index';

const Test = ({ test, getTest, match, loading }) => {
  const [currentRadioValues, setCurrentRadioValues] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [score, setScore] = useState();

  const handleRadioChange = (e) => {
    const question = e.target.value;
    const i = parseInt(question.substring(0, question.indexOf('-')));
    const ans = question.substring(question.indexOf('-') + 1);
    const checks = [...currentRadioValues];
    checks[i - 1] = parseInt(ans);

    setCurrentRadioValues(checks);
  };

  const handleClearAll = () => {
    setCurrentRadioValues([]);
    setScore(-1);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    if (
      currentRadioValues.length < test.questions.length ||
      currentRadioValues.includes(undefined)
    )
      alert('Please, answer all the questions!');
    else {
      var sum = 0;
      test.answers.forEach((answer) => {
        currentRadioValues.forEach((checked) => {
          if (answer._id === checked) sum = sum + parseInt(answer.value);
        });
      });
      setScore(sum);
      setRedirect(true);
    }
  };

  useEffect(() => {
    getTest(match.params.id);
  }, [getTest, match]);

  if (loading) {
    return (
      <Progress>
        <CircularProgress size={60} thickness={5} />
      </Progress>
    );
  }

  if (!test) {
    return <Root>Failed to load a test</Root>;
  }

  return (
    <Root>
      <Header>
        <Link to={`/`}>
          <Button back>Back</Button>
        </Link>
        <TestTitle key={test.quizData.title}>{test.quizData.title}</TestTitle>
      </Header>
      <LabelTest>In general, I..</LabelTest>

      {test.questions
        .sort((x, y) => (x.index > y.index ? 1 : -1))
        .map((question) => (
          <React.Fragment key={question.index}>
            <Question key={question.index}>
              {question.index}. {question.label}{' '}
            </Question>
            {question.quizQuestionAnswers.map((id) =>
              test.answers.map(
                ({ _id, label }) =>
                  _id === id && (
                    <Answers key={question.index + '-' + _id}>
                      <input
                        key={question.index + '-' + _id}
                        id={question.index + '-' + _id}
                        type='radio'
                        value={question.index + '-' + _id}
                        onChange={handleRadioChange}
                        checked={
                          currentRadioValues[question.index - 1] === _id
                            ? true
                            : false
                        }
                      />
                      {_id === 12 || _id === 16 ? (
                        <label key={_id + '-' + label}>
                          I {label} agree nor disagree
                        </label>
                      ) : (
                        <label key={_id + '-' + label}>I {label}</label>
                      )}
                    </Answers>
                  )
              )
            )}
          </React.Fragment>
        ))}
      <WrapperButton>
        <Button onClick={handleSubmit}>Submit Answers</Button>
        <Button onClick={handleClearAll}>Clear all answers</Button>
        {redirect && (
          <Redirect
            to={{
              pathname: `/feedback/${test.quizData._id}`,
              state: { score: score, title: test.quizData.title },
            }}
          />
        )}
      </WrapperButton>
    </Root>
  );
};

const mapStateToProps = (state) => ({
  test: state.test.test,
  loading: state.test.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getTest: (id) => dispatch(getTestAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
