import React from "react";
import { NavLink } from "react-router-dom";
/* import "./SessionBtn.scss"; */

const SessionBtn = props => (
  <div className="sessionbtns">
    <ul>
      <NavLink to="/signup">
        <span className="navigation-links">
          <li>Signup</li>
        </span>
      </NavLink>

      <NavLink to="/login">
        <span className="navigation-links">
          <li>Login</li>
        </span>
      </NavLink>

      {props.userState && (
        <NavLink to="/logout">
          <span className="navigation-links">
            <li>Logout</li>
          </span>
        </NavLink>
      )}
    </ul>
  </div>
);

export default SessionBtn;
