import axios from 'axios';


export async function getBlogData(page) {
  const res = await axios.get(`http://localhost:3000/api/blog/${page}.json`);
  return {page, data: res.data.data};
}

export function getAllBlogPage() {
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
