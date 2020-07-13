import React from 'react';
import Tooltip from "@material-ui/core/Tooltip";
import info from "../config/info";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import {CopyToClipboard} from "react-copy-to-clipboard";


function Info() {

  const handleOnCopy = () => {

  };

  return (
    <>
      <Tooltip title={'github'}>
        <div style={{
          width: '50px',
          fontWeight: 'bold',
          color: '#fff',

          display: 'flex',
          justifyContent: "center"
        }}>
          <a
            href={info.github}
            target={"_blank"}
            style={{
              display: 'block',
              height: '30px',
              width: '30px',
            }}
          >
            <GitHubIcon
              style={{
                height: '100%',
                width: '100%',
              }}/>
          </a>
        </div>
      </Tooltip>

      <Tooltip title={'stack overflow'}>
        <div style={{
          width: '50px',
          fontWeight: 'bold',
          color: '#fff',

          display: 'flex',
          justifyContent: "center"
        }}>
          <a
            href={info.stackOverflow}
            target={"_blank"}
            style={{
              display: 'block',
              height: '30px',
              width: '30px',
            }}
          >
            <img
              style={{
                // border: '2px solid #fff',
                height: '100%',
                width: '100%',
              }}
              src="/asset/stack-overflow.png" alt=""/>
          </a>
        </div>
      </Tooltip>

      <Tooltip title={'邮箱'}>
        <div style={{
          width: '50px',
          fontWeight: 'bold',
          color: '#fff',

          display: 'flex',
          justifyContent: "center",
        }}>
          <CopyToClipboard
            text={info.email}
            onCopy={handleOnCopy}
          >
            <a
              style={{
                height: '30px',
                width: '30px',
              }}
              href={`mailto:${info.email}`}
              // target={"_blank"}
            >
              <MailOutlineIcon style={{
                height: '100%',
                width: '100%',
              }}/>
            </a>
          </CopyToClipboard>
        </div>
      </Tooltip>
    </>
  );
}

export default Info;
