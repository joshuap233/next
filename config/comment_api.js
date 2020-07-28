let base = `https://127.0.0.1/api`;
if(process.env.NODE_ENV === 'development'){
  base = 'http://127.0.0.1:5000/api'
}

export default base
