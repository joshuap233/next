import React, {useCallback} from 'react';
import {Comments, Editor, Provider} from '../../components/comments';
import useStyles from './Comments.style';

let page = 0;

function Comment({comments, pid}) {
  const classes = useStyles();
  const loadMoreAPi = useCallback(() => {
    page++;
    return fetch(`http://127.0.0.1:5000/api/comments/${pid}?page=${page}`)
      .then(response => response.json());
  }, []);


  const submitApi = useCallback(async (data) => {
    return fetch(
      `http://127.0.0.1:5000/api/comments/${pid}`, {
        method: 'POST',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      }).then(response => response.json());
  }, []);

  return (
    <Provider>
      <div className={classes.wrapper}>
        <div className={classes.note}>
          留言(支持markdown):
        </div>
        <Editor submitApi={submitApi}/>
      </div>
      <div className={classes.comments}>
        <Comments comments={comments} loadMoreAPi={loadMoreAPi}/>
      </div>
    </Provider>
  );
}

export default Comment;
