import React from 'react';
import Articles from '../../components/excerpt';
import {getArticlesPageTotal, getArticlesData} from "../../lib/articles";
import {getPageParams} from "../../lib/helper";
import paging from '../../config/paging';
import {combineTags, getPage} from "../../misc/help";

export default ({articles = [], nextPage, prePage, poem}) => <Articles {...{articles, nextPage, prePage, poem}}/>

export async function getStaticProps({params}) {
  const {data, poem} = await getArticlesData(params.page);
  const [nextPage, prePage] = getPage(data.total, params.page, paging.articles);
  // tag数组拼接为字符串
  combineTags(data.values);
  return {
    props: {
      articles: data.values,
      nextPage: nextPage,
      // nextPage: data.values.length === 0 ? false : nextPage,
      prePage: prePage,
      poem
    }
  };
}


export async function getStaticPaths() {
  const total = await getArticlesPageTotal();
  const paths = getPageParams(total, paging.articles);
  return {
    paths,
    fallback: false
  };
}

