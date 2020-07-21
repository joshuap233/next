import axios from './axios';
import {api, paths} from "../misc/api";
import paging from "../config/paging";
import getPoems from "../config/poems";

export async function getBlogData(page) {
  const res = await axios.get(api.blog, {
    params: {
      page,
      pageSize: paging.blog
    }
  });
  return {data: res.data.data, poem: getPoems()};
}

export async function getAllBlogPage() {
  const res = await axios.get(paths.blog);
  return res.data.data;
}

