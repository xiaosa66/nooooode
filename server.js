var http = require("http");
var url = require("url");
// 启动服务器
function start(route, handle) {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        route(handle, pathname, response);
    }
    http.createServer(onRequest).listen(8888);
    console.log("server started.");
}
exports.start = start;

