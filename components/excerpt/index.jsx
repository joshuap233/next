import useStyles from "./Articles.style";
import Layout from "../Layout";
import router from "../../misc/route";
import Excerpt from "./Excerpt";


function Index(props) {
  const {articles = [], nextPage, prePage, route = router.articles} = props;
  const classes = useStyles();
  return (
    <Layout
      title={'文章'}
      nextPage={nextPage}
      prePage={prePage}
      route={route}
    >
      <div className={classes.wrapper}>
        {
          articles.map((article, index) => (
            <Excerpt
              key={article.id}
              id={article.id}
              index={index}
              title={article.title}
              content={article.excerpt}
              url={article.illustration}
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

export default Index;
