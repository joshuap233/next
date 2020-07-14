import React from 'react';

import Container from '../../components/Container';
import {Avatar, Divider, Box, Button} from '@material-ui/core';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import useStyles from './Feeling.style';

const blogs = [{
  id: 1,
  content: '内容1',
  time: '2019/2/10 1:00'
}, {
  id: 2,
  content: '内容1',
  time: '2019/2/10 1:00'
}, {
  id: 3,
  content: '内容1',
  time: '2019/2/10 1:00'
}, {
  id: 4,
  content: '内容1',
  time: '2019/2/10 1:00'
},
];


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

function Index() {
  const classes = useStyles();
  return (
    <Container
      route={"日志"}
      poem={"君不见黄河之水天上，奔流到海不复回.君不见高堂明镜悲白发，朝如青丝暮成雪"}
    >
      <div className={classes.wrapper}>
        {
          blogs.map(item => {
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
        <Button
          style={{
            marginTop: 40
          }}>
          下一页
        </Button>
      </div>
    </Container>
  );
}

export default Index;
