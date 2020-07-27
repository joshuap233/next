import Articles from '../../../../components/excerpt';
import {getArticlesData, getArticlesPageTotal} from "../../../../lib/tag/articles";
import {getMultiPageParams} from "../../../../lib/helper";
import paging from '../../../../config/paging';
import {combineTags, getPage} from "../../../../misc/help";
import route from "../../../../misc/route";

export default ({articles = [], nextPage, prePage, tid, poem}) => (
  <Articles
    {...{
      articles,
      nextPage,
      prePage,
      poem,
      route: route.tag_articles(tid),
      paging: {
        href: route.tag_articles('[tid]').route,
        as: `${route.tag_articles(tid).route}/0`
      }
    }}/>
)

export async function getStaticProps({params}) {
  const {data, poem} = await getArticlesData(params.page, params.tid);
  const [nextPage, prePage] = getPage(data.total, params.page, paging.articles);
  combineTags(data.values);
  return {
    props: {
      articles: data.values,
      nextPage: nextPage,
      prePage: prePage,
      tid: params.tid,
      poem,
    },
    unstable_revalidate: 5
  };
}


export async function getStaticPaths() {
  const params = await getArticlesPageTotal();
  const paths = getMultiPageParams(params, paging.articles);
  return {
    paths,
    fallback: true
  };
}

