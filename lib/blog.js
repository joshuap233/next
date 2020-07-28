import axios from './axios';
import {api, paths} from "../misc/api";
import paging from "../config/paging";

export async function getBlogData(page) {
  const res = await axios.get(api.blog, {
    params: {
      page,
      pageSize: paging.blog
    }
  });
  return {data: res.data.data};
}

export async function getAllBlogPage() {
  const res = await axios.get(paths.blog);
  return res.data.data;
}

