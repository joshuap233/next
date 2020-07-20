const base = `http://${process.env.SERVER || "127.0.0.1:5000"}/api`;

const api = {
  comments: '/comments',
  articles: '/posts',
  article: '/post',
  archive: '/archive',
  blog: '/blog',
  tags: '/tags',
};


const paths = {
  articles: '/posts/total',
  article: '/posts/all',
  archive: '/posts/total',
  blog: '/blog/total',
  tags: '/tags/total',
};


Object.keys(api).forEach(key => {
  api[key] = base + api[key];
});

Object.keys(paths).forEach(key => {
  paths[key] = base + paths[key];
});


export {api, paths};
