/**
 * Created by wolle on 22.07.17.
 */



class Museum{

    private socket;
    private main;


    constructor(){

        this.main = document.getElementById("main");

        this.connect();

    }

    connect(){
        this.socket = new WebSocket("ws://192.168.179.36:1337");
        this.socket.onopen = () => {
            var text = document.createTextNode("connected");
            this.main.appendChild(text);
        }

        this.socket.onmessage =(event) => {

            this.main.innerHTML = "";

            let msg = JSON.parse(event.data);
            console.log(msg);

            let title = document.createElement("h1");
            title.appendChild(document.createTextNode(msg.title));
            this.main.appendChild(title);

            let img = document.createElement("img");
            img.setAttribute("src", msg.img);
            this.main.appendChild(img);

            let description = document.createElement("span");
            description.appendChild(document.createTextNode(msg.description));
            this.main.appendChild(description);


        }

        this.socket.onclose = () => {
            var text = document.createTextNode("connection closed");
            this.main.appendChild(text);
            this.connect();
        }

        console.log(this.socket);
    }

}

new Museum();