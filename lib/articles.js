import axios from 'axios';

export async function getArticlesData(page) {
  const res = await axios.get(`http://localhost:3000/api/articles/${page}.json`);
  return res.data.data;
}

export function getAllArticlesPage() {
  return [
    {
      params: {
        page: '0'
      },
    },
    {
      params: {
        page: '1'
      },
    },
  ];
}
