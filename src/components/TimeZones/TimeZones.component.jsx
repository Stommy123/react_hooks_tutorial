import React from 'react';
import { getLocalTime, formatName } from './TimeZones.helpers';

const TimeZones = ({ handleSearch, searchBarRef, queriedZones = [], time, handleSelection }) => (
  <>
    <div id="search">
      <input
        id="search-bar"
        type="text"
        autoComplete="off"
        placeholder="Search"
        onChange={handleSearch}
        onFocus={handleSearch}
        ref={searchBarRef}
      />
      <ul id="search-results">
        {queriedZones.map(timeZone => {
          const localTime = getLocalTime(time, timeZone);
          const displayName = formatName(timeZone);
          return (
            <li key={timeZone} onClick={handleSelection(timeZone)}>
              <span className="zone-name">{displayName}</span>
              <span className="local-time">{localTime}</span>
            </li>
          );
        })}
      </ul>
    </div>
  </>
);

export default TimeZones;
