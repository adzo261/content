import { Message } from "./message";
import { Publisher } from "./publisher";
import { Subscriber } from "./subscriber";

interface BrokerContract<T> {
    registerSubscriber(topic: string, subscriber: Subscriber<T>): void;
    deRegisterSubscriber(topic: string, subscriber: Subscriber<T>): void;
    addMessageToQueue(message: Message<T>): void;
    broadcast(): void;
}

export class Broker<T> implements BrokerContract<T> {

    private _topicToSubscribersMap: Map<string, Set<Subscriber<T>>>;
    private _messagesQueue: Message<T>[];

    constructor() {
        this._topicToSubscribersMap = new Map();
        this._messagesQueue = [];
    }

    public addMessageToQueue(message: Message<T>): void {
        this._messagesQueue.push(message);
    }

    public registerSubscriber(topic: string, subscriber: Subscriber<T>): void {
        let currentSubscribers = this._topicToSubscribersMap.get(topic);
        if (!currentSubscribers) {
            currentSubscribers = new Set();
        }
        currentSubscribers.add(subscriber)
        this._topicToSubscribersMap.set(topic, currentSubscribers);
    }

    public deRegisterSubscriber(topic: string, subscriber: Subscriber<T>): void {
        let currentSubscribers = this._topicToSubscribersMap.get(topic);
        if (currentSubscribers) {
            currentSubscribers.delete(subscriber);
            this._topicToSubscribersMap.set(topic, currentSubscribers);
        }
    }

    public broadcast(): void {
        if (!this._messagesQueue.length) {
            console.log('No messages available');
        } else {
            while(this._messagesQueue.length > 0) {
                let message = this._messagesQueue.shift() as Message<T>;
                let topic = message.getTopic();
                let subscribersOfTopic = this._topicToSubscribersMap.get(topic);
                for (let subscriber of subscribersOfTopic!.values()) {
                    subscriber.addMessageToQueue(message);
                }
            }
        }
    }

}




