import Nav from './Nav';
import Footer from "./Footer";
import React from "react";
import ScrollToTop from "./ScrollToTop";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: "column",
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row-reverse',
    }
  },
  wrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    position: 'relative'
  }
}));

// 包含导航栏与页脚的容器
function Container({children}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Nav/>
      <div className={classes.wrapper}>
        {children}
        <ScrollToTop/>
        <Footer/>
      </div>
    </div>
  );
}

export default Container;
