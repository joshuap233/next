import React from 'react';
import Layout from "../../components/Layout";
import {Box, Divider, Grid} from "@material-ui/core";
import TodayIcon from '@material-ui/icons/Today';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import useStyles from './Archive.style';
import {getAllArchivePage, getArchiveData} from '../../lib/archive';
import route from "../../misc/route";
import Link from "next/link";
import {getPageParams} from "../../lib/helper";
import {formatTime, getPage} from "../../misc/help";
import paging from '../../config/paging';

function ArchiveItem({time, title, tags, id}) {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={12}
      sm={6}
      className={classes.articleWrapper}
    >
      <Link href={`${route.article.route}/[pid]`} as={`${route.article.route}/${id}`}>
        <Box
          boxShadow={3}
          className={classes.box}
        >
          <div className={classes.title}>
            {title}
          </div>
          <Divider/>
          <div className={classes.infoWrapper}>
            <div className={classes.info}>
              <TodayIcon/>
              <span>
            {formatTime(time)}
          </span>
            </div>
            <div className={classes.tags}>
              <LabelImportantIcon/>
              {
                tags.map(item => (
                  <span key={item.id}>
                  {item.name}
                </span>
                ))
              }
            </div>
          </div>
        </Box>
      </Link>
    </Grid>
  );
}


function PagePage({prePage, nextPage, archives = [], poem}) {
  const classes = useStyles();

  return (
    <Layout
      title={'归档'}
      poem={poem}
      prePage={prePage}
      nextPage={nextPage}
      route={route.archive}
    >
      <div className={classes.wrapper}>
        <div>
          <Grid
            container
            direction={"row"}
            wrap={"wrap"}
            spacing={1}
            className={classes.articlesWrapper}
          >
            {
              archives.map(item => (
                <ArchiveItem
                  key={item.id}
                  id={item.id}
                  time={item.time}
                  title={item.title}
                  tags={item.tags}
                />
              ))
            }
          </Grid>
        </div>
      </div>
    </Layout>
  );
}


export async function getStaticProps({params}) {
  const {data, poem} = await getArchiveData(params.page);
  const [nextPage, prePage] = getPage(data.data, params.page, paging.archive);

  return {
    props: {
      archives: data.values,
      nextPage: nextPage,
      prePage: prePage,
      poem
    },
    unstable_revalidate: 5
  };
}


export async function getStaticPaths() {
  const total = await getAllArchivePage();
  const paths = getPageParams(total, paging.archive);
  return {
    paths,
    fallback: true
  };
}

export default PagePage;
