"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriber = void 0;
var Subscriber = /** @class */ (function () {
    function Subscriber(broker) {
        this._receivingMessagesQueue = [];
        this._broker = broker;
    }
    Subscriber.prototype.addMessageToQueue = function (message) {
        this._receivingMessagesQueue.push(message);
    };
    Subscriber.prototype.subscribe = function (topic) {
        this._broker.registerSubscriber(topic, this);
    };
    Subscriber.prototype.unsubscribe = function (topic) {
        this._broker.deRegisterSubscriber(topic, this);
    };
    Subscriber.prototype.getMessages = function () {
        var messagesReceived = this._receivingMessagesQueue;
        this._receivingMessagesQueue = [];
        return messagesReceived;
    };
    return Subscriber;
}());
exports.Subscriber = Subscriber;
