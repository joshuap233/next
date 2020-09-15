import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
  wrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  excerptWrapper: {
    width: '100%',
    height: '300px',
    background: '#fff',
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.only('xs')]: {
      marginTop: '10px',
      marginBottom: '80px',
      height: '150px',
      justifyContent: 'flex-start!important',
    },
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.only('sm')]: {
        width: '90%',
      },
      [theme.breakpoints.up('md')]: {
        width: '85%',
      },
      [theme.breakpoints.up('lg')]: {
        width: '80%',
      }
    },

  },
  articleInfo: {
    margin: '10px',
    cursor: 'pointer',
    width: '100%',
    [theme.breakpoints.only('sm')]: {
      padding: theme.spacing(2)
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5)
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(8)
    },
    '& > .title': {
      fontSize:'1.5rem'
    },
    '& > .content': {
      letterSpacing: '3px',
      lineHeight: '20px',
      [theme.breakpoints.only('xs')]: {
        letterSpacing: '1.5px!important',
      },
    },
    '& > span': {
      marginLeft: '10px',
    },
    '& > div': {
      color: '#888',
      letterSpacing: '2px',
      lineHeight: '20px',
      [theme.breakpoints.only('xs')]: {
        letterSpacing: '1px',
      },
    },
  },
  pic: {
    width: '400px',
    height: '200px',
    boxShadow: '0 2px 5px rgba(0,0,25,0.1), 0 5px 75px 1px rgba(0,0,50,0.2)',
    borderRadius: '5px',
    cursor: 'pointer',
    '& img': {
      width: 'auto',
      height: 'auto',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    '@media (max-width:900px)': {
      width: 250,
      height: 150,
    },
    '@media (max-width:840px)': {
      width: 0,
      height: 0,
      background: 'none',
    },
  }
}));

