/**
 * Created by wolle on 23.07.17.
 */
import {Socket} from "net";
import {connection} from "websocket";


export class ConnectionManager{

    private static self: ConnectionManager;

    private pos: number;
    private connections: connection[];

    private constructor(){
        this.connections = [];
        this.resetNext();
    }

    public add(connection){
        this.connections.push(connection)
    }

    public remove(connection){
        let index = this.connections.indexOf(connection);
        if(index >= 0){
            this.connections.splice(index, 1);
        }

    }

    public getAll(): connection[]{
        return this.connections;
    }

    public getNext(): connection{
        if(this.pos >= this.connections.length){
            this.resetNext();
        }

        return this.connections[this.pos++];
    }

    public resetNext(){
        this.pos
    }

    public static getInstance(){
        if(!ConnectionManager.self){
            ConnectionManager.self = new ConnectionManager();
        }

        return ConnectionManager.self;

    }
}