"use strict";
var http_1 = require("http");
/**
 * Created by wolle on 23.07.17.
 */
var httpServer = http_1.createServer(function (req, res) {
    console.log(req);
    res.end();
});
httpServer.listen(8080, function () {
});
httpServer.on("connection", function (socket) {
    console.log("new socket");
    socket.on("connect", function () {
        console.log("new Connection");
    });
    socket.on("error", function (error) {
        console.log(error);
    });
});
httpServer.on("error", function (err) {
    console.log(err);
});
//# sourceMappingURL=httpServer_example.js.map