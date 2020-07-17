import axios from 'axios';

export async function getArchiveData(page) {
  const res = await axios.get(`http://127.0.0.1:5000/api/archive?page=${page}`);
  return res.data.data;
}

export async function getAllArchivePage() {
  const res = await axios.get(`http://127.0.0.1:5000/api/posts/total`);
  return res.data.data;
}

