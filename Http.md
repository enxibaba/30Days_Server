HTTP:

Request-Header:
开始行 GET / HTTP/1.1 （请求行: Method + URI,(域名在 header 的 host 里) + 协议版本号

消息头 message header （请求行）
Host: ttqq.com 主机域名
User-Agent: 客户端信息，如电脑和浏览器型号
Accept:  
Referrer: 请求发起页面的地址
max-forwards: 请求最大转发次数

空行

消息 body

message body ~= Entity body
message body (gzip 后的 entity body)
Entity body (unzip 后的 message body)
Entity body(就是内容本身)

Response-Header:

开始行 HTTP/1.1 200 OK (状态行 Status line 协议号 + 状态码
状态码:
1xx hold on  
2xx: here you go
3xx: go away
4xx: you fucked up
5xx: I fucked up
(
301: 页面移走了，不要来访问我，
302: 页面移走了,我来给你转发
403: 权限不够
404: not found
)
消息头 message header (响应头 Response header)

空行

消息 body
