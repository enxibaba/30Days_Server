const http = require('http');

//create a http server
const server = new http.Server()

server.on('request', function (req, res) {
  let path = req.url;
  console.log(path);
  if (path.indexOf('/api/fe/list') == 0) {
    res.writeHead(200, {
      "Content-type": "application/json"
    });
    let data = {
      title: "前端小课",
      des: "内容由素燕公众号发布"
    };
    res.write(JSON.stringify(data));
  } else {
    //
    res.writeHead(404, {
      "Content-type": "application/json"
    });
    let data = {
      code: "404",
      msg: "not found"
    };
    res.write(JSON.stringify(data));
  }
  res.end();
})

// 监听 8888 端口
server.listen(8888, function() {
  console.log('Server run in: http://127.0.0.1:8888');
});
