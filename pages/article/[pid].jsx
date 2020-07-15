import React, {useEffect, useState} from 'react';
import {combineClassName} from "../../style/help";
import useEditorStyle from './Editor.style';
import useStyles from './Article.style';
import Prism from "./prism";
import useCodeStyle from './prism.style';
import Layout from "../../components/Layout";
import Comment from "./Comment";
import {Divider, Tooltip} from "@material-ui/core";
import Contents from "./TreeView";
import LabelIcon from '@material-ui/icons/Label';
import {getArticleData, getAllArticleIds} from "../../lib/article";

function Article({article, comments, pid}) {
  const [innerWidth, setInnerWidth] = useState(null);
  const classes = useStyles({innerWidth});
  const [contentsOpen, setContentsOpen] = useState(true);

  const editorStyle = useEditorStyle();
  const codeStyle = useCodeStyle();

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Layout
      contentsOpen={contentsOpen}
      setContentsOpen={setContentsOpen}
    >
      <Contents
        htmlString={article.content}
        contentsOpen={contentsOpen}
        setContentsOpen={setContentsOpen}
      />
      <div className={classes.bg}>
        <div className={classes.placeHolder}/>
        <div className={classes.title}>
          <h1>{article.title}</h1>
        </div>
        <div className={classes.articleInfo}>
          <p>{article.time}|{article.commentsCount}条评论</p>
          {/* TODO:|3人读过*/}
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
            dangerouslySetInnerHTML={{__html: article.content}}
          />
        </div>

        <div className={classes.tagsWrapper}>
          <div>
            <Divider variant={"middle"}/>
            <div className={classes.tags}>
              <Tooltip title={'标签'}>
                <LabelIcon/>
              </Tooltip>
              {
                article.tags.map(tag => (
                  <span key={tag.id}>
                    {tag.name}
                  </span>
                ))
              }
            </div>
            <Divider variant={"middle"}/>
          </div>
        </div>


        <div className={classes.commentsWrapper}>
          <div>
            <Divider variant={"middle"}/>
            <Comment comments={comments} pid={pid}/>
          </div>
        </div>
      </div>
    </Layout>
  );
}


export async function getStaticProps({params}) {
  const data = await getArticleData(params.pid);
  return {
    props: {
      article: data.article,
      comments: data.comments,
      pid: params.pid
    }
  };
}


export async function getStaticPaths() {
  const paths = getAllArticleIds();
  return {
    paths,
    fallback: false
  };
}

export default Article;
