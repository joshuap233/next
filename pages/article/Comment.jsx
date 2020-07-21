import React from 'react';
import {Comments, Editor, Provider} from '../../components/comments';
import useStyles from './Comments.style';


function Comment({comments, pid}) {
  const classes = useStyles();
  return (
    <Provider>
      <div className={classes.wrapper}>
        <div className={classes.note}>
          留言(支持markdown):
        </div>
        <Editor/>
      </div>
      <div className={classes.comments}>
        <Comments comments={comments} pid={pid}/>
      </div>
    </Provider>
  );
}

export default Comment;
