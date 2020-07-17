import axios from 'axios';


export async function getBlogData(page) {
  const res = await axios.get(`http://127.0.0.1:5000/api/blog?page=${page}`);
  return res.data.data;
}

export async function getAllBlogPage() {
  const res = await axios.get(`http://127.0.0.1:5000/api/blog/total`);
  return res.data.data;
}
