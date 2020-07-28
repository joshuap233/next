import React from 'react';
import {Box, Grid} from "@material-ui/core";
import Layout from "../../components/Layout";
import ButtonBase from "@material-ui/core/ButtonBase";
import useStyles from './Tags.style';
import {getAllTagsPage, getTagsData} from '../../lib/tags';
import route from "../../misc/route";
import {getPageParams} from "../../lib/helper";
import paging from '../../config/paging';
import {getPage} from "../../misc/help";
import Link from "next/link";

function TagItem({name, image, describe, id}) {
  const classes = useStyles({image: image.url});
  return (
    <Grid
      item
      xs={12}
      sm={6}
      lg={6}
      xl={4}
      className={classes.tagWrapper}
    >
      <Link
        href={`${route.tag_articles('[tid]').route}/[page]`}
        as={`${route.tag_articles(id).route}/0`}
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
            title={describe}
            className={classes.tagDesc}>
            {describe}
          </div>
        </ButtonBase>
      </Link>
    </Grid>
  );
}


function PagePage({tags = [], nextPage, prePage, poem}) {
  const classes = useStyles();
  return (
    <Layout
      title={'标签'}
      prePage={prePage}
      nextPage={nextPage}
      route={route.tags}
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
  const {data} = await getTagsData(params.page);
  const [nextPage, prePage] = getPage(data.total, params.page, paging.tags);
  return {
    props: {
      tags: data.values,
      nextPage: nextPage,
      prePage: prePage,
    },
    unstable_revalidate: 5
  };
}

export async function getStaticPaths() {
  const total = await getAllTagsPage();
  const paths = getPageParams(total, paging.tags);
  return {
    paths,
    fallback: true
  };
}


export default PagePage;
