function route(handle, pathname,response) {
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response);
    }
    else {
        return '404 not found';
        response.writeHead(404,{"content-Type":"text/plain"});
        response.write("04 not found");
        response.end();
    }
}
exports.route = route;