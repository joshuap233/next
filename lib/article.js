import axios from './axios';
import {api, paths} from "../misc/api";
import getPoems from "../config/poems";

export async function getArticleData(pid) {
  const res = await axios.get(`${api.article}`, {
    params: {
      id: pid,
    }
  });
  const res_comments = await axios.get(`${api.comments}/${pid}`);
  return {article: res.data.data, poem: getPoems(), comments: res_comments.data};
}


export async function getAllArticleIds() {
  const res = await axios.get(paths.article);
  return res.data.data;
}
