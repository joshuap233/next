import axios from 'axios';
import {paths, api} from "../misc/api";
import paging from "../config/paging";

export async function getArticlesData(page) {
  const res = await axios.get(api.articles, {
    params: {
      page,
      pageSize: paging.articles
    }
  });
  return res.data.data;
}

export async function getArticlesPageTotal() {
  const res = await axios.get(paths.articles);
  return res.data.data;
}
