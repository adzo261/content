"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var Message = /** @class */ (function () {
    function Message(topic, payload) {
        this._topic = topic;
        this._payload = payload;
    }
    Message.prototype.getTopic = function () {
        return this._topic;
    };
    Message.prototype.setTopic = function (topic) {
        this._topic = topic;
    };
    Message.prototype.getPayload = function () {
        return this._payload;
    };
    Message.prototype.setPayload = function (payload) {
        this._payload = payload;
    };
    return Message;
}());
exports.Message = Message;
