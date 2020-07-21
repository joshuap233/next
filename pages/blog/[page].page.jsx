import React from 'react';

import Layout from '../../components/Layout';
import {Box, Divider} from '@material-ui/core';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import useStyles from './Blog.style';
import {getAllBlogPage, getBlogData} from '../../lib/blog';
import route from '../../misc/route';
import {getPageParams} from "../../lib/helper";
import {formatTime, getPage} from "../../misc/help";
import paging from '../../config/paging';

function BlogItem({index, content, time}) {
  const dark = React.useMemo(() => {
    return index % 2 === 0;
  }, []);

  const classes = useStyles({dark});
  return (
    <div className={classes.blogWrapper}>
      <div className={classes.avatar}>
        <img src="/asset/avatar.jpeg" alt={""}/>
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
          <span className={'time'}>{formatTime(time)}</span>
        </div>
      </Box>
    </div>
  );
}

function PagePage({blog = [], nextPage, prePage, poem}) {
  const classes = useStyles();
  return (
    <Layout
      route={route.blog}
      prePage={prePage}
      nextPage={nextPage}
      poem={poem}
    >
      <div className={classes.wrapper}>
        {
          blog.map(item => {
            return (
              <BlogItem
                key={item.id}
                index={item.id}
                content={item.content}
                time={item.change_date}
              />
            );
          })
        }
      </div>
    </Layout>
  );
}

export async function getStaticProps({params}) {
  const {data, poem} = await getBlogData(params.page);
  const [nextPage, prePage] = getPage(data.total, params.page, paging.blog);

  return {
    props: {
      blog: data.values,
      nextPage: nextPage,
      prePage: prePage,
      poem
    }
  };
}

export async function getStaticPaths() {
  const total = await getAllBlogPage();
  const paths = getPageParams(total, paging.blog);
  return {
    paths,
    fallback: false
  };
}

export default PagePage;
