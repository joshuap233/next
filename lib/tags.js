import axios from 'axios';

export async function getTagsData(page) {
  const res = await axios.get(`http://localhost:3000/api/tags?${page}.json`);
  return res.data.data;
}


export async function getAllTagsPage() {
  const res = await axios.get(`http://127.0.0.1:5000/api/tags/all`);
  return res.data.data;
}
