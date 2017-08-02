"use strict";
var ConnectionManager = (function () {
    function ConnectionManager() {
        this.connections = [];
        this.resetNext();
    }
    ConnectionManager.prototype.add = function (connection) {
        this.connections.push(connection);
    };
    ConnectionManager.prototype.remove = function (connection) {
        var index = this.connections.indexOf(connection);
        if (index >= 0) {
            this.connections.splice(index, 1);
        }
    };
    ConnectionManager.prototype.getAll = function () {
        return this.connections;
    };
    ConnectionManager.prototype.getNext = function () {
        if (this.pos >= this.connections.length) {
            this.resetNext();
        }
        return this.connections[this.pos++];
    };
    ConnectionManager.prototype.resetNext = function () {
        this.pos;
    };
    ConnectionManager.getInstance = function () {
        if (!ConnectionManager.self) {
            ConnectionManager.self = new ConnectionManager();
        }
        return ConnectionManager.self;
    };
    return ConnectionManager;
}());
exports.ConnectionManager = ConnectionManager;
//# sourceMappingURL=ConnectionManager.js.map