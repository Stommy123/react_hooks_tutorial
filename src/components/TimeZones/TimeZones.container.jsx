/* eslint-disable */
import React, { useContext, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { TIME_ZONES_URL, CLICK } from './TimeZones.constants';
import { filterTimeZones } from './TimeZones.helpers';
import { GlobalContext } from '../../context';
import TimeZones from './TimeZones.component';

const TimeZonesContainer = _ => {
  const {
    state: {
      clock: { time },
      timeZone: { allTimeZones, queriedZones }
    },
    dispatch: {
      timeZone: { setTimeZone, setAllTimeZones, setQueriedZones, clearQueriedZones }
    }
  } = useContext(GlobalContext);
  const searchBar = useRef();
  const fetchTimeZones = async _ => {
    const { data: { zones = [] } = {} } = await axios.get(TIME_ZONES_URL);
    const newTimeZones = zones.reduce((acc, { zoneName }) => {
      if (zoneName.startsWith('Antartica')) return acc;
      acc.push(zoneName);
      return acc;
    }, []);
    setAllTimeZones(newTimeZones);
  };
  const handleClickAway = e => !e.target.closest('#search') && clearQueriedZones();
  const handleSelection = timeZone => _ => {
    setTimeZone(timeZone);
    clearQueriedZones();
    searchBar.current.value = String();
  };
  const handleSearch = _ => {
    const input = searchBar.current.value;
    const filteredZones = filterTimeZones(input, allTimeZones);
    setQueriedZones(filteredZones);
  };
  const mountEffect = useCallback(fetchTimeZones, []);
  useEffect(
    _ => {
      mountEffect();
      document.addEventListener(CLICK, handleClickAway);
      return _ => document.removeEventListener(CLICK, handleClickAway);
    },
    [mountEffect]
  );
  return (
    <TimeZones
      handleSearch={handleSearch}
      searchBarRef={searchBar}
      queriedZones={queriedZones}
      time={time}
      handleSelection={handleSelection}
    />
  );
};

export default TimeZonesContainer;
