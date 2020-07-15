import React, {useCallback} from 'react';
import {Comments, Editor, Provider} from '../../components/comments';


function Comment({comments, pid}) {
  const loadMoreAPi = useCallback(() => {
    return fetch(`http://localhost:3000/api/comments/${pid}/1.json`)
      .then(response => response.json());
  }, []);

  const submitApi = useCallback((data) => {
    console.log('submit data', data);
    //post data
  }, []);

  return (
    <Provider>
      <div style={{
        width: '100%',
        marginTop: '50px',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 900
      }}>
        <div
          style={{
            fontSize: '20px',
            marginBottom: '20px'
          }}>
          留言(支持markdown):
        </div>
        <Editor submitApi={submitApi}/>
      </div>
      <div style={{
        marginTop: '100px',
        width: '100%',
      }}>
        <Comments comments={comments} loadMoreAPi={loadMoreAPi}/>
      </div>
    </Provider>
  );
}

export default Comment;
