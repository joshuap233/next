export function getPageParams(total, perPage = 10, other = {}) {
  if (total === 0) {
    total = 1;
  }
  const totalPage = Math.ceil(total / perPage);
  const array = new Array(totalPage).fill(0);
  return array.map((_, index) => ({params: {page: `${index}`, ...other}}));
}

export function getMultiPageParams(params, perPage) {
  let res = [];
  params.forEach(item => {
    res = res.concat(getPageParams(item.total, perPage, {tid: `${item.id}`}));
  });
  return res;
}
