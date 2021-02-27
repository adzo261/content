'use strict';
var __values =
  (this && this.__values) ||
  function(o) {
    var s = typeof Symbol === 'function' && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === 'number')
      return {
        next: function() {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        },
      };
    throw new TypeError(
      s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
    );
  };
var e_1, _a, e_2, _b;
Object.defineProperty(exports, '__esModule', { value: true });
var broker_1 = require('../src/broker');
var message_1 = require('../src/message');
var publisher_1 = require('../src/publisher');
var subscriber_1 = require('../src/subscriber');
var TOPIC_JAVASCRIPT = 'Javascript';
var TOPIC_DS_ALGO = 'DataStructures_And_Algorithms';
var broker = new broker_1.Broker();
var jsPublisher = new publisher_1.Publisher(broker);
var dsAlgoPublisher = new publisher_1.Publisher(broker);
var jsSubscriber = new subscriber_1.Subscriber(broker);
jsSubscriber.subscribe('Javascript');
var dsAlgoSubscriber = new subscriber_1.Subscriber(broker);
dsAlgoSubscriber.subscribe('DataStructures_And_Algorithms');
jsPublisher.publish(
  new message_1.Message(TOPIC_JAVASCRIPT, { content: 'Closures' }),
);
dsAlgoPublisher.publish(
  new message_1.Message(TOPIC_DS_ALGO, { content: 'BFS' }),
);
jsPublisher.publish(
  new message_1.Message(TOPIC_JAVASCRIPT, { content: 'Prototypes' }),
);
dsAlgoPublisher.publish(
  new message_1.Message(TOPIC_DS_ALGO, { content: 'Dynamic_Programming' }),
);
dsAlgoPublisher.publish(
  new message_1.Message(TOPIC_DS_ALGO, { content: 'Dijkstras_Algorithm' }),
);
jsPublisher.publish(
  new message_1.Message(TOPIC_JAVASCRIPT, { content: 'Hoisting' }),
);
console.log('Messages received by Javascript Subscriber');
try {
  for (
    var _c = __values(jsSubscriber.getMessages()), _d = _c.next();
    !_d.done;
    _d = _c.next()
  ) {
    var message = _d.value;
    console.log(message.getTopic(), message.getPayload());
  }
} catch (e_1_1) {
  e_1 = { error: e_1_1 };
} finally {
  try {
    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
  } finally {
    if (e_1) throw e_1.error;
  }
}
console.log('Messages received by Ds Algo Subscriber');
try {
  for (
    var _e = __values(dsAlgoSubscriber.getMessages()), _f = _e.next();
    !_f.done;
    _f = _e.next()
  ) {
    var message = _f.value;
    console.log(message.getTopic(), message.getPayload());
  }
} catch (e_2_1) {
  e_2 = { error: e_2_1 };
} finally {
  try {
    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
  } finally {
    if (e_2) throw e_2.error;
  }
}
