/*
 ***************************
 ********** REACT **********
 ***************************

 . Event emitter (publish-subscribe)
 . Implement useDebounce Hook
 . Implement usePrevious Hook
 . Implement useHover Hook
 . Implement useKeyPress Hook
 ____________________________
 ****************************    
 */

/*********************************************************/
/*********** Event emitter (publish-subscribe) ***********/
/*********************************************************/

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

  console.log(state);

  return (
    <div>
      <button onClick={subscribeEvent}>Subscribe Event</button>
      <SenderComponent />
    </div>
  );
};

/**************************************************************************************/

/**************************************************/
/*********** Implement useDebounce Hook ***********/
/**************************************************/

import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

/**************************************************************************************/

/**************************************************/
/*********** Implement usePrevious Hook ***********/
/**************************************************/

import { useEffect, useRef } from "react";

export const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

/**************************************************************************************/

/***********************************************/
/*********** Implement useHover Hook ***********/
/***********************************************/

import { useState, useEffect, useRef } from "react";

export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const targetRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const target = targetRef.current;
    if (target) {
      target.addEventListener("mouseenter", handleMouseEnter);
      target.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (target) {
        target.removeEventListener("mouseenter", handleMouseEnter);
        target.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return [targetRef, isHovered];
};

/**************************************************/
/*********** Implement useKeyPress Hook ***********/
/**************************************************/

import { useState, useEffect } from "react";

export const useKeyPress = (targetKey) => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  const handleKeyDown = ({ key }) => {
    if (key === targetKey) {
      setIsKeyPressed(true);
    }
  };

  const handleKeyUp = ({ key }) => {
    if (key === targetKey) {
      setIsKeyPressed(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return isKeyPressed;
};
