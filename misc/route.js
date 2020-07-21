const route = {
  home: {
    route: "/",
    name: "主页"
  },
  blog: {
    route: "/blog",
    name: "日志",
  },
  article: {
    route: "/article",
    name: '文章'
  },
  articles: {
    route: "/articles",
    name: "文章"
  },
  archive: {
    route: "/archive",
    name: "归档"
  },
  tags: {
    route: "/tags",
    name: "标签"
  },
  about: {
    route: "/about",
    name: "关于"
  },
  tag_articles: (tid) => ({
    route: `/tag/${tid}/articles`,
    name: "文章"
  })
};

export default route;
