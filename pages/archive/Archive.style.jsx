import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: '100%',
    '& > div': {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      width: '100%',
      cursor: "pointer"
    }
  },
  articlesWrapper: {
    padding: theme.spacing(2),
    [theme.breakpoints.only('xs')]: {
      padding: theme.spacing(1),
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(20),
      paddingRight: theme.spacing(20),
    },

  },
  articleWrapper: {
    position: "relative",
  },
  title: {
    height: '40px',
    display: "flex",
    alignItems: "center",
    marginLeft: '20px',

    overflow: "hidden",
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  infoWrapper: {
    display: "flex",
    marginTop: '20px',
    marginLeft: '20px'
  },
  info: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    '& span': {
      marginLeft: 5
    }
  },
  tags: {
    marginLeft: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    '& span': {
      marginLeft: 5
    },
    overflow: "hidden",
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }
}));
