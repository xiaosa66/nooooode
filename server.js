let http = require("http");
let url = require("url");
let queryString = require("querystring");
// 启动服务器
function start(route, handle) {
    function onRequest(request, response) {
        let postData = '';
        let pathname = url.parse(request.url).pathname;
        request.setEncoding('utf8');
        request.addListener('data',function(postDataChunk)
        {
            postData += postDataChunk;
            console.log("received Post Data chunk"+postDataChunk);
        });

        request.addListener('end',function()
        {
            route(handle,pathname,response,postData);
        });
    }
    http.createServer(onRequest).listen(8888);
    console.log("server started.");
}
exports.start = start;

