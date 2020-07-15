import axios from 'axios';

export async function getArchiveData(page) {
  const res = await axios.get(`http://localhost:3000/api/archive/${page}.json`);
  return {page, data: res.data.data};
}

export function getAllArchivePage() {
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

