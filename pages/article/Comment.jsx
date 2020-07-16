import React, {useCallback} from 'react';
import {Comments, Editor, Provider} from '../../components/comments';
import useStyles from './Comments.style';

function Comment({comments, pid}) {
  const classes = useStyles();
  const loadMoreAPi = useCallback(() => {
    return fetch(`http://localhost:3000/api/comments/${pid}/1.json`)
      .then(response => response.json());
  }, []);


  const submitApi = useCallback(async (data) => {
    const res = fetch(
      `http://127.0.0.1:5000/api/test/comments`, {
        method: 'POST',
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      }).then(response => response.json());
    return res;
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
