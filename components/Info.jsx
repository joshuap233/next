import React from 'react';
import {Tooltip, makeStyles} from "@material-ui/core";
import info from "../config/info";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import {CopyToClipboard} from "react-copy-to-clipboard";

const useStyles = makeStyles({
  wrapper: {
    width: '50px',
    fontWeight: 'bold',
    color: '#fff',
    display: 'flex',
    justifyContent: "center"
  },
  link: {
    display: 'block',
    height: '30px',
    width: '30px',
  },
  icon: {
    height: '100%',
    width: '100%',
  }
});

function Info() {
  const classes = useStyles();
  const handleOnCopy = () => {

  };

  return (
    <>
      <Tooltip title={'github'}>
        <div className={classes.wrapper}>
          <a
            href={info.github}
            target={"_blank"}
            className={classes.link}
          >
            <GitHubIcon className={classes.icon}/>
          </a>
        </div>
      </Tooltip>

      <Tooltip title={'stack overflow'}>
        <div className={classes.wrapper}>
          <a
            href={info.stackOverflow}
            target={"_blank"}
            className={classes.link}
          >
            <img
              className={classes.icon}
              src="/asset/stack-overflow.png" alt=""/>
          </a>
        </div>
      </Tooltip>

      <Tooltip title={'邮箱'}>
        <div className={classes.wrapper}>
          <CopyToClipboard
            text={info.email}
            onCopy={handleOnCopy}
          >
            <a
              className={classes.link}
              href={`mailto:${info.email}`}
            >
              <MailOutlineIcon className={classes.icon}/>
            </a>
          </CopyToClipboard>
        </div>
      </Tooltip>
    </>
  );
}

export default Info;
