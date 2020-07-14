import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    marginBottom: 100,
    '@media (max-width:400px)': {
      marginBottom: '20px!important',
    },
    '& .space': {
      marginLeft: '20px'

    }
  }
});

function Poem({route, poem}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h1>{route}</h1>
      </div>
      <div>
        <span className={'space'}>
          "
        </span>
        <span>{poem}</span>
        <span>"</span>
      </div>
    </div>
  );
}

export default Poem;
