import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import article from "./data";
import {combineClassName} from "../../style/help";
import useEditorStyle from './Editor.style';
import useStyles from './Article.style';
import Prism from "./prism";

import 'prismjs/components/prism-python.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-c.min';
import useCodeStyle from './prism.style';
import Container from "../../components/Container";
import Comment from "./Comment";
import {Divider, Tooltip} from "@material-ui/core";
import Contents from "./TreeView";
import LabelIcon from '@material-ui/icons/Label';


function Article() {
  const [innerWidth, setInnerWidth] = useState(null);
  const classes = useStyles({innerWidth});
  const [contentsOpen, setContentsOpen] = useState(false);

  const editorStyle = useEditorStyle();
  const codeStyle = useCodeStyle();
  const router = useRouter();
  const {pid} = router.query;

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Container
      contentsOpen={contentsOpen}
      setContentsOpen={setContentsOpen}
    >
      <Contents
        htmlString={article}
        contentsOpen={contentsOpen}
        setContentsOpen={setContentsOpen}
      />
      <div className={classes.bg}>
        <div className={classes.placeHolder}/>
        <div className={classes.title}>
          <h1>标题</h1>
        </div>
        <div className={classes.articleInfo}>
          <p>2019/10/20 12:10|3条评论|3人读过</p>
        </div>
        <div className={classes.poem}>
          <span>"</span>
          多情自古伤离别，更那堪，冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月
          <span>"</span>
        </div>
      </div>

      <div className={classes.articleRoot}>
        <div className={classes.articleWrapper}>
          <div
            className={combineClassName(editorStyle.root, editorStyle.table, editorStyle.emoji, codeStyle.root)}
            dangerouslySetInnerHTML={{__html: article}}
          />
        </div>

        <div className={classes.tagsWrapper}>
          <div>
            <Divider variant={"middle"}/>
            <div className={classes.tags}>
              <Tooltip title={'标签'}>
                <LabelIcon/>
              </Tooltip>
              <span>
                Ubuntu
              </span>
              <span>
                React
              </span>
            </div>
            <Divider variant={"middle"}/>
          </div>
        </div>


        <div
          className={classes.commentsWrapper}
          style={{

          }}>
          <div>
            <Divider variant={"middle"}/>
            <Comment/>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Article;
