import axios from 'axios';

export async function getArticlesData(page) {
  const res = await axios.get(`http://127.0.0.1:5000/api/posts?page=0`);
  return res.data.data;
}

export async function getAllArticlesPage() {
  const res = await axios.get(`http://127.0.0.1:5000/api/posts/all`);
  return res.data.data;
}
