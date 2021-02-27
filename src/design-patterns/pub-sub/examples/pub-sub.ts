import { Broker } from "../src/broker";
import { Message } from "../src/message";
import { Publisher } from "../src/publisher";
import { Subscriber } from "../src/subscriber";
interface Payload {
    content: string;
}
const TOPIC_JAVASCRIPT = 'Javascript';
const TOPIC_DS_ALGO = 'DataStructures_And_Algorithms';

let broker = new Broker<Payload>();

let jsPublisher = new Publisher<Payload>(broker);
let dsAlgoPublisher = new Publisher<Payload>(broker);


let jsSubscriber = new Subscriber<Payload>(broker);
jsSubscriber.subscribe('Javascript');
let dsAlgoSubscriber = new Subscriber<Payload>(broker);
dsAlgoSubscriber.subscribe('DataStructures_And_Algorithms');

jsPublisher.publish(new Message<Payload>(TOPIC_JAVASCRIPT, { content: 'Closures'}) );
dsAlgoPublisher.publish(new Message<Payload>(TOPIC_DS_ALGO, { content: 'BFS'}) );
jsPublisher.publish(new Message<Payload>(TOPIC_JAVASCRIPT, { content: 'Prototypes'}) );
dsAlgoPublisher.publish(new Message<Payload>(TOPIC_DS_ALGO, { content: 'Dynamic_Programming'}) );
dsAlgoPublisher.publish(new Message<Payload>(TOPIC_DS_ALGO, { content: 'Dijkstras_Algorithm'}) );
jsPublisher.publish(new Message<Payload>(TOPIC_JAVASCRIPT, { content: 'Hoisting'}) );

broker.broadcast();

console.log('Messages received by Javascript Subscriber')
for (let message of jsSubscriber.getMessages()) {
    console.log(message.getTopic(), message.getPayload());
}


console.log('Messages received by Ds Algo Subscriber')
for (let message of dsAlgoSubscriber.getMessages()) {
    console.log(message.getTopic(), message.getPayload());
}


