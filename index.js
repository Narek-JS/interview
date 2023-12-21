import { useState } from "react";

export const subscriber = {
  events: {},
  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  },
  publish(event, data) {
    const eventCallbacks = this.events[event];
    if (eventCallbacks) {
      eventCallbacks.forEach((callback) => {
        callback(data);
      });
    }
  },
};

const SenderComponent = () => {
  const publishData = () => {
    subscriber.publish("eventName", "Any data");
  };

  return <button onClick={publishData}>Publish Data</button>;
};

const App = () => {
  const [state, setState] = useState(null);

  const subscribeEvent = () => {
    subscriber.subscribe("eventName", (data) => {
      setState(data);
    });
  };

  return (
    <div>
      <button onClick={subscribeEvent}>Subscribe Event</button>
      <SenderComponent />
    </div>
  );
};
