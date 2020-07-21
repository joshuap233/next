import axios from '../axios';
import {paths, api} from "../../misc/api";
import paging from "../../config/paging";
import getPoems from "../../config/poems";

export async function getArticlesData(page, tid) {
  const res = await axios.get(api.tag_articles(tid), {
    params: {
      page,
      pageSize: paging.articles
    }
  });
  return {data: res.data.data, poem: getPoems()};
}

export async function getArticlesPageTotal() {
  const res = await axios.get(paths.tag_articles);
  return res.data.data;
}
