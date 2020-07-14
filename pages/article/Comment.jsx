import React, {useCallback} from 'react';
import {initData, newData} from "./mock";
import {Comments, Editor, Provider} from '../../components/comments';

function Comment() {
  const initApi = useCallback(() => new Promise((resolve) => {
    setTimeout(() => {
      // mock fetch data
      resolve(initData);
    }, 500);
  }), []);

  const loadMoreAPi = useCallback(() => new Promise(resolve => {
    setTimeout(() => {
      resolve(newData);
    }, 500);
  }), []);

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
        <Comments initApi={initApi} loadMoreAPi={loadMoreAPi}/>
      </div>
    </Provider>
  );
}

export default Comment;
