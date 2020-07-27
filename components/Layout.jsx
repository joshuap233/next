import React from "react";
import Nav from './Nav';
import Footer from "./Footer";
import Poem from "./Poem";
import Paging from './Paging';
import ScrollToTop from "./ScrollToTop";
import {makeStyles} from "@material-ui/core";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: "column",
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row-reverse',
    }
  },
  contentAndPoem: {
    width: '100%',
    display: 'flex',
    flexDirection: "column",
  },
  wrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    position: 'relative'
  },
  pagingWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  }
}));

// 包含导航栏与页脚的容器
function Layout(props) {
  const {title, children, route, setContentsOpen, contentsOpen, nextPage, prePage, paging, poem} = props;
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={classes.root}>
        <Nav setContentsOpen={setContentsOpen} contentsOpen={contentsOpen}/>
        <div className={classes.contentAndPoem}>
          {
            route && (
              <Poem route={route.name} poem={poem}/>
            )
          }
          <div className={classes.wrapper}>
            {children}

            <div className={classes.pagingWrapper}>
              {
                ((prePage === 0 || prePage) && prePage !== -1) && (
                  <Paging
                    route={route}
                    prePage={prePage}
                    action={'上一页'}
                    paging={paging}
                  />
                )
              }
              {
                nextPage && (
                  <Paging
                    route={route}
                    nextPage={nextPage}
                    action={'下一页'}
                    paging={paging}
                  />
                )
              }
            </div>
            <ScrollToTop/>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
