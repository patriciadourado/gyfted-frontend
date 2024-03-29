import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './containers/home/home';
import Test from './containers/test/test';
import Feedback from './containers/feedback/feedback';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    paddingTop: 40,
    justifyContent: 'center',
    minWidth: 600,
    margin: 0,
    fontFamily: 'Segoe UI, Roboto, Oxygen, Ubuntu, sans-serif',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path={'/personality-test/:id'} component={Test} />
          <Route exact path={'/feedback/:id'} component={Feedback} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
