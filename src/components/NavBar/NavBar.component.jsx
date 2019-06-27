import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = _ => (
  <div id="navbar">
    <NavLink className="nav-item nav-link" activeClassName="active" to="/">
      Welcome
    </NavLink>
    <NavLink className="nav-item nav-link" activeClassName="active" to="/room">
      Room - use State
    </NavLink>
    <NavLink className="nav-item nav-link" activeClassName="active" to="/clock">
      Clock - useEffect
    </NavLink>
    <NavLink className="nav-item nav-link" activeClassName="active" to="/timezones">
      Timezones - useContext / useRef
    </NavLink>
    <NavLink className="nav-item nav-link" activeClassName="active" to="/calculator">
      Calculator - useReducer
    </NavLink>
  </div>
);

export default NavBar;
