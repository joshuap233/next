import paging from "../config/paging";
import base from '../config/comment_api'
const api = {
  comments: '/comments',
  articles: '/posts',
  article: '/post',
  archive: '/archive',
  blog: '/blog',
  tags: '/tags',
  tag_articles: (tid) => `/tag/${tid}/posts`
};

const commentsApi = {
  loadMore: (pid, page) => {
    const url = `${base}/comments/${pid}?page=${page}&pageSize=${paging.comments}`;
    return fetch(url).then(response => response.json());
  },
  submit: (pid, data) => {
    const url = `${base}/comments/${pid}`;
    return fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then(response => response.json());
  }
};

const paths = {
  articles: '/posts/total',
  article: '/posts/all',
  archive: '/posts/total',
  blog: '/blog/total',
  tags: '/tags/total',
  tag_articles: '/tags/posts/all'
};


export {api, paths, commentsApi};
