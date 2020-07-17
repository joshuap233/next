import axios from 'axios';


export async function getArticlesData(page) {
  const res = await axios.get(`http://127.0.0.1:5000/api/posts?page=${page}`);
  return res.data.data;
}

export async function getArticlesPageTotal() {
  const res = await axios.get(`http://127.0.0.1:5000/api/posts/total`);
  return res.data.data;
}
