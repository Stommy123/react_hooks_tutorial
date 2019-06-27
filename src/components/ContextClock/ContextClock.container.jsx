/* eslint-disable */
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context';
import ContextClock from './ContextClock.component';

const ContextClockContainer = _ => {
  const {
    state: {
      clock: { time },
      timeZone: { currentTimeZone }
    },
    dispatch: {
      clock: { setTime }
    }
  } = useContext(GlobalContext);
  useEffect(_ => {
    const interval = setInterval(setTime, 1000);
    return _ => clearInterval(interval);
  }, []);
  return <ContextClock time={time} currentTimeZone={currentTimeZone} />;
};

export default ContextClockContainer;
