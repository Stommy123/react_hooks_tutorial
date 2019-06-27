import React from 'react';
import { Route } from 'react-router-dom';
import { NavBar } from '../components';
import { Welcome, useStateRoom, useEffectClock, useContextTimeZoneClock, useReducerCalculator } from '../pages';

const Content = _ => (
  <>
    <NavBar />
    <Route exact path="/" component={Welcome} />
    <Route exact path="/room" component={useStateRoom} />
    <Route exact path="/clock" component={useEffectClock} />
    <Route exact path="/timezones" component={useContextTimeZoneClock} />
    <Route exact path="/calculator" component={useReducerCalculator} />
  </>
);

export default Content;
