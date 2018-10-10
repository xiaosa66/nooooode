function route(handle, pathname, response, postData) {
    console.log('about to route a request for '+pathname);

    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response,postData);
    }
    else {
    console.log('no request handler found ');
        response.writeHead(404, { "content-Type": "text/plain" });
        response.write("404 not found");
        response.end();
    }
}
exports.route = route;