/**
 * Created by wolle on 22.07.17.
 */
var Museum = (function () {
    function Museum() {
        this.main = document.getElementById("main");
        this.connect();
    }
    Museum.prototype.connect = function () {
        var _this = this;
        this.socket = new WebSocket("ws://192.168.179.36:1337");
        this.socket.onopen = function () {
            var text = document.createTextNode("connected");
            _this.main.appendChild(text);
        };
        this.socket.onmessage = function (event) {
            _this.main.innerHTML = "";
            var msg = JSON.parse(event.data);
            console.log(msg);
            var title = document.createElement("h1");
            title.appendChild(document.createTextNode(msg.title));
            _this.main.appendChild(title);
            var img = document.createElement("img");
            img.setAttribute("src", msg.img);
            _this.main.appendChild(img);
            var description = document.createElement("span");
            description.appendChild(document.createTextNode(msg.description));
            _this.main.appendChild(description);
        };
        this.socket.onclose = function () {
            var text = document.createTextNode("connection closed");
            _this.main.appendChild(text);
            _this.connect();
        };
        console.log(this.socket);
    };
    return Museum;
}());
new Museum();
//# sourceMappingURL=client.js.map