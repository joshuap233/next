import Articles from '../../../../components/excerpt';
import {getArticlesPageTotal, getArticlesData} from "../../../../lib/tag/articles";
import {getMultiPageParams} from "../../../../lib/helper";
import paging from '../../../../config/paging';
import {combineTags, getPage} from "../../../../misc/help";
import route from "../../../../misc/route";

export default ({articles = [], nextPage, prePage, tid}) => (
  <Articles {...{articles, nextPage, prePage, route: route.tag_articles(tid)}}/>
)

export async function getStaticProps({params}) {
  const data = await getArticlesData(params.page, params.tid);
  const [nextPage, prePage] = getPage(data.total, params.page, paging.articles);
  combineTags(data.values);
  return {
    props: {
      articles: data.values,
      nextPage: nextPage,
      prePage: prePage,
      tid: params.tid
    }
  };
}


export async function getStaticPaths() {
  const params = await getArticlesPageTotal();
  const paths = getMultiPageParams(params, paging.articles);
  return {
    paths,
    fallback: false
  };
}

