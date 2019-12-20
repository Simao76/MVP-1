import React, { Fragment }  from "react";
import { NavLink } from "react-router-dom";
import "./SessionBtn.scss";

const SessionBtn = props => {
  return (
    <div className="session-buttons">
      <ul>
        {!props.user && (
          <Fragment>
            <NavLink to="/login">
              <span className="session-link">
                <li>Login</li>
              </span>
            </NavLink>

            <NavLink to="/signup">
              <span className="session-link">
                <li>Signup</li>
              </span>
            </NavLink>
          </Fragment>
        )}

        {props.user && (
          <NavLink to="/" onClick={props.signOut}>
            <span className="logout-link">
              <li>Logout</li>
            </span>
          </NavLink>
        )}

      </ul>
  </div>
  )
};

export default SessionBtn;
