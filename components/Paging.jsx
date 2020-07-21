import React from 'react';
import {Button, makeStyles} from "@material-ui/core";
import Link from 'next/link';
import {useRouter} from "next/router";


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

function Paging({nextPage, route, action, prePage, paging}) {
  const classes = useStyles();
  return (
    <div className={classes.buttonWrapper}>
      <Link
        prefetch={false}
        href={`${paging ? paging.href : route.route}/[page]`}
        as={`${paging ? paging.as : route.route}/${nextPage || prePage}`}
      >
        <Button
          component={'a'}
          className={classes.pagingButton}
        >
          {action}
        </Button>
      </Link>
    </div>
  );
}

export default Paging;
