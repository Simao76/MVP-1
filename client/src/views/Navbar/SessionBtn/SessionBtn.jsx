import React, { Fragment }  from "react";
import { NavLink } from "react-router-dom";
import "./SessionBtn.scss";

const SessionBtn = props => {
  return (
    <div className="session-buttons">
      <ul>
        {!props.user && (
          <Fragment>
            <NavLink to="/signup">
              <span className="session-link">
                <li>Signup</li>
              </span>
            </NavLink>

            <NavLink to="/login">
              <span className="navigation-link">
                <li>Login</li>
              </span>
            </NavLink>
          </Fragment>
        )}

        {props.user && (
          <NavLink to="/logout">
            <span className="session-link">
              <li>Logout</li>
            </span>
          </NavLink>
        )}

      </ul>
  </div>
  )
};

export default SessionBtn;
