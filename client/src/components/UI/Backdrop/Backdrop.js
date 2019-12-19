import React from "react";
import "./backdrop.scss";

const backdrop = props => (
    <div className="backdrop" onClick={props.click}></div>

);

export default backdrop;
