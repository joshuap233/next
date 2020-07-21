import useStyles from "./Articles.style";
import Layout from "../Layout";
import router from "../../misc/route";
import Excerpt from "./Excerpt";

function Index({articles = [], nextPage, prePage, route = router.articles}) {
  const classes = useStyles();
  return (
    <Layout
      nextPage={nextPage}
      prePage={prePage}
      route={route}
      poem={"自以为历经沧桑，其实刚刚蹒跚学步；自以为悟出了生存竞争的秘密，其实还远没有竞争的资格"}>
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
