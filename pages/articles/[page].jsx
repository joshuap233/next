import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from "../../components/Layout";
import useStyles from './Articles.style';
import {getAllArticlesPage, getArticlesData} from "../../lib/articles";
import route from "../../misc/route";


function Excerpt(props) {
  const {
    id,
    title,
    content,
    url,
    time,
    commentsCount,
    tag,
    index
  } = props;
  const dark = React.useMemo(() => {
    return index % 2 === 0;
  }, []);
  const classes = useStyles({url, dark});
  return (
    <div className={classes.excerptWrapper}>
      <div>
        <Link href={`${route.article.route}/${id}`}>
          <div className={classes.articleInfo}>
            <h2>{title}</h2>
            <p>
              {/*不要删除span*/}
              <span/>{content}
            </p>

            <div>
              {commentsCount}条评论|{time}|{tag}
            </div>
          </div>
        </Link>
        <Link href={`${route.article.route}/${id}`}>
          <div className={classes.pic}/>
        </Link>
      </div>
    </div>
  );
}

function Index({articles, nextPage}) {
  const classes = useStyles();
  return (
    <Layout
      nextPage={nextPage}
      route={route.articles}
      poem={"自以为历经沧桑，其实刚刚蹒跚学步；自以为悟出了生存竞争的秘密，其实还远没有竞争的资格"}>
      <div className={classes.wrapper}>
        {
          articles.map((article, index) => (
            <Excerpt
              key={article.id}
              id={article.id}
              index={index}
              title={article.title}
              content={article.content}
              url={article.pic}
              time={article.time}
              commentsCount={article.commentsCount}
              tag={article.tag}
            />
          ))
        }
      </div>
    </Layout>
  );
}

export async function getStaticProps({params}) {
  const data = await getArticlesData(params.page);
  // tag数组拼接为字符串
  data.data.values.forEach(item => {
    item.tag = item.tag.reduce((total, value) => (total ? total + ',' : '') + value, '');
  });
  const nextPage = parseInt(data.page) + 1;
  return {
    props: {
      articles: data.data.values,
      nextPage: nextPage < data.data.totalPage ? nextPage : false
    }
  };
}


export async function getStaticPaths() {
  const paths = getAllArticlesPage();
  return {
    paths,
    fallback: false
  };
}


export default Index;
