import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '../../containers/test/styles.js';

import { useStyles } from './styles.js';

import Link from '../link';

const Tile = ({ _id, title }) => {
  const classes = useStyles();

  return (
    <Card key={title} className={classes.root}>
      <CardContent>
        <div className={classes.label}>{title}</div>
      </CardContent>
      <CardActions className={classes.actions}>
        <Link to={`/personality-test/${_id}`}>
          <Button>Start</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Tile;
