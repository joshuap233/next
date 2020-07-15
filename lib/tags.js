import axios from 'axios';

export async function getTagsData(page) {
  const res = await axios.get(`http://localhost:3000/api/tags/${page}.json`);
  return res.data.data;
}


export function getAllTagsPage() {
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
