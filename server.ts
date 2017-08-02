/**
 * Created by wolle on 22.07.17.
 */

import {createServer as createSockServer, Server, Socket} from "net";
import {server as WebSock} from "websocket";
import {createServer} from "http";
import {Art, Database, Point} from "./Database";
import {ConnectionManager} from "./ConnectionManager";
import * as node_static from "node-static";

/**
 *
 * connection to Webbrowser
 *
 *
 * @type {"http".Server}
 */

const database = new Database();


let server = createServer(function (req, res) {
    console.log(req);
})

server.listen(1337, "0.0.0.0", function () {

})

let wsServer = new WebSock({
    httpServer: server
})

wsServer.on("request", (req) => {
    let connection = req.accept(null, req.origin);

    console.log("add new client");

    ConnectionManager.getInstance().add(connection);
    //connection.sendUTF(JSON.stringify({world: "hello"}));

    connection.on("message", (message) => {
        console.log(message);
    })

    connection.on("close", function(){
        ConnectionManager.getInstance().remove(this);
        console.log("connection closed");
    })
    connection.on("error", (error) => {
        console.log(error);
    })
})




/**
 *
 *
 *  connection to Matlab
 *
 *
 */

const sockServer = createSockServer((client) => {
    console.log("client connected");

    //console.log(client);


    client.on("data", function (data) {
        console.log(data.toString('utf8'));
        let json = JSON.parse(data.toString('utf8'));
        let x = json.x;
        let y = json.y;

        var connections = ConnectionManager.getInstance().getAll();

        let object: Art|false;
        if((object = database.find(x, y)) !== false){
            console.log(JSON.stringify(object));
            for(let conn of connections){
                conn.sendUTF(JSON.stringify(object.JSON));
            }
        }

    })

    client.on("error", function(error){
        console.log(error);
    })
})


sockServer.on("error", (error) => {
    console.log(error);
})

sockServer.on("message", (message) => {
    console.log(message);
})

sockServer.listen(1447, "0.0.0.0", () => {
    console.log("sock server bounded");
})



/**


    static http server


 */





var fileServer = new node_static.Server('./public');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(8081);