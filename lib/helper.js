export function getPageParams(total, perPage = 10) {
  const totalPage = Math.ceil(total / perPage);
  const array = new Array(totalPage).fill(0);
  return array.map((_, index) => ({params: {page: `${index}`}}));
}
