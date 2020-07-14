import React from 'react';
import {Tooltip} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  icon: {
    height: 100,
    width: 100,
    bottom: 5,
    left: 5,
    position: "fixed",
    background: 'url(/asset/rocket.svg) no-repeat',
    backgroundPosition: 'center',
    cursor: 'pointer',
    zIndex: 1000,
    [theme.breakpoints.down('sm')]: {
      height: 50,
      width: 50,
      bottom: 1,
      left: 1,
    },
    [theme.breakpoints.only('md')]: {
      height: 120,
      width: 120,
      bottom: 20,
      left: 20,
    },
    [theme.breakpoints.up('lg')]: {
      height: 140,
      width: 140,
      bottom: 30,
      left: 30,
    }
  }
}));


function ScrollToTop() {
  const classes = useStyles();
  const handleOnClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Tooltip title={'顶部'}>
      <div
        onClick={handleOnClick}
        className={classes.icon}/>
    </Tooltip>
  );
}

export default ScrollToTop;
