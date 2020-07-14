import React from 'react';
import {Grid, Paper, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Index() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={1}
      >
        {
          [1, 2, 3, 4, 5].map(item => (
            <Grid
              key={item}
              container
              item
              xs={12}
              spacing={3}
            >
              <Grid
                item
                xs={4}
              >
                <Paper className={classes.paper}>
                  test
                </Paper>
              </Grid>
              <Grid
                item
                xs={4}
              >
                <Paper className={classes.paper}>
                  test
                </Paper>
              </Grid>
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
}

export default Index;
