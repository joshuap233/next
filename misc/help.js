export const combineClassName = (...args) => {
  let className = '';
  args.forEach(name => {
    if (name) {
      className += `${name} `;
    }
  });
  return className;
};


export const formatTime = (d, accuracy = 'minutes') => {
  d = new Date(d * 1000);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const hour = d.getHours();
  const minutes = d.getMinutes();
  const second = d.getSeconds();
  return `${year}/${month}/${date} ${hour}:${minutes < 10 ? 0 : ''}${minutes}${accuracy === 'second' ? `:${second}` : ''}`;
};

export const combineTags = (data) => {
  data.forEach(item => {
    item.tag = item.tags.reduce((total, value) => (total ? total + ',' : '') + value.name, '');
  });
};

export const getPage = (total, page, perPage = 10) => {
  const totalPage = Math.ceil(total / perPage);
  const nextPage = parseInt(page) + 1;
  return [nextPage < totalPage ? nextPage : false, nextPage - 2];
};
