import {api, paths} from "../misc/api";
import axios from './axios';
import paging from "../config/paging";

export async function getArticlesData(page) {
  const res = await axios.get(api.articles, {
    params: {
      page,
      pageSize: paging.articles
    }
  });
  return {data: res.data.data};

}

export async function getArticlesPageTotal() {
  const res = await axios.get(paths.articles);
  return res.data.data;
}
