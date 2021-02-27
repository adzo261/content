"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publisher = void 0;
var Publisher = /** @class */ (function () {
    function Publisher(broker) {
        this._broker = broker;
    }
    Publisher.prototype.publish = function (message) {
        this._broker.addMessageToQueue(message);
    };
    return Publisher;
}());
exports.Publisher = Publisher;
