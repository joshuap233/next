import React from 'react';
import Container from "../../components/Container";
import {Box, Divider, Button, Grid} from "@material-ui/core";
import TodayIcon from '@material-ui/icons/Today';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import useStyles from './Archive.style';


function ArchiveItem() {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={12}
      sm={6}
      className={classes.articleWrapper}
    >
      <Box
        boxShadow={3}
        style={{
          padding: 10
        }}>
        <div className={classes.title}>
          title
        </div>
        <Divider/>
        <div className={classes.infoWrapper}>
          <div className={classes.info}>
            <TodayIcon/>
            <span>
            2019/2/10
          </span>
          </div>
          <div className={classes.tags}>
            <LabelImportantIcon/>
            {
              [
                {id: 1, name: '标签一'},
                {id: 2, name: '标签二'},
                {id: 4, name: '标签二'},
              ].map(item => (
                <span key={item.id}>
                  {item.name}
                </span>
              ))
            }
          </div>
        </div>
      </Box>
    </Grid>
  );
}


function Index() {
  const classes = useStyles();
  return (
    <Container
      poem={"今我来思,雨雪霏霏"}
      route={"归档"}
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
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
                <ArchiveItem key={item}/>
              ))
            }
          </Grid>
          <Button
            className={classes.pagingButton}
          >
            下一页
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Index;
