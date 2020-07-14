import {makeStyles} from "@material-ui/core";

export default makeStyles(theme => ({
  bg: ({innerWidth}) => ({
    height: '100%',
    width: '100%',
    background: 'url(/asset/article-bg.jpg) no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    position: 'relative',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      // 上侧导航栏
      background: 'none',
    },
  }),
  placeHolder: {
    height: '400px',
    width: '100%',
    zIndex: -2,
    [theme.breakpoints.down('sm')]: {
      // 上侧导航栏
      height: '200px'
    },
  },
  title: {
    color: '#fff',
    marginTop: '-150px',
    [theme.breakpoints.down('sm')]: {
      // 上侧导航栏
      color: '#000',
    },
  },
  articleInfo: {
    color: '#fff',
    marginTop: '-50px',
    height: '100px',
    '& p': {
      padding: '20px 0 20px 0'
    },
    [theme.breakpoints.down('sm')]: {
      // 上侧导航栏
      color: '#000',
    },
  },
  poem: {
    color: '#fff',
    padding: '10px 0 10px 0',
    fontWeight: 'bold'
  },
  articleRoot: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  articleWrapper: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: '10px'
    },
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '80%'
    },
  }
}));
