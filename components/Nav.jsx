import React from 'react';
import Link from 'next/link';
import {Box} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Tooltip from '@material-ui/core/Tooltip';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import InfoIcon from '@material-ui/icons/Info';
import LabelIcon from '@material-ui/icons/Label';
import ArchiveIcon from '@material-ui/icons/Archive';
import CommentIcon from '@material-ui/icons/Comment';
import Info from "./Info";
import useStyles from './Nav.style';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';


const navs = [
  {title: '文章', route: '/articles', icon: <ImportContactsIcon/>},
  {title: '标签', route: '/tags', icon: <LabelIcon/>},
  {title: '归档', route: '/archive', icon: <ArchiveIcon/>},
  {title: "日志", route: '/feeling', icon: <CommentIcon/>},
  {title: '关于', route: '/about', icon: <InfoIcon/>}
];


function Nav({setContentsOpen, contentsOpen}) {
  const classes = useStyles();

  const handleContentClick = () => {
    setContentsOpen && setContentsOpen(open => !open);
  };

  return (
    <nav>
      <div className={classes.navWrapper}/>
      <Box
        boxShadow={2}
        className={classes.navItemRoot}>
        <div className={classes.avatarWrapper}>
          <img
            className={classes.avatar}
            src="/asset/avatar.jpeg"
            alt=""
          />
        </div>
        <div className={classes.authorName}>
          Joshua Peng
        </div>
        <div className={classes.motto}>
          宁说啥都对
        </div>
        <Tooltip title={'主页'}>
          <Box
            boxShadow={3}
            className={classes.homeIconWrapper}
          >
            <Link href={'/'}>
              <a><HomeIcon/></a>
            </Link>
          </Box>
        </Tooltip>
        <div className={classes.nav}>
          {
            navs.map(item => (
              <Tooltip title={item.title} key={item.title}>
                <div className={classes.navItem}>
                  <Link href={item.route}>
                    <a>{item.icon}</a>
                  </Link>
                </div>
              </Tooltip>
            ))
          }
        </div>
        <div className={classes.infoIcon}>
          <Info/>
        </div>
        {
          setContentsOpen && (
            <div onClick={handleContentClick} className={classes.visibilityIcon}>
              <Tooltip title={`${contentsOpen ? '关闭' : '打开'}目录`}>
                {
                  contentsOpen ? <VisibilityOffIcon/> : <VisibilityIcon/>
                }
              </Tooltip>
            </div>
          )
        }

      </Box>
    </nav>
  );
}


export default Nav;
