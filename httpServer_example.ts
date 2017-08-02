import {createServer} from "http";
/**
 * Created by wolle on 23.07.17.
 */


let httpServer = createServer(function (req, res) {

    console.log(req);
    res.end();
})


httpServer.listen(8080, function () {

})

httpServer.on("connection", function (socket) {

    console.log("new socket");

    socket.on("connect", function () {
        console.log("new Connection");
    })

    socket.on("error", (error) => {
        console.log(error)
    })
})

httpServer.on("error", function (err) {
    console.log(err);
})
