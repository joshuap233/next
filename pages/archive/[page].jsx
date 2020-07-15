import React from 'react';
import Layout from "../../components/Layout";
import {Box, Divider, Grid} from "@material-ui/core";
import TodayIcon from '@material-ui/icons/Today';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import useStyles from './Archive.style';
import {getAllArchivePage, getArchiveData} from '../../lib/archive';
import route from "../../misc/route";
import Link from "next/link";


function ArchiveItem({time, title, tags, id}) {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={12}
      sm={6}
      className={classes.articleWrapper}
    >
      <Link href={`${route.article.route}/${id}`}>
        <Box
          boxShadow={3}
          style={{
            padding: 10
          }}>
          <div className={classes.title}>
            {title}
          </div>
          <Divider/>
          <div className={classes.infoWrapper}>
            <div className={classes.info}>
              <TodayIcon/>
              <span>
            {time}
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


function Page({archives, nextPage}) {
  const classes = useStyles();

  return (
    <Layout
      nextPage={nextPage}
      poem={"今我来思,雨雪霏霏"}
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
  const data = await getArchiveData(params.page);
  const nextPage = parseInt(params.page) + 1;
  return {
    props: {
      archives: data.values,
      nextPage: nextPage < data.totalPage ? nextPage : false
    }
  };
}


export async function getStaticPaths() {
  const paths = getAllArchivePage();
  return {
    paths,
    fallback: false
  };
}

export default Page;
