import React, {useEffect} from 'react';
import {useRouter} from 'next/router';
import article from "./data";
import {combineClassName} from "../../style/help";
import useEditorStyle from './article.style';
import Prism from "./prism";

import 'prismjs/components/prism-python.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-c.min';
import useCodeStyle from './prism.style';
import Container from "../../components/Container";


function Pid() {
  const editorCSS = useEditorStyle();
  const codeCSS = useCodeStyle();
  const router = useRouter();
  const {pid} = router.query;
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Container>
      <div style={{
        height: '100%',
        width: '100%',
        background: 'url(/asset/article-bg.jpg) no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

        position: 'relative',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{
          height: '400px',
          width: '100%',
          position: 'absolute',
          zIndex: -1,
        }}/>

        <div style={{
          height: '400px',
          width: '100%',
          zIndex: -2
        }}/>

        <div style={{
          color: '#fff',
          marginTop: '-150px'
        }}>
          <h1>标题</h1>
        </div>

        <div style={{
          color: '#fff',
          marginTop: '-50px',
          height: '100px'
        }}>
          <p style={{
            padding: '20px 0 20px 0'
          }}>2019/10/20 12:10|3条评论|3人读过</p>
        </div>
        <div style={{
          color: '#fff',
          padding: '10px 0 10px 0',
          fontWeight: 'bold'
        }}>
          <span>"</span>
          多情自古伤离别，更那堪，冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月
          <span>"</span>
        </div>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        color: '#000',
      }}>
        <div
          className={combineClassName(editorCSS.root, editorCSS.table, editorCSS.emoji, codeCSS.root)}
          dangerouslySetInnerHTML={{__html: article}}
        />

      </div>
    </Container>
  );
}

export default Pid;
