var http = require("http");
var url = require("url");
// 启动服务器
function start(route,handle){
    function onRequest(request,response){
        console.log("request recived.");
        let pathname = url.parse(request.url).pathname;
        console.log("Request for "+pathname+"received.");
        // route函数是一个console.log
        let content = route(handle,pathname);
        response.writeHead(200,{'Content-type':"text/plain"});
        response.write(content);
        response.end();
    }
http.createServer(onRequest).listen(8888);
console.log("server started.");
}
exports.start = start;

