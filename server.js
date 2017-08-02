/**
 * Created by wolle on 22.07.17.
 */
"use strict";
var net_1 = require("net");
var websocket_1 = require("websocket");
var http_1 = require("http");
var Database_1 = require("./Database");
var ConnectionManager_1 = require("./ConnectionManager");
var node_static = require("node-static");
/**
 *
 * connection to Webbrowser
 *
 *
 * @type {"http".Server}
 */
var database = new Database_1.Database();
var server = http_1.createServer(function (req, res) {
    console.log(req);
});
server.listen(1337, "0.0.0.0", function () {
});
var wsServer = new websocket_1.server({
    httpServer: server
});
wsServer.on("request", function (req) {
    var connection = req.accept(null, req.origin);
    console.log("add new client");
    ConnectionManager_1.ConnectionManager.getInstance().add(connection);
    //connection.sendUTF(JSON.stringify({world: "hello"}));
    connection.on("message", function (message) {
        console.log(message);
    });
    connection.on("close", function () {
        ConnectionManager_1.ConnectionManager.getInstance().remove(this);
        console.log("connection closed");
    });
    connection.on("error", function (error) {
        console.log(error);
    });
});
/**
 *
 *
 *  connection to Matlab
 *
 *
 */
var sockServer = net_1.createServer(function (client) {
    console.log("client connected");
    //console.log(client);
    client.on("data", function (data) {
        console.log(data.toString('utf8'));
        var json = JSON.parse(data.toString('utf8'));
        var x = json.x;
        var y = json.y;
        var connections = ConnectionManager_1.ConnectionManager.getInstance().getAll();
        var object;
        if ((object = database.find(x, y)) !== false) {
            console.log(JSON.stringify(object));
            for (var _i = 0, connections_1 = connections; _i < connections_1.length; _i++) {
                var conn = connections_1[_i];
                conn.sendUTF(JSON.stringify(object.JSON));
            }
        }
    });
    client.on("error", function (error) {
        console.log(error);
    });
});
sockServer.on("error", function (error) {
    console.log(error);
});
sockServer.on("message", function (message) {
    console.log(message);
});
sockServer.listen(1447, "0.0.0.0", function () {
    console.log("sock server bounded");
});
/**


    static http server


 */
var fileServer = new node_static.Server('./public');
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(8081);
//# sourceMappingURL=server.js.map