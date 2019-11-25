// import * as http from "http"
const http = require('http');

const options = {
  host: '127.0.0.1',

  port: 8888,

  method: 'GET',

  path: '/api/fe/list',
  protocol: 'http:',

  timeout: 1000
}

const req = http.request(options, function (res) {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');

  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });

  res.on('end', (chunk) => {
    console.log('No more data in response')
  })
})

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.end();
