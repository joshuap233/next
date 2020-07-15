import React from 'react';

import Head from 'next/head';
import {Box, Button, Grid} from "@material-ui/core";
import Layout from "../../components/Layout";
import ButtonBase from "@material-ui/core/ButtonBase";
import useStyles from './Tags.style';
import {getAllTagsPage, getTagsData} from '../../lib/tags';
import route from "../../misc/route";


function TagItem({name, url, desc}) {
  const classes = useStyles({url});
  return (
    <Grid
      item
      xs={12}
      sm={6}
      lg={6}
      xl={4}
      className={classes.tagWrapper}
    >
      <ButtonBase
        className={'ButtonBase'}
        component={Box}
        focusRipple
        boxShadow={3}
      >
        <div className={classes.tagName}>
          {name}
        </div>
        <div
          title={desc}
          className={classes.tagDesc}>
          {desc}
        </div>
      </ButtonBase>
    </Grid>
  );
}


function Page({tags, nextPage}) {
  const classes = useStyles();

  return (
    <Layout
      nextPage={nextPage}
      route={route.tags}
      poem={"靖康耻，犹未雪。臣子恨，何时灭。驾长车，踏破贺兰山缺"}
    >
      <div className={classes.wrapper}>
        <Grid
          container
          direction={"row"}
          wrap={"wrap"}
          spacing={2}
          className={classes.tagsWrapper}
        >
          {
            tags.map(item => (
              <TagItem key={item.id} {...item}/>
            ))
          }
        </Grid>
      </div>
    </Layout>
  );
}


export async function getStaticProps({params}) {
  const data = await getTagsData(params.page);
  const nextPage = parseInt(data.page) + 1;
  return {
    props: {
      tags: data.data.values,
      nextPage: nextPage < data.data.totalPage ? nextPage : false
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllTagsPage();
  return {
    paths,
    fallback: false
  };
}


export default Page;
