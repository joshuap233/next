import React from 'react';

import Head from 'next/head';
import {Box, Button, Grid} from "@material-ui/core";
import Container from "../../components/Container";
import ButtonBase from "@material-ui/core/ButtonBase";
import useStyles from './Tags.style';


const tags = [
  {
    id: 1,
    name: 'Ubuntu',
    desc: '这是简介,这是简介,这是简介',
    url: '/asset/tag-pic.png'
  }, {
    id: 2,
    name: 'React',
    desc: '这是简介,这是简介,这是简介',
    url: '/asset/tag-pic.png'
  }, {
    id: 3,
    name: 'Linux',
    desc: '这是简介,这是简介,这是简介',
    url: '/asset/tag-pic.png'
  }, {
    id: 4,
    name: 'Python',
    desc: '这是简介,这是简介,这是简介',
    url: '/asset/tag-pic.png'
  }, {
    id: 5,
    name: 'Flask',
    desc: '这是简介,这是简介,这是简介...............................................',
    url: '/asset/tag-pic.png'
  }, {
    id: 6,
    name: 'JavaScript',
    desc: '这是简介,这是简介,这是简介',
    url: '/asset/tag-pic.png'
  },
];

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


function Index() {
  const classes = useStyles();
  return (
    <Container
      route={"标签"}
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
        <Button className={classes.pagingButton}>
          下一页
        </Button>
      </div>
    </Container>
  );
}

export default Index;
