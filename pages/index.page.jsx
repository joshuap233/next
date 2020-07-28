import Head from 'next/head';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "next/link";
import React from "react";
import Info from '../components/Info';
import Search from "../components/Search";
import {Button, makeStyles} from "@material-ui/core";
import useInfo from '../config/info';
import route from "../misc/route";
import {combineClassName} from "../misc/help";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  top: {
    height: '95%',
    maxHeight: 750,
    width: '100%',
    float: 'left',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '0 0px 35px 35px',

    background: '#3F3E3A url(/asset/home/home-sm-zip.jpg) no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.only('xs')]: {
      height: '100%',
      maxHeight: 'none',
      borderRadius: '0',
    },
    [theme.breakpoints.up('lg')]: {
      background: '#3F3E3A url(/asset/home/home-lg-zip.jpg) no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }
  },
  logo: {
    marginTop: 100,
    height: 80,
    [theme.breakpoints.only('xs')]: {
      height: 50,
    }
  },
  nickname: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '20px',
    marginTop: 10,
    letterSpacing: '2px',
    [theme.breakpoints.only('xs')]: {
      fontSize: '15px',
      fontWeight: 'none',
    }
  },
  aboutWrapper: {
    marginTop: 20,
    display: 'flex',
  },
  button: {
    height: '40px',
    width: '140px',
    borderRadius: '15px',
    letterSpacing: '4px',
    fontWeight: 'bold',
    [theme.breakpoints.only('xs')]: {
      height: '35px',
      width: '100px',
      borderRadius: '8px',
    }
  },
  aboutButton: {
    border: '4px solid #484643',
    marginRight: 30,
    background: '#3F3E3A',
    color: '#fff',
    '&:hover': {
      color: '#000',
      border: "4px solid #fff!important"
    },
  },
  articleButton: {
    color: '#000',
    border: '4px solid #484643',
    '&:hover': {
      color: '#fff',
      background: '#3F3E3A!important',
      border: "4px solid #fff!important"
    }
  },
  searchWrapper: {
    display: "flex",
    justifyContent: "center",
    width: '100%',
    marginTop: 100,
    '& > div': {
      width: 400,
      [theme.breakpoints.only('xs')]: {
        width: 200
      }
    },
  },
  contact: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '20px',
    marginTop: 80,
    letterSpacing: '2px',
  },
  infoIcon: {
    marginTop: 20,
    display: 'flex',
  },
  extendBtnWrapper: {
    marginTop: '100px',
  },
  extendIcon: {
    color: '#fff'
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>

      <div className={classes.top}>
        <div>
          <img src={"/asset/logo.svg"} alt="" className={classes.logo}/>
        </div>
        <div className={classes.nickname}>
          我是{useInfo.nickname}, 欢迎来到我的博客
        </div>
        <div className={classes.aboutWrapper}>
          <div>
            <Link href={route.about.route}>
              <a>
                <Button className={combineClassName(classes.aboutButton, classes.button)}>
                  关于我
                </Button>
              </a></Link>
          </div>
          <div>
            <Link href={`${route.articles.route}/[page]`} as={`${route.articles.route}/0`}>
              <a>
                <Button className={combineClassName(classes.articleButton, classes.button)}>
                  文章
                </Button>
              </a>
            </Link>
          </div>
        </div>
        <div className={classes.searchWrapper}>
          <div>
            <Search/>
          </div>
        </div>
        <div className={classes.contact}>
          联系我
        </div>
        <div className={classes.infoIcon}>
          <Info/>
        </div>
        <div className={classes.extendBtnWrapper}>
          <Link href={`${route.articles.route}/[page]`} as={`${route.articles.route}/0`}>
            <a>
              <ExpandMoreIcon className={classes.extendIcon}/>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
