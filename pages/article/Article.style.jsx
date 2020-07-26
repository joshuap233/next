import {makeStyles} from "@material-ui/core";

export default makeStyles(theme => ({
  bg: {
    height: '100%',
    width: '100%',
    background: 'url(/asset/bg1-md.jpg) no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    position: 'relative',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width:500px)': {
      marginTop: '20px',
      height: '100px!important',
    },
    [theme.breakpoints.down('sm')]: {
      // 上侧导航栏
      background: 'none',
    },
  },
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
    padding: '0px 10px 0px 10px',
    [theme.breakpoints.down('sm')]: {
      // 上侧导航栏
      color: '#000',
    },
    '@media (max-width:500px)': {
      marginTop: '10px',
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
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      color: '#000'
    },
    '@media (max-width:400px)': {
      display: 'none'
    }
  },
  articleRoot: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width:500px)': {
      marginTop: '50px',
    },
  },
  articleWrapper: {
    width: '100%',
    '@media (max-width:400px)': {
      padding: '2px!important'
    },
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
  },
  tagsWrapper: {
    width: '100%',
    fontSize: '20px',
    display: "flex",
    justifyContent: "center",
    '& > div': {
      width: '80%',
      marginTop: 50
    },
    '& .tags': {
      marginTop: 20,
      marginBottom: 20,
      display: "flex",
      alignItems: "center",
    },
    '& span': {
      marginLeft: 10
    }
  },
  commentsWrapper: {
    width: '100%',
    fontSize: '20px',
    display: "flex",
    justifyContent: "center",
    '& > div': {
      width: '80%',
      marginTop: 50,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }
}));
