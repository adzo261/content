"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Broker = void 0;
var Broker = /** @class */ (function () {
    function Broker() {
        this._topicToSubscribersMap = new Map();
        this._messagesQueue = [];
    }
    Broker.prototype.addMessageToQueue = function (message) {
        this._messagesQueue.push(message);
    };
    Broker.prototype.registerSubscriber = function (topic, subscriber) {
        var currentSubscribers = this._topicToSubscribersMap.get(topic);
        if (!currentSubscribers) {
            currentSubscribers = new Set();
        }
        currentSubscribers.add(subscriber);
        this._topicToSubscribersMap.set(topic, currentSubscribers);
    };
    Broker.prototype.deRegisterSubscriber = function (topic, subscriber) {
        var currentSubscribers = this._topicToSubscribersMap.get(topic);
        if (currentSubscribers) {
            currentSubscribers.delete(subscriber);
            this._topicToSubscribersMap.set(topic, currentSubscribers);
        }
    };
    Broker.prototype.broadcast = function () {
        var e_1, _a;
        if (!this._messagesQueue.length) {
            console.log('No messages available');
        }
        else {
            while (this._messagesQueue.length > 0) {
                var message = this._messagesQueue.shift();
                var topic = message.getTopic();
                var subscribersOfTopic = this._topicToSubscribersMap.get(topic);
                try {
                    for (var _b = (e_1 = void 0, __values(subscribersOfTopic.values())), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var subscriber = _c.value;
                        subscriber.addMessageToQueue(message);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }
    };
    return Broker;
}());
exports.Broker = Broker;
