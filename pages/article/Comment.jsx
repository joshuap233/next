import React, {useCallback} from 'react';
import {initData, newData} from "./mock";
import {Comments, Editor, Provider} from '../../components/comments';
import {Divider} from "@material-ui/core";

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
        marginLeft: '120px'
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
        marginLeft: '120px'
      }}>
        <Comments initApi={initApi} loadMoreAPi={loadMoreAPi}/>
      </div>
    </Provider>
  );
}

export default Comment;
