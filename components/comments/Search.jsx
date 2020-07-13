import React from 'react';
import {InputBase, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './Search.style';


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
