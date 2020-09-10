import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: '100%',
    '& > div:nth-child(1)': {
      width: '800px',
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      [theme.breakpoints.only('sm')]: {
        width: '85%',
      },
      [theme.breakpoints.only('xs')]: {
        width: '90%',
      }
    }
  },
  poem: {
    '& > span:nth-child(1)': {
      marginLeft: 20
    },
    '& > span:nth-child(2)': {
      display:'inline-block',
      width: '20px',
      '& img': {
        height: '20px'
      }
    },
    '& > span:nth-child(3)': {
      letterSpacing: '1px',
      lineHeight: '25px',
      '@media (max-width:400px)': {
        lineHeight: '15px',
        fontSize: '8px'
      }
    },
  },
  websiteWrapper: {
    width: '100%',
    marginLeft: '10px',
    color: '#888',
    fontSize: '15px',
    '& > h2:nth-child(1)': {
      fontSize: '20px',
      marginTop: 50,
      color: '#000'
    }
  },
  aboutMe: {
    width: '100%',
    marginLeft: '10px',
    color: '#888',
    fontSize: '15px',
    '& > h2': {
      fontSize: '20px',
      marginTop: 50,
      color: '#000',
    }
  },
  blog: {
    width: '100%',
    marginLeft: '10px',
    color: '#888',
    fontSize: '15px',
    '& > h2': {
      fontSize: '20px',
      marginTop: 50,
      color: '#000',
    }
  }
}));
