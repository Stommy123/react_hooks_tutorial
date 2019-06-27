/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Clock from './Clock.component';

const ClockContainer = _ => {
  const [time, setTime] = useState(new Date());
  const tick = _ => setTime(new Date());
  useEffect(_ => {
    const interval = setInterval(tick, 1000);
    return _ => clearInterval(interval);
  }, []);
  const parsedTime = time.toLocaleTimeString();
  return <Clock time={parsedTime} />;
};

export default ClockContainer;
