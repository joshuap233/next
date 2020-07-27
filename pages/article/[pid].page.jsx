import React, {useEffect, useState} from 'react';
import {combineClassName, formatTime} from "../../misc/help";
import useEditorStyle from './Editor.style';
import useStyles from './Article.style';
import Prism from "./Prism";
import useCodeStyle from './prism.style';
import Layout from "../../components/Layout";
import Comment from "./Comment";
import {Divider, Tooltip} from "@material-ui/core";
import Contents from "./TreeView";
import LabelIcon from '@material-ui/icons/Label';
import {getAllArticleIds, getArticleData} from "../../lib/article";
import {parseTreeData} from "../../misc/parse-comments-tree";

function Article(props) {
  const {article = {tags: []}, comments, pid, poem} = props;
  const classes = useStyles();
  const [contentsOpen, setContentsOpen] = useState(true);

  const editorStyle = useEditorStyle();
  const codeStyle = useCodeStyle();


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
          <p>{article.time}
            {/*TODO:*/}
            {/*|{article.commentsCount}条评论*/}
          </p>
          {/* TODO:|3人读过*/}
        </div>
        <div className={classes.poem}>
          <span>"</span>
          {poem}
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
            <div className={'tags'}>
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
  const {data, poem, comments} = await getArticleData(params.pid);
  data.time = formatTime(data.time);
  return {
    props: {
      article: data,
      comments: parseTreeData(comments),
      pid: params.pid,
      poem
    },
    unstable_revalidate: 5
  };
}


export async function getStaticPaths() {
  const ids = await getAllArticleIds();
  const paths = ids.map(item => ({params: {pid: item.toString()}}));
  return {
    paths,
    fallback: true
  };
}

export default Article;
