import axios from 'axios';
import {api, paths} from "../misc/api";

export async function getArticleData(pid) {
  const res = await axios.get(`${api.article}`, {
    params: {
      id: pid,
    }
  });
  const res_comments = await axios.get(`${api.comments}/${pid}`);
  return {article: res.data.data, comments: res_comments.data.data};
}


export async function getAllArticleIds() {
  const res = await axios.get(paths.article);
  return res.data.data;
}
