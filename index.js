const server = require("./server");
const router = require("./router");
const requestHandlers = require("./requestHandlers");
// handle是一个对象
// 为不同的url请求去执行不同的函数
let handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;


// router.route是一个函数,
// 作为参数传到start函数里
server.start(router.route,handle);