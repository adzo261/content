import { Broker } from "./broker";
import { Message } from "./message";

interface SubscriberContract<T> {

  addMessageToQueue(message: Message<T>): void ;
  subscribe(topic: string): void;
  unsubscribe(topic: string): void;
  getMessages(): Message<T>[];
}

export class Subscriber<T> implements SubscriberContract<T> {

  private _broker: Broker<T>;
  private _receivingMessagesQueue: Message<T>[];

  constructor(broker: Broker<T>) {
    this._receivingMessagesQueue = [];
    this._broker = broker;
  }

  addMessageToQueue(message: Message<T>): void {
    this._receivingMessagesQueue.push(message);
  }

  subscribe(topic: string) {
    this._broker.registerSubscriber(topic, this);
  }

  unsubscribe(topic: string) {
    this._broker.deRegisterSubscriber(topic, this);
  }

  getMessages(): Message<T>[] {
    let messagesReceived: Message<T>[] = this._receivingMessagesQueue;
    this._receivingMessagesQueue = []
    return messagesReceived;
  }

}
