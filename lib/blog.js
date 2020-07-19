import axios from 'axios';
import {api} from "../misc/api";
import paging from "../config/paging";

export async function getBlogData(page) {
  const res = await axios.get(api.blog, {
    params: {
      page,
      pageSize: paging.blog
    }
  });
  return res.data.data;
}

export async function getAllBlogPage() {
  const res = await axios.get(`http://127.0.0.1:5000/api/blog/total`);
  return res.data.data;
}
