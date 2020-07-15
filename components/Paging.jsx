import React from 'react';
import {Button, makeStyles} from "@material-ui/core";
import Link from 'next/link';


const useStyles = makeStyles({
  buttonWrapper: {
    display: 'flex',
    justifyContent: "center"
  },
  pagingButton: {
    marginTop: 40,
    width: '100px',
    height: '38px',
  }
});

function Paging({nextPage, route}) {
  const classes = useStyles();
  return (
    <div className={classes.buttonWrapper}>
      <Link href={`${route.route}/${nextPage}`}>
        <Button component={'a'} className={classes.pagingButton}>
          下一页
        </Button>
      </Link>
    </div>
  );
}

export default Paging;
