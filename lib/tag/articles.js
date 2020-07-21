import axios from 'axios';
import {paths, api} from "../../misc/api";
import paging from "../../config/paging";

export async function getArticlesData(page, tid) {
  const res = await axios.get(api.tag_articles(tid), {
    params: {
      page,
      pageSize: paging.articles
    }
  });
  return res.data.data;
}

export async function getArticlesPageTotal() {
  const res = await axios.get(paths.tag_articles);
  return res.data.data;
}
