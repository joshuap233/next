import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {Button} from "@material-ui/core";
import Container from "../../components/Container";
import useStyles from './Articles.style';

function Excerpt({pid}) {
  const classes = useStyles();
  return (
    <div className={classes.excerptWrapper}>
      <div>
        <Link href={`/article/${pid}}`}>
          <div className={classes.articleInfo}>
            <h2>我做了一个可以锻炼视力的 App</h2>
            <p>
              <span/>
              没错，我做了一个新 App，可以帮助你放松眼睛、缓解屏幕疲劳，甚至改善视力。
              没错，我做了一个新 App，可以帮助你放松眼睛、缓解屏幕疲劳，甚至改善视力。
            </p>

            <div>
              1条评论|2019-2-10 3:00|新app,测试
            </div>
          </div>
        </Link>
        <Link href={`/article/${pid}}`}>
          <div className={classes.pic}/>
        </Link>
      </div>
    </div>
  );
}

function Index() {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.wrapper}>
        <Excerpt pid={1}/>
        <Excerpt pid={2}/>
        <Excerpt pid={3}/>
        <Button
          className={classes.pagingButton}>
          下一页
        </Button>
      </div>
    </Container>
  );
}

export default Index;
