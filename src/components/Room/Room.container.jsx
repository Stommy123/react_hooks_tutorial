import React, { useState } from 'react';
import Room from './Room.component';
import { TURN_LIGHT_OFF, TURN_LIGHT_ON } from './Room.constants';

const RoomContainer = _ => {
  const [lightOn, setLightOn] = useState(false);
  const toggleLightBulb = _ => setLightOn(!lightOn);
  const label = lightOn ? TURN_LIGHT_OFF : TURN_LIGHT_ON;
  return <Room toggleLightBulb={toggleLightBulb} label={label} lightOn={lightOn} />;
};

export default RoomContainer;
