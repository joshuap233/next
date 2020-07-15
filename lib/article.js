import axios from 'axios';

export async function getArticleData(pid) {
  const res = await axios.get(`http://localhost:3000/api/article/${pid}.json`);
  const res_comments = await axios.get(`http://localhost:3000/api/comments/${pid}/0.json`);
  return {article: res.data.data, comments: res_comments.data.data};
}


export function getAllArticleIds() {
  return [
    {
      params: {
        pid: '1'
      },
    },
    {
      params: {
        pid: '2'
      },
    },
  ];
}
