const http = require("http");
const {exec} = require('child_process');

const rebuild = () => {
  exec('yarn build', {cwd: process.cwd(), shell: 'bash'}, (err, stdout, stderr) => {
    // if (err) {
    //   console.log(err);
    //   return;
    // }
    console.log(`stdout: ${stdout}`);
  });
};

http.createServer((request, response) => {
  // 用 HTTP 状态码和内容类型来设定 HTTP 响应头
  rebuild();
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end(JSON.stringify({status: 'success'}));
}).listen(9000);

// 在控制台打印访问服务器的 URL
console.log('服务器运行于 http://127.0.0.1:9000/,用于重新构建');
