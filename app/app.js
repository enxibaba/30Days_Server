//导入 express 框架
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('short'));

app.get('/api/fe/list', function (req, res) {
  console.log('request path:' + req.path);
  var result = {
    code: 200,
    data: {
      name: "前端小课",
      des: "第三阶段内容：网络编程内容 HTTP，TCP，WebServer"
    }
  }

  res.json(result);
})

app.listen(8888)

console.log('app start: http://127.0.0.1:8888');