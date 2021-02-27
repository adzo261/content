interface MessageContract<T> {
  getTopic(): string;
  setTopic(topic: string): void;
  getPayload(): any;
  setPayload(payload: T): void;
}

export class Message<T> implements MessageContract<T> {
  private _topic: string;
  private _payload: T;

  constructor(topic: string, payload: T) {
    this._topic = topic;
    this._payload = payload;
  }
  public getTopic(): string {
    return this._topic;
  }
  public setTopic(topic: string): void {
    this._topic = topic;
  }
  public getPayload(): any {
    return this._payload;
  }
  public setPayload(payload: T): void {
    this._payload = payload;
  }
}
