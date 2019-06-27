import React from 'react';
import { formatName, getLocalTime, getLocalDateTime } from '../TimeZones/TimeZones.helpers';

const ContextClock = ({ time, currentTimeZone }) => {
  const currentLocalTime = getLocalTime(time, currentTimeZone);
  const formattedTimeZone = formatName(currentTimeZone);
  const currentLocalDate = getLocalDateTime(time, currentTimeZone);
  return (
    <main>
      <div id="current-date">{currentLocalDate}</div>
      <div id="current-time">{currentLocalTime}</div>
      <div id="current-zone">{formattedTimeZone}</div>
    </main>
  );
};

export default ContextClock;
