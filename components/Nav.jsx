import React from 'react';
import Link from 'next/link';
import {Box} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Tooltip from '@material-ui/core/Tooltip';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import InfoIcon from '@material-ui/icons/Info';
import LabelIcon from '@material-ui/icons/Label';
import ArchiveIcon from '@material-ui/icons/Archive';
import ForumIcon from '@material-ui/icons/Forum';
import CommentIcon from '@material-ui/icons/Comment';

function Nav() {
  return (
    <nav>
      <div style={{
        width: '400px',
      }}/>
      <Box
        boxShadow={2}
        style={{
          position: 'fixed',
          width: '400px',
          height: '100%',
          minHeight: '900px',
          background: 'url(/asset/nv-bg.jpg) no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',

          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <div style={{marginTop: '80px'}}>
          <img
            style={{
              border: '2px solid #fff',
              height: '150px',
              width: '150px',
              boxShadow: '0 2px 5px rgba(0,0,25,0.1), 0 5px 75px 1px rgba(0,0,50,0.2)',
              borderRadius: '75px'
            }}
            src="/asset/avatar.jpeg" alt=""/>
        </div>
        <div style={{
          // color: '#fff',
          fontWeight: 'bold',
          fontSize: '20px'
        }}>
          Joshua Peng
        </div>
        <div style={{
          color: '#000',
          letterSpacing: '2px'
        }}>
          宁说啥都对
        </div>
        <Tooltip title={'主页'}>
          <Box
            boxShadow={3}
            style={{
              marginTop: '40px',
              height: '30px',
              width: '30px',
              borderRadius: '15px',
              background: '#fff',

              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Link href={'/'}>
              <a><HomeIcon/></a>
            </Link>
          </Box>
        </Tooltip>


        <div style={{
          marginTop: '10px',
          height: '100px',
          width: '300px',

          display: 'flex',
          alignItems: 'center',
          justifyContent: "space-around"
        }}>
          <Tooltip title={'文章'}>
            <div style={{
              width: '50px',
              color: '#fff',
              display: 'flex',
              justifyContent: "center"
            }}>
              <Link href={'/articles'}>
                <a><ImportContactsIcon/></a>
              </Link>
            </div>
          </Tooltip>


          <Tooltip title={'标签'}>
            <div style={{
              width: '50px',
              // borderRight: '1px solid #fff',
              fontWeight: 'bold',
              color: '#fff',
              display: 'flex',
              justifyContent: "center"
            }}>
              <Link href={'/tags'}>
                <a><LabelIcon/></a>
              </Link>
            </div>
          </Tooltip>

          <Tooltip title={'归档'}>
            <div style={{
              width: '50px',
              // borderRight: '1px solid #fff',
              fontWeight: 'bold',
              color: '#fff',
              display: 'flex',
              justifyContent: "center"
            }}>
              <Link href={'/archive'}>
                <a><ArchiveIcon/></a>
              </Link>
            </div>
          </Tooltip>
          <Tooltip title={'日志'}>
            <div style={{
              width: '50px',
              // borderRight: '1px solid #fff',
              fontWeight: 'bold',
              color: '#fff',
              display: 'flex',
              justifyContent: "center"
            }}>
              <Link href={'/feeling'}>
                <a><CommentIcon/></a>
              </Link>
            </div>
          </Tooltip>

          <Tooltip title={'关于'}>
            <div style={{
              width: '50px',
              // borderRight: '1px solid #fff',
              fontWeight: 'bold',
              color: '#fff',
              display: 'flex',
              justifyContent: "center"
            }}>
              <Link href={'/about'}>
                <a><InfoIcon/></a>
              </Link>
            </div>
          </Tooltip>
        </div>

        <div style={{
          marginTop: '20px',
          height: '50px',
          width: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: "space-around"
        }}>

          <Tooltip title={'github'}>
            <div style={{
              width: '50px',
              fontWeight: 'bold',
              color: '#fff',

              display: 'flex',
              justifyContent: "center"
            }}>
              <GitHubIcon style={{
                height: '30px',
                width: '30px',
              }}/>
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
              <img
                style={{
                  // border: '2px solid #fff',
                  height: '30px',
                  width: '30px',
                }}
                src="/asset/stack-overflow.png" alt=""/>
            </div>
          </Tooltip>

          <Tooltip title={'邮箱'}>
            <div style={{
              width: '50px',
              fontWeight: 'bold',
              color: '#fff',

              display: 'flex',
              justifyContent: "center"
            }}>
              <MailOutlineIcon style={{
                height: '30px',
                width: '30px',
              }}/>
            </div>
          </Tooltip>
        </div>

        {/*<div style={{*/}
        {/*  marginTop: '40px',*/}
        {/*  height: '50px',*/}
        {/*  width: '400px',*/}
        {/*  background: '#fff',*/}
        {/*  color: '#000'*/}
        {/*}}>*/}
        {/*  关于我*/}
        {/*</div>*/}
      </Box>
    </nav>
  );
}

export default Nav;
