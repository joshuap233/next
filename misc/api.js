const base = 'http://127.0.0.1:5000/api/';
const api = {
  comments: '/comments'
};
Object.keys(api).forEach(key => {
  api[key] = base + api[key];
});
export default api;
