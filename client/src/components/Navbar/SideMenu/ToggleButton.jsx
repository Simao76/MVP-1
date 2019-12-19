import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ToggleButton(props) {
  return (
    <div className="burger-menu"><FontAwesomeIcon icon="bars" onClick={props.click}/></div>
  )
}
