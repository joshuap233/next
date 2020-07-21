import {api, paths} from "../misc/api";
import axios from './axios';
import paging from "../config/paging";
import getPoems from "../config/poems";

export async function getArticlesData(page) {
  const res = await axios.get(api.articles, {
    params: {
      page,
      pageSize: paging.articles
    }
  });
  return {data: res.data.data, poem: getPoems()};

}

export async function getArticlesPageTotal() {
  const res = await axios.get(paths.articles);
  return res.data.data;
}
