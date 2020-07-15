import React from 'react';

import Layout from '../../components/Layout';
import {Avatar, Divider, Box} from '@material-ui/core';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import useStyles from './Blog.style';
import {getAllBlogPage, getBlogData} from '../../lib/blog';
import route from '../../misc/route';

function BlogItem({index, content, time}) {
  const dark = React.useMemo(() => {
    return index % 2 === 0;
  }, []);

  const classes = useStyles({dark});
  return (
    <div className={classes.blogWrapper}>
      <div className={classes.avatar}>
        <Avatar src="/asset/avatar.jpeg"/>
      </div>
      <Box
        boxShadow={2}
        className={classes.blogContent}
      >
        <div>
          {content}
        </div>
        <Divider
          variant="middle"
          classes={{root: dark ? classes.divider : null}}
        />
        <div className={'eventIcon'}>
          <EventAvailableIcon/>
          <span className={'time'}>{time}</span>
        </div>
      </Box>
    </div>
  );
}

function Page({blog, nextPage}) {
  const classes = useStyles();
  return (
    <Layout
      route={route.blog}
      nextPage={nextPage}
      poem={"君不见黄河之水天上，奔流到海不复回.君不见高堂明镜悲白发，朝如青丝暮成雪"}
    >
      <div className={classes.wrapper}>
        {
          blog.map(item => {
            return (
              <BlogItem
                key={item.id}
                index={item.id}
                content={item.content}
                time={item.time}
              />
            );
          })
        }
      </div>
    </Layout>
  );
}

export async function getStaticProps({params}) {
  const data = await getBlogData(params.page);
  const nextPage = parseInt(params.page) + 1;

  return {
    props: {
      blog: data.values,
      nextPage: nextPage < data.totalPage ? nextPage : false
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllBlogPage();
  return {
    paths,
    fallback: false
  };
}

export default Page;
