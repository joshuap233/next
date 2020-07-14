import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {Button} from "@material-ui/core";
import Container from "../../components/Container";
import useStyles from './Articles.style';

const excerpts = [
  {
    id: 1,
    content: '没错，我做了一个新 App，可以帮助你放松眼睛、缓解屏幕疲劳，甚至改善视力。\n' +
      '没错，我做了一个新 App，可以帮助你放松眼睛、缓解屏幕疲劳，甚至改善视力。',
    title: "我做了一个可以锻炼视力的 App",
    pid: 1,
    pic: '/asset/test1.svg',
    time: '2019-2-10 3:00',
    commentsCount: 1,
    tag: '新app,测试'
  }, {
    id: 2,
    content: '没错，我做了一个新 App，可以帮助你放松眼睛、缓解屏幕疲劳，甚至改善视力。\n' +
      '没错，我做了一个新 App，可以帮助你放松眼睛、缓解屏幕疲劳，甚至改善视力。',
    title: "我做了一个可以锻炼视力的 App",
    pid: 2,
    pic: '/asset/test1.svg',
    time: '2019-2-10 3:00',
    commentsCount: 1,
    tag: '新app,测试',
  }, {
    id: 3,
    content: '没错，我做了一个新 App，可以帮助你放松眼睛、缓解屏幕疲劳，甚至改善视力。\n' +
      '没错，我做了一个新 App，可以帮助你放松眼睛、缓解屏幕疲劳，甚至改善视力。',
    title: "我做了一个可以锻炼视力的 App",
    pid: 3,
    pic: '/asset/test1.svg',
    time: '2019-2-10 3:00',
    commentsCount: 1,
    tag: '新app,测试'
  }, {
    id: 4,
    content: '没错，我做了一个新 App，可以帮助你放松眼睛、缓解屏幕疲劳，甚至改善视力。\n' +
      '没错，我做了一个新 App，可以帮助你放松眼睛、缓解屏幕疲劳，甚至改善视力。',
    title: "我做了一个可以锻炼视力的 App",
    pid: 4,
    pic: '/asset/test1.svg',
    time: '2019-2-10 3:00',
    commentsCount: 1,
    tag: '新app,测试'
  },
];


function Excerpt(props) {
  const {
    pid,
    title,
    content,
    url,
    time,
    commentsCount,
    tag,
    index
  } = props;
  const dark = React.useMemo(() => {
    return index % 2 === 0;
  }, []);
  const classes = useStyles({url, dark});
  return (
    <div className={classes.excerptWrapper}>
      <div>
        <Link href={`/article/${pid}}`}>
          <div className={classes.articleInfo}>
            <h2>{title}</h2>
            <p>
              {/*不要删除span*/}
              <span/>{content}
            </p>

            <div>
              {commentsCount}条评论|{time}|{tag}
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
        {
          excerpts.map((excerpt, index) => (
            <Excerpt
              key={excerpt.id}
              index={index}
              pid={excerpt.pid}
              title={excerpt.title}
              content={excerpt.content}
              url={excerpt.pic}
              time={excerpt.time}
              commentsCount={excerpt.commentsCount}
              tag={excerpt.tag}
            />
          ))
        }
        <Button className={classes.pagingButton}>
          下一页
        </Button>
      </div>
    </Container>
  );
}

export default Index;
