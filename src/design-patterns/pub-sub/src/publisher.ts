import { Broker } from "./broker";
import { Message } from "./message";

interface PublisherContract<T> {
  publish(message: Message<T>, broker: Broker<T>): void;
}

export class Publisher<T> implements PublisherContract<T> {
  private _broker: Broker<T>

  constructor(broker: Broker<T>) {
    this._broker = broker;
  }
  public publish(message: Message<T>) {
    this._broker.addMessageToQueue(message);
  }
}
