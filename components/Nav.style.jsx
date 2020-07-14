import {makeStyles} from "@material-ui/core/styles";


export default makeStyles((theme) => ({
  navWrapper: {
    width: 300,
    [theme.breakpoints.only('xs')]: {
      // 上侧导航栏
      height: 200,
    },
    [theme.breakpoints.down('sm')]: {
      // 上侧导航栏
      width: '100%',
      height: 300,
    },
    [theme.breakpoints.up('lg')]: {
      width: 400,
    }
  },
  navItemRoot: {
    width: 300,

    position: 'fixed',
    height: '100%',
    minHeight: '900px',
    background: 'url(/asset/nv-bg.jpg) no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.only('xs')]: {
      // 上侧导航栏
      height: 200,
    },
    [theme.breakpoints.down('sm')]: {
      // 上侧导航栏
      width: '100%',
      height: 300,
      minHeight: 0,
      top: 0,
      position: 'absolute',
      flexDirection: 'column',
    },
    [theme.breakpoints.up('lg')]: {
      width: 400,
    },
  },
  avatarWrapper: {
    marginTop: '80px',
    [theme.breakpoints.only('xs')]: {
      // 上侧导航栏
      marginTop: 10,
    },
    [theme.breakpoints.only('sm')]: {
      // 上侧导航栏
      marginTop: 20,
    },
  },
  avatar: {
    border: '2px solid #fff',
    height: '150px',
    width: '150px',
    boxShadow: '0 2px 5px rgba(0,0,25,0.1), 0 5px 75px 1px rgba(0,0,50,0.2)',
    borderRadius: '75px',
    [theme.breakpoints.only('xs')]: {
      // 上侧导航栏
      height: '50px',
      width: '50px',
    },
    [theme.breakpoints.only('sm')]: {
      // 上侧导航栏
      height: '80px',
      width: '80px',
    },
  },
  authorName: {
    fontWeight: 'bold',
    fontSize: '20px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  motto: {
    color: '#000',
    letterSpacing: '2px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  homeIconWrapper: {
    marginTop: '40px',
    height: '30px',
    width: '30px',
    borderRadius: '15px',
    background: '#fff',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: '10px',
    },
  },
  navItem: {
    width: '50px',
    color: '#fff',
    display: 'flex',
    justifyContent: "center"
  },
  infoIcon: {
    marginTop: '20px',
    height: '50px',
    width: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-around",
    [theme.breakpoints.down('sm')]: {
      marginTop: 10,
      display: 'none'
    },
  },
  nav: {
    marginTop: '10px',
    height: '100px',
    width: '300px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-around"
  }
}));
