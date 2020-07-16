import axios from 'axios';

export async function getArticleData(pid) {
  const res = await axios.get(`http://127.0.0.1:5000/api/post?id=${pid}`);
  const res_comments = await axios.get(`http://localhost:3000/api/comments/1/0.json`);
  return {article: res.data.data, comments: res_comments.data.data};
}


export async function getAllArticleIds() {
  const res = await axios.get(`http://127.0.0.1:5000/api/posts/all`);
  return res.data.data;
}
