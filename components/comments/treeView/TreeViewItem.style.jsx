import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  node: ({level}) => ({
    padding: level === 0 ? 40 : 10,
    marginBottom: level === 0 ? 40 : 10,
    [theme.breakpoints.only('xs')]: {
      padding: level === 0 ? 20 : 5,
      marginBottom: level === 0 ? 20 : 5,
    }
  }),
  contentWrapper: ({level}) => ({
    marginLeft: level <= 2 ? level * 20 : 3 * 20,
    fontSize: '15px',
    [theme.breakpoints.only('xs')]: {
      marginLeft: level <= 2 ? level * 5 : 3 * 5,
    }
  }),
  userInfoWrapper: {
    display: "flex",
    alignItems: 'center'
  },
  avatar: {
    height: 40,
    width: 40,
    [theme.breakpoints.only('xs')]: {
      height: 30,
      width: 30,
    },
    '& img': {
      height: '100%',
      width: '100%',
      borderRadius: 20
    }
  },
  userInfo: {
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& > :nth-child(2)': {
      marginTop: 0,
      marginBottom: 0,
      color: '#C4C4C4',
      display: 'flex',
      alignItems: 'center',
      fontSize: '15px',

    },
    '& .create_date': {
      marginLeft: 10,
      marginRight: 10,
      [theme.breakpoints.only('xs')]: {
        marginLeft: 0,
        marginRight: 10,
      },
    },
    '& .browser': {
      [theme.breakpoints.only('xs')]: {
        display: 'none'
      },
    }
  },
  nickname: ({link}) => ({
    color: link ? '#7986cb' : '#000',
    display: 'block',
    marginBottom: 0,
    fontSize: '18px',
    [theme.breakpoints.only('xs')]: {
      fontSize: '15px',
    },
  }),
  reply: {
    color: theme.palette.primary.light,
    '& .replyIcon': {
      cursor: "pointer",
      color: '#000',
      [theme.breakpoints.only('xs')]: {
        fontSize: '15px',
      },
    }
  },
  blockquote: {
    borderLeft: '6px solid #DDDDDD',
    maxHeight: 150,
    overflowY: "hidden",
    overflowX: 'auto'
  },
  link: {
    textDecoration: 'none',
    color: '#757575',
    '& > :nth-child(1)': {
      // color: theme.palette.secondary.light
    }
  },
  overflow: {
    maxHeight: 100,
    overflow: "hidden",
  },
  scroll: {
    overflowX: 'auto'
  },
  loadMore: {
    height: 30,
    background: '#fff',
    opacity: 0.8,
    marginTop: -10,
    display: "flex",
    justifyContent: "center"
  },
  shake: {
    animation: 'shake 1.0s 2',
  },
}));
