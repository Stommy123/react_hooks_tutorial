import React from 'react';
import { TimeZones, ContextClock, LayoutContainer } from '../../components';

const useContextTimeZoneClock = _ => (
  <LayoutContainer>
    <ContextClock />
    <TimeZones />
  </LayoutContainer>
);

export default useContextTimeZoneClock;
