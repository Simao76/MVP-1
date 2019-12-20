import React from 'react';
import ErrorImage from "../../assets/images/404.png";
import './error.scss';

export default function Error() {
  return (
    <div className="error-container">
      <img src={ErrorImage} alt="page not found" className="error-image"/>
      <h3>Page not found</h3>
    </div>
  )
}
