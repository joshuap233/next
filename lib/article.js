import axios from './axios';
import {api, paths} from "../misc/api";
import paging from "../config/paging";

export async function getArticleData(pid) {
  const res = await axios.get(`${api.article}`, {
    params: {
      id: pid,
    }
  });
  const comments = await axios.get(`${api.comments}/${pid}`, {
    params: {
      pageSize: paging.comments
    }
  });
  return {data: res.data.data, comments: comments.data.data};
}


export async function getAllArticleIds() {
  const res = await axios.get(paths.article);
  return res.data.data;
}
