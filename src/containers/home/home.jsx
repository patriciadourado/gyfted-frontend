import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { Progress, Wrapper, Root, SortCheck } from './styles.js';
import Tile from '../../components/tile/tile';
import { getTests as getTestsAction } from '../../actions/index';

const Home = ({ tests, getTests }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    getTests();
  }, [getTests]);

  if (!tests) {
    return (
      <Progress>
        <CircularProgress size={60} thickness={5} />
      </Progress>
    );
  }
  function handleChange() {
    setChecked(!checked);
  }

  return (
    <Wrapper>
      <SortCheck>
        <FormControlLabel
          label='Sort by number of items'
          value='end'
          labelPlacement='end'
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              color='primary'
            />
          }
        />
      </SortCheck>
      <Root>
        {tests.length === 0 ? (
          <div>No available tests</div>
        ) : checked ? (
          tests
            .sort((x, y) =>
              x.numberOfQuestions < y.numberOfQuestions ? 1 : -1
            )
            .map((test) => <Tile {...test} key={test._id} />)
        ) : (
          tests
            .sort((x, y) => (x.title > y.title ? 1 : -1))
            .map((test) => <Tile {...test} key={test._id} />)
        )}
      </Root>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  tests: state.tests.tests,
});

const mapDispatchToProps = (dispatch) => ({
  getTests: () => dispatch(getTestsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
