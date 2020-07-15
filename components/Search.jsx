import React from 'react';
import {InputBase, IconButton, makeStyles} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderRadius: '10px',
    background: '#fff'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));


function Search() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="搜索..."
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon/>
      </IconButton>
    </div>
  );
}

export default Search;
