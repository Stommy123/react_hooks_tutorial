import React from 'react';
import { LIGHT_URL, ON, OFF, LIGHT, DARK } from './Room.constants';

const Room = ({ toggleLightBulb, lightOn, label }) => (
  <main id="room" className={lightOn ? LIGHT : DARK}>
    <img src={LIGHT_URL} alt="lightbulb" id="lightbulb" className={lightOn ? ON : OFF} />
    <button onClick={toggleLightBulb} id="lightswitch">
      {label}
    </button>
  </main>
);

export default Room;
