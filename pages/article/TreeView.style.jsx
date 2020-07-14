import {makeStyles} from "@material-ui/core";
export const treeViewMaxWidth = 250;

export default makeStyles((theme) => ({
  root: {
    position: 'fixed',
    left: ({position: {x}}) => x,
    top: ({position: {y}}) => y,
    '& a': {
      color: '#333333'
    },
    '& li': {
      // listStyleType: 'disc'
      listStyleType: 'none'
    },
    '& p': {
      lineHeight: '10px',
      whiteSpace: 'nowrap',
    },
    zIndex:1111
  },
  tree: {
    borderRadius: 10,
    padding: 15,
    background: '#fff',
    minWidth: 200,
    maxWidth: treeViewMaxWidth,
    overflow: 'auto',
    display: ({open}) => {
      return open ? '' : 'none';
    },
  },
  icon: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    color: '#000',
    [theme.breakpoints.only("xs")]: {
      display: 'none',
    },
  },
  switch: {
    color: '#000',
    position: 'fixed',
    right: 10,
    top: '50%',
    transform: 'translateY(-50%)',
  }
}));
