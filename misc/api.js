const api = {
  comments: '/comments',
  articles: '/posts',
  article: '/post',
  archive: '/archive',
  blog: '/blog',
  tags: '/tags',
  tag_articles: (tid) => `/tag/${tid}/posts`
};


const paths = {
  articles: '/posts/total',
  article: '/posts/all',
  archive: '/posts/total',
  blog: '/blog/total',
  tags: '/tags/total',
  tag_articles: '/tags/posts/all'
};


export {api, paths};
